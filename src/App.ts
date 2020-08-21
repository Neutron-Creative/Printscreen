import {CaptureServer} from "./capture/capture-server";
import * as configFile from "./config.json";

export let config = configFile;

if (process.env.PORT) {
    config.port = Number.parseInt(process.env.PORT);
}

if (process.env.HOST) {
    config.host = process.env.HOST;
}

console.log("Initializing Neutron Capture");

let server: CaptureServer = new CaptureServer();

server.startServer();
server.registerRoutes();

console.log("Neutron Capture is listening for requests!");
