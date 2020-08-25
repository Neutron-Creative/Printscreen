import {PageResQuery} from "../data/page-res-query";
import fs from "fs";
import {FastifyInstance} from "fastify";
import Pageres from "pageres";

export class CaptureRouter implements IRouter {
    fastify: FastifyInstance;

    constructor(fastify: FastifyInstance) {
        this.fastify = fastify;
    }

    registerRoutes() {
        let fastify = this.fastify;

        /**
         * Capture route
         */

        fastify.get('/api/v1/capture', async (request, reply) => {
            try {
                let query = new PageResQuery(request.query);

                if (!query.url.startsWith("http")) {
                    reply.type('application/json').code(400);
                    return {error: "Only http protocol is supported."};
                }

                let screenshots = await new Pageres(query.options.asObject())
                    .src(query.url, query.sizes)
                    .dest("captures")
                    .run();

                let screenshot = screenshots[0];

                console.log(`Generated screenshot ${screenshot.filename} of length ${screenshot.byteLength}`);

                reply.type('application/octet-stream').code(200);
                reply.header('Content-Disposition', `inline; filename=${screenshot.filename}`);

                const stream = fs.createReadStream(`captures/${screenshot.filename}`);
                reply.send(stream);

                fs.unlink(`captures/${screenshot.filename}`, err => {
                    if (err != null)
                        console.error("Error unlinking file: " + err);
                });
            } catch (e) {
                if (e instanceof URIError) {

                    console.error(`URI Error: There was a problem while trying to generate screenshots: ${e}`);

                    reply.type('application/json').code(400);
                    return {error: "Data was missing from the query."};

                } else {

                    console.error(`There was a problem while trying to generate screenshots: ${e}`);

                    reply.type('application/json').code(400);
                    return {error: e.toString()};

                }
            }
        });
    }
}
