import {config} from "../App";
import {FastifyInstance} from "fastify";

/**
 * The Capture Server contains a Fastify instance and a list of IRouters, which register routes with Fastify.
 */
export class CaptureServer {
    fastify: FastifyInstance;
    routers: IRouter[];

    constructor(fastify: FastifyInstance, routers?: IRouter[]) {
        this.fastify = fastify;

        if (routers)
            this.routers = routers;
        else
            this.routers = [];
    }

    addRoute(router: IRouter) {
        this.routers.push(router);
    }

    removeRoute(router: IRouter) {
        let index = this.routers.indexOf(router);

        if (index > -1)
            this.routers.splice(index, 1);
    }

    /**
     * Starts the fastify server with the routes provided.
     */
    startServer() {
        this.fastify.listen(config.port, config.host, (err, address) => {
            if (err)
                throw err;

            this.fastify.log.info(`Neutron Capture server listening on ${address}`);
        });

        this.registerDefaultRoutes();

        for (let router of this.routers) {
            router.registerRoutes();
        }
    }

    registerDefaultRoutes() {
        /**
         * Index
         */

        this.fastify.get('/', async (request, reply) => {
            reply.type('application/json').code(200);

            return {message: "It's working!"};
        });

        this.fastify.get('/favicon.ico', async (request, reply) => {
            reply.type('application/json').code(200);

            return null;
        });
    }

}