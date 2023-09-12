const todoModel = require("../models/todo");

module.exports = {
    getAllTodos: async function () {
        return todoModel.getAll();
    },
    getTodoById: async function (id) {
        return todoModel.getById(id);
    },
    createTodo: async function (name) {
        return todoModel.create(name);
    },
    updateTodo: async function (id, name) {
        return todoModel.update(id, name);
    },
    deleteTodoById: async function (id) {
        return todoModel.deleteById(id);
    },
};
