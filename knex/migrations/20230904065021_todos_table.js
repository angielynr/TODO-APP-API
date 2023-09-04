/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("todolist", (table) => {
        table.increments("id").primary(); // Auto-incrementing ID
        table.string("name").notNullable(); // Name column (not nullable)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("todolist");
};
