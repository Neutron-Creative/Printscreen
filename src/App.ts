import fastifyInit from "fastify";
import {Routes} from "./api/routes";

export const fastify = fastifyInit({
    logger: true
});

Routes.registerRoutes();

fastify.listen(500, (err, address) => {
    if (err)
        throw err;

    fastify.log.info(`Neutron Capture server listening on ${address}`);
});
