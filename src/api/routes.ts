import {fastify} from "../App";
import Pageres from "pageres";

export class Routes {
    static registerRoutes(): void {
        /**
         * Index API
         */

        fastify.get('/', async (request, reply) => {
            reply.type('application/json').code(200);

            return {message: "It's working!"};
        });

        fastify.get('/favicon.ico', async (request, reply) => {
            reply.type('application/json').code(200);

            return null;
        });

        fastify.get('/capture', async (request, reply) => {
            let queryParams = request.query;

            await new Pageres({delay: 2})
                .src('https://github.com/sindresorhus/pageres', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
                .src('https://sindresorhus.com', ['1280x1024', '1920x1080'])
                .src('data:text/html,<h1>Awesome!</h1>', ['1024x768'])
                .dest("captures")
                .run();

            console.log('Finished generating screenshots!');

            reply.type('application/json').code(200);

            return {message: "To be added"};
        });
    }
}
