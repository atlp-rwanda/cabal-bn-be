require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "DEV_DATABASE_URL",
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    username: process.env.POSTGRESS_USER,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    logging: false,
  },
  test: {
    use_env_variable: "CI_DB_URL",
    database: process.env.CI_DB_NAME,
    password: process.env.CI_DB_PASSWORD,
    username: process.env.CI_DB_USERNAME,
    dialect: "postgres",
    logging: false,
  },
  production: {
    use_env_variable: "PROD_DATABASE_URL",
    database: process.env.POSTGRESS_DB,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRESS_USER,
    dialect: "postgres",
    logging: false,
  },
};
