const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mssql",
        connection: {
            host: process.env.MSSQL_DB_HOST,
            // port: process.env.MSSQL_DB_PORT,
            port: 1433,
            database: process.env.MSSQL_DB_NAME,
            user: process.env.MSSQL_DB_USER,
            password: process.env.MSSQL_DB_PASS,
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
