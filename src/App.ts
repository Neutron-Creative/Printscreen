import {CaptureServer} from "./capture/capture-server";

console.log("Initializing Neutron Capture");

let server: CaptureServer = new CaptureServer();

server.startServer();
server.registerRoutes();

console.log("Neutron Capture is listening for requests!");
