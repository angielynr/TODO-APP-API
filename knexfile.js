// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mssql",
        connection: {
            host: "127.0.0.1",
            port: 1433,
            database: "DB_TodoList",
            user: "sa",
            password: "qwerty123!",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./knex/migrations",
        },
        seeds: {
            directory: "./knex/seeds",
        },
    },
};

//SQL Query Builder for JS
