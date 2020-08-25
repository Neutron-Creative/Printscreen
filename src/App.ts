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

console.log("Initializing Neutron Capture");

let server: CaptureServer = new CaptureServer();

server.addRoute(new CaptureRouter(server.fastify));

server.startServer();

console.log("Neutron Capture is listening for requests!");