import {PageresQuery} from "../data/pageres-query";
import fs from "fs";
import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";
import Pageres from "pageres";
import * as ObjectHash from "object-hash";
import * as Minio from "minio";
import {config} from "../App";
import {constants as HttpStatus} from "http2";

export class CaptureRouter implements IRouter {
    fastify: FastifyInstance;
    minio?: Minio.Client = undefined;
    serverReady: boolean = false;
    bucketEnabled: boolean = false;

    constructor(fastify: FastifyInstance) {
        this.fastify = fastify;

        if (config.s3Bucket) {
            let minio;

            minio = this.minio = new Minio.Client({
                endPoint: config.s3Bucket.endPoint,
                port: config.s3Bucket.port ?? config.s3Bucket.useSSL ? 443 : 80,
                useSSL: config.s3Bucket.useSSL,
                accessKey: config.s3Bucket.accessKey,
                secretKey: config.s3Bucket.secretKey
            });

            minio.bucketExists(config.s3Bucket.bucketName).then(result => {
                this.bucketEnabled = result;

                if (!this.bucketEnabled) {
                    console.log(`S3 Bucket was configured, but no bucket with the name ${config.s3Bucket.bucketName} exists! You need to make this bucket first before you can use it.`);
                    return;
                } else {
                    console.log(`S3 Bucket is ready!`);
                }

                this.serverReady = true;
            });
        }

    }

    registerRoutes() {
        let fastify = this.fastify;

        /**
         * Capture route
         */

        fastify.get('/api/v1/capture', async (request, reply) => {

            if (!this.serverReady) {
                reply.type("application/json").code(HttpStatus.HTTP_STATUS_SERVICE_UNAVAILABLE);
                return {error: "The server is still warming up, please wait!"};
            }

            try {

                await this.takeScreenshot(request, reply);

            } catch (e) {

                if (e instanceof URIError) {

                    console.error(`URI Error: There was a problem while trying to generate screenshots: ${e}`);

                    reply.type('application/json').code(HttpStatus.HTTP_STATUS_BAD_REQUEST);
                    return {error: "Data was missing from the query."};

                } else {

                    console.error(`There was a problem while trying to generate screenshots: ${e}`);

                    reply.type('application/json').code(HttpStatus.HTTP_STATUS_BAD_REQUEST);
                    return {error: e.toString()};

                }

            }

        });
    }

    private async takeScreenshot(request: FastifyRequest, reply: FastifyReply) {
        let query: any = request.query;
        let pageresQuery = new PageresQuery(query);
        let hash = ObjectHash.sha1(pageresQuery);

        if (!pageresQuery.url.startsWith("http")) {
            reply.type("application/json").code(HttpStatus.HTTP_STATUS_BAD_REQUEST);
            return {error: "Only http protocol is supported."};
        }

        if (!pageresQuery.nocache && this.bucketEnabled && this.minio) {
            let bucketName = config.s3Bucket.bucketName;

            try {
                let stats = await this.minio.statObject(bucketName, "imageCache/" + hash);
                let expires: Date = new Date(Date.parse(JSON.parse(stats.metaData.expires)));
                let filename: string = stats.metaData.filename;
                let date = new Date();

                if (expires > date) {
                    console.log(`Pulling from S3 bucket: imageCache/${hash}`);

                    let file = `temp/${hash}.png`;
                    await this.minio.fGetObject(bucketName, "imageCache/" + hash, file);

                    const stream = fs.createReadStream(file);

                    reply.type('application/octet-stream').code(HttpStatus.HTTP_STATUS_OK);
                    reply.header('Content-Disposition', `inline; filename=${filename}`);
                    reply.send(stream);

                    fs.unlink(file, err => {
                        if (err != null)
                            console.error("Error unlinking cached file: " + err);
                    });
                }
            } catch (e) {
                console.log("No s3 cache found for pageresQuery: " + hash + ", downloading instead.");
            }
        }

        let screenshot = (await new Pageres(pageresQuery.options.asObject())
            .src(pageresQuery.url, pageresQuery.sizes)
            .dest("captures")
            .run())[0];

        console.log(`Generated screenshot ${screenshot.filename} ${hash} of length ${screenshot.byteLength}`);

        reply.type('application/octet-stream').code(HttpStatus.HTTP_STATUS_OK);
        reply.header('Content-Disposition', `inline; filename=${screenshot.filename}`);

        const stream = fs.createReadStream(`captures/${screenshot.filename}`);
        reply.send(stream);

        if (!pageresQuery.nocache && this.bucketEnabled && this.minio) {
            console.log("Caching to S3 Bucket");

            let expires = new Date();
            expires.setSeconds(expires.getSeconds() + pageresQuery.ttl);

            await this.minio.fPutObject(
                config.s3Bucket.bucketName, "imageCache/" + hash,
                `captures/${screenshot.filename}`,
                {
                    "expires": JSON.stringify(expires),
                    "filename": screenshot.filename
                }
            );
        }

        fs.unlink(`captures/${screenshot.filename}`, err => {
            if (err != null)
                console.error("Error unlinking file: " + err);
        });

    }
}
