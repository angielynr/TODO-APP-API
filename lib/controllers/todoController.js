const todoService = require("../services/todoService");

module.exports = {
    getAllTodos: async function (req, reply) {
        try {
            const todos = await todoService.getAllTodos();
            reply.send(todos);
        } catch (error) {
            reply.code(500).send({ message: "Internal Server Error" });
        }
    },
    getTodoById: async function (req, reply) {
        const { id } = req.params;
        try {
            const todo = await todoService.getTodoById(id);
            if (todo) {
                reply.send(todo);
            } else {
                reply.code(404).send({ message: `Todo item ${id} not found` });
            }
        } catch (error) {
            reply.code(500).send({ message: "Internal Server Error" });
        }
    },
    createTodo: async function (req, reply) {
        const { name } = req.body;
        if (!name || name.trim() === "") {
            reply.code(400).send({
                message: "Name must not be empty or contain only whitespace",
            });
            return;
        }
        try {
            const newTodo = await todoService.createTodo(name);
            reply.code(201).send(newTodo);
        } catch (error) {
            reply.code(500).send({ message: "Internal Server Error" });
        }
    },
    updateTodo: async function (req, reply) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const updatedTodo = await todoService.updateTodo(id, name);
            if (updatedTodo) {
                reply.send(updatedTodo);
            } else {
                reply.code(404).send({ message: `Todo item ${id} not found` });
            }
        } catch (error) {
            reply.code(500).send({ message: "Internal Server Error" });
        }
    },
    deleteTodoById: async function (req, reply) {
        const { id } = req.params;
        try {
            const deletedTodo = await todoService.deleteTodoById(id);
            if (deletedTodo) {
                reply.send({
                    message: `Todo item ${id} deleted successfully`,
                });
            } else {
                reply.code(404).send({ message: `Todo item ${id} not found` });
            }
        } catch (error) {
            reply.code(500).send({ message: "Internal Server Error" });
        }
    },
};
