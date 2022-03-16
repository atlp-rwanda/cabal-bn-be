require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'CI_DB_URL',
    database: process.env.CI_NAME,
    host: process.env.CI_HOST,
    username: process.env.CI_USERNAME,
    password: process.env.CI_PASSWORD,
    port: 5432,
    dialect: 'postgres',
    logging: false
  },
  test: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  },
  production: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  }
};
