require('dotenv').config();

module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 79ba677 (chore: minor changes)
=======
>>>>>>> e2aeb77 (chore: minor changes)
	development: {
		url: process.env.DEV_DATABASE_URL,
		dialect: 'postgres',
	},
	test: {
		url: process.env.TEST_DATABASE_URL,
		dialect: 'postgres',
	},
	production: {
		database: process.env.DATABASE,
		username: process.env.USER,
		password: process.env.PASSWORD,
		host: process.env.HOST,
		port: 5432,
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  development: {
<<<<<<< HEAD
    use_env_variable: 'DEV_DATABASE_URL',
=======
<<<<<<< HEAD
<<<<<<< HEAD
    use_env_variable: 'DEV_DATABASE_URL',
=======
    use_env_variable: "DEV_DATABASE_URL",
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
=======
    use_env_variable: 'DEV_DATABASE_URL',
>>>>>>> 886728a (finished rebasing and updating user model)
>>>>>>> 08689d6 (* chore/changed procfile setting)
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    username: process.env.POSTGRESS_USER,
    port: process.env.POSTGRES_PORT,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 886728a (finished rebasing and updating user model)
>>>>>>> 08689d6 (* chore/changed procfile setting)
    dialect: 'postgres',
    logging: false
  },
  test: {
<<<<<<< HEAD
    use_env_variable: 'TEST_DATABASE_URL',
=======
<<<<<<< HEAD
<<<<<<< HEAD
    use_env_variable: 'TEST_DATABASE_URL',
=======
    use_env_variable: 'CI_DB_URL',
>>>>>>> 886728a (finished rebasing and updating user model)
=======
    use_env_variable: 'TEST_DATABASE_URL',
>>>>>>> 3d6b4ac (chore: minor changes)
>>>>>>> 08689d6 (* chore/changed procfile setting)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3d6b4ac (chore: minor changes)
=======
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
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 79ba677 (chore: minor changes)
=======
>>>>>>> e2aeb77 (chore: minor changes)
>>>>>>> 08689d6 (* chore/changed procfile setting)
};
