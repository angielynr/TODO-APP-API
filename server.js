const fastify = require("fastify")({ logger: true });
const fastifySwagger = require("fastify-swagger");
const routes = require("./lib/routes/todos");
const cors = require("fastify-cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.API_PORT;

const serverOptions = {
    exposeRoute: true,
    routePrefix: "/swagger",
    swagger: {
        info: { title: "fastify-api" },
    },
};

fastify.register(fastifySwagger, serverOptions);

fastify.register(cors, {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
});

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
