const knex = require("knex");
const knexConfig = require("../config/knexfile");

const db = knex(knexConfig.development);

module.exports = {
    getAll: async function () {
        return db("todolist").select("*");
    },
    getById: async function (id) {
        return db("todolist").select("*").where({ id }).first();
    },
    create: async function (name) {
        return db("todolist").insert({ name }).returning("id");
    },
    update: async function (id, name) {
        return db("todolist").where({ id }).update({ name });
    },
    deleteById: async function (id) {
        return db("todolist").where({ id }).del();
    },
};
