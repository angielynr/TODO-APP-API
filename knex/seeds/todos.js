/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("todolist").del();
    await knex("todolist").insert([
        { name: "Todo1" },
        { name: "Todo2" },
        { name: "Todo3" },
    ]);
};
