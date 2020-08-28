import * as configFile from "./config.json";
import {CaptureRouter} from "./routes/capture-router";
import {CaptureServer} from "./server/capture-server";

export let config = configFile;

if (process.env.PORT) {
    config.port = Number.parseInt(process.env.PORT);
}

if (process.env.HOST) {
    config.host = process.env.HOST;
}

if (process.env.S3ENDPOINT) {
    config.s3Bucket.endPoint = process.env.S3ENDPOINT;
}

if (process.env.S3PORT) {
    config.s3Bucket.port = Number.parseInt(process.env.S3PORT);
}

if (process.env.S3USESSL) {
    config.s3Bucket.useSSL = process.env.S3USESSL == "true";
}

if (process.env.S3ACCESSKEY) {
    config.s3Bucket.accessKey = process.env.S3ACCESSKEY;
}

if (process.env.S3SECRETKEY) {
    config.s3Bucket.secretKey = process.env.S3SECRETKEY;
}

if (config.s3Bucket.endPoint) {
    console.log("S3 Bucket caching is enabled!");
}

console.log("Initializing Neutron Capture");

let server: CaptureServer = new CaptureServer();
server.addRoute(new CaptureRouter(server.fastify));
server.startServer();