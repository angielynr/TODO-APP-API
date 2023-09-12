const todoController = require("../controllers/todoController");

function todoRoutes(fastify, options, done) {
    fastify.get("/todos", todoController.getAllTodos);

    fastify.get("/todos/:id", todoController.getTodoById);

    fastify.post("/todos", todoController.createTodo);

    fastify.put("/todos/:id", todoController.updateTodo);

    fastify.delete("/todos/:id", todoController.deleteTodoById);

    done();
}

module.exports = todoRoutes;

// const knex = require("knex");
// const knexConfig = require("../knexfile");

// const db = knex(knexConfig.development);

// const todo = {
//     type: "object",
//     properties: {
//         id: { type: "number" },
//         name: { type: "string" },
//     },
// };

// const getTodosOpts = {
//     schema: {
//         response: {
//             200: {
//                 type: "array",
//                 todos: todo,
//             },
//         },
//     },
//     handler: async (req, reply) => {
//         try {
//             const todos = await db.select().from("todolist");
//             reply.send(todos);
//         } catch (error) {
//             reply.code(500).send({ message: "Internal Server Error" });
//         }
//     },
// };

// const getTodoOpts = {
//     schema: {
//         params: {
//             type: "object",
//             properties: {
//                 id: { type: "number" },
//             },
//         },
//         response: {
//             200: todo,
//             404: {
//                 type: "object",
//                 properties: {
//                     message: { type: "string" },
//                 },
//             },
//         },
//     },
//     handler: async (req, reply) => {
//         const { id } = req.params;

//         try {
//             const todoItem = await db
//                 .select()
//                 .from("todolist")
//                 .where({ id })
//                 .first();
//             if (todoItem) {
//                 reply.send(todoItem);
//             } else {
//                 reply.code(404).send({ message: `Todo item ${id} not found` });
//             }
//         } catch (error) {
//             reply.code(500).send({ message: "Internal Server Error" });
//         }
//     },
// };

// const addTodoOpts = {
//     schema: {
//         body: {
//             type: "object",
//             required: ["name"],
//             properties: {
//                 name: { type: "string" },
//             },
//         },
//         response: {
//             201: todo,
//         },
//     },
//     handler: async (req, reply) => {
//         const { name } = req.body;

//         if (name.trim() === "") {
//             reply.code(400).send({
//                 message: "Name must not be empty or contain only whitespace",
//             });
//             return;
//         }

//         try {
//             await db("todolist").insert({ name });
//             reply.code(201).send({ message: `${name} is added successfully` });
//         } catch (error) {
//             reply.code(500).send({ message: "Internal Server Error" });
//         }
//     },
// };

// const deleteTodoOpts = {
//     schema: {
//         params: {
//             type: "object",
//             properties: {
//                 id: { type: "number" },
//             },
//         },
//         response: {
//             200: {
//                 type: "object",
//                 properties: {
//                     message: { type: "string" },
//                 },
//             },
//         },
//     },
//     handler: async (req, reply) => {
//         const { id } = req.params;

//         try {
//             const deletedCount = await db("todolist").where({ id }).del();
//             if (deletedCount === 0) {
//                 reply
//                     .status(404)
//                     .send({ message: `Todo item ${id} not found` });
//             } else {
//                 reply.send({ message: `Todo item ${id} deleted successfully` });
//             }
//         } catch (error) {
//             reply.status(500).send({ message: "Internal Server Error" });
//         }
//     },
// };

// const updateTodoOpts = {
//     schema: {
//         params: {
//             type: "object",
//             properties: {
//                 id: { type: "number" },
//             },
//         },
//         body: {
//             type: "object",
//             properties: {
//                 name: { type: "string" },
//             },
//         },
//         response: {
//             200: todo,
//             404: {
//                 type: "object",
//                 properties: {
//                     message: { type: "string" },
//                 },
//             },
//         },
//     },
//     handler: async (req, reply) => {
//         const { id } = req.params;
//         const { name } = req.body;

//         try {
//             const updatedCount = await db("todolist")
//                 .where({ id })
//                 .update({ name });

//             if (updatedCount === 0) {
//                 reply
//                     .status(404)
//                     .send({ message: `Todo item ${id} not found` });
//             } else {
//                 const updatedTodo = await db("todolist").where({ id }).first();
//                 reply.send(updatedTodo);
//             }
//         } catch (error) {
//             reply.status(500).send({ message: "Internal Server Error" });
//         }
//     },
// };

// function todoRoute(fastify, options, done) {
//     fastify.get("/todos", getTodosOpts);

//     fastify.get("/todos/:id", getTodoOpts);

//     fastify.post("/todos", addTodoOpts);

//     fastify.delete("/todos/:id", deleteTodoOpts);

//     fastify.put("/todos/:id", updateTodoOpts);

//     done();
// }

// module.exports = todoRoute;
