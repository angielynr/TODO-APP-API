const fastify = require("fastify")({ logger: true });
const fastifySwagger = require("fastify-swagger");
const routes = require("./lib/routes/todos");

const PORT = 5000;

const serverOptions = {
    exposeRoute: true,
    routePrefix: "/swagger",
    swagger: {
        info: { title: "fastify-api" },
    },
};

fastify.register(fastifySwagger, serverOptions);

fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen(PORT);
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();
