require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DEV_DATABASE_URL',
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    username: process.env.POSTGRESS_USER,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
    logging: false
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    database: process.env.CI_DB_NAME,
    password: process.env.CI_DB_PASSWORD,
    username: process.env.CI_DB_USERNAME,
    dialect: 'postgres',
    logging: false
  },
  production: {
    use_env_variable: 'PROD_DATABASE_URL',
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
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
