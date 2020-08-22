import {CaptureRouter} from "./routes/capture-router";
import * as configFile from "./config.json";
import fastifyInit, {FastifyInstance} from "fastify";
import {CaptureServer} from "./server/capture-server";
import * as pjson from "../package.json";

export let config = configFile;
let fastify: FastifyInstance;

if (process.env.PORT) {
    config.port = Number.parseInt(process.env.PORT);
}

if (process.env.HOST) {
    config.host = process.env.HOST;
}

console.log("Initializing Neutron Capture v" + pjson.version);

fastify = fastifyInit({
    logger: true
});

let server: CaptureServer = new CaptureServer(fastify);

server.addRoute(new CaptureRouter(fastify));

server.startServer();

console.log("Neutron Capture is listening for requests!");