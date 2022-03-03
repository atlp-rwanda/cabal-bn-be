<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use strict';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
=======
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
import 'dotenv';
>>>>>>> 58b7e3d (chore: minor changes)

<<<<<<< HEAD
>>>>>>> 41efe18 (feature: rebase commmit)
import 'dotenv';
=======
>>>>>>> 5f2e4bf (chore: minor changes)

<<<<<<< HEAD
require('dotenv').config();
=======
import 'dotenv';
>>>>>>> 79ba677 (chore: minor changes)
=======
import 'dotenv';
>>>>>>> e2aeb77 (chore: minor changes)
=======

import 'dotenv';
>>>>>>> 6d0b069 (chore: minor changes)
=======
'use strict';

require('dotenv').config();
>>>>>>> 886728a (finished rebasing and updating user model)
=======
'use strict';
>>>>>>> d0a89b9 (rebase commit)
=======
import 'dotenv';
>>>>>>> 4e05ae2 (minor changes)

<<<<<<< HEAD
<<<<<<< HEAD
import 'dotenv';

=======
>>>>>>> 17a720a (chore: rebased dev)
=======

>>>>>>> e08edc4 (chore: rebased dev)
=======
=======

import 'dotenv';
>>>>>>> 6d0b069 (chore: minor changes)

>>>>>>> 2dfab96 (feature: add user registration)
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
import 'dotenv';

=======
>>>>>>> 17a720a (chore: rebased dev)
=======

>>>>>>> e08edc4 (chore: rebased dev)
=======
=======

import 'dotenv';
>>>>>>> 6d0b069 (chore: minor changes)

>>>>>>> 2dfab96 (feature: add user registration)
>>>>>>> 4e05ae2 (minor changes)
=======

>>>>>>> 53839d8 (chore: rebase commit)
=======

>>>>>>> 17a720a (chore: rebased dev)
=======

>>>>>>> e08edc4 (chore: rebased dev)
=======

>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> 53839d8 (chore: rebase commit)
=======
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> 17a720a (chore: rebased dev)
=======
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> e08edc4 (chore: rebased dev)
=======
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 08689d6 (* chore/changed procfile setting)
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
<<<<<<< HEAD
=======
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
=======
const basename = path.basename(__filename);
>>>>>>> 886728a (finished rebasing and updating user model)
=======
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> d0a89b9 (rebase commit)
=======
'use strict';

import 'dotenv';
=======

import 'dotenv';
>>>>>>> 6d0b069 (chore: minor changes)

=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> 53839d8 (chore: rebase commit)
=======
'use strict';
import 'dotenv';
=======
require('dotenv').config();
>>>>>>> 2b00a07 (major changes)

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
<<<<<<< HEAD
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> e08edc4 (chore: rebased dev)
=======
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
>>>>>>> 2dfab96 (feature: add user registration)
>>>>>>> 08689d6 (* chore/changed procfile setting)
=======
>>>>>>> 2b00a07 (major changes)
const db = {};

const mode = process.env.NODE_ENV || 'development';
let sequelize;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b00a07 (major changes)

// shifted the sequelizer initialization here
if (mode === 'development') {
  sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
  sequelize
    .authenticate()
    .then(async () => {
      console.log('DEV DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
}
if (mode === 'test') {
  sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
  sequelize
    .authenticate()
    .then(() => {
      console.log('TEST DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
}
if (mode === 'production') {
  sequelize = new Sequelize({
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
    }
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log('PRODUCTION DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
>>>>>>> 6d0b069 (chore: minor changes)
	sequelize = new Sequelize({
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
	});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17a720a (chore: rebased dev)
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 6d0b069 (chore: minor changes)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
=======
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
//// shifted the sequelizer initialization here
if (mode === 'development') {
  sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
  sequelize
    .authenticate()
    .then(async () => {
      console.log('DEV DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
}
if (mode === 'test') {
  sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
  sequelize
    .authenticate()
    .then(() => {
      console.log('TEST DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
}
if (mode === 'production') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 53839d8 (chore: rebase commit)
=======
=======
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
>>>>>>> 41efe18 (feature: rebase commmit)
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
>>>>>>> 6d0b069 (chore: minor changes)
	sequelize = new Sequelize({
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
	});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 79ba677 (chore: minor changes)
=======
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> e08edc4 (chore: rebased dev)
<<<<<<< HEAD
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 2dfab96 (feature: add user registration)
>>>>>>> 203fb87 (chore: some rebase commit)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 41efe18 (feature: rebase commmit)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 6d0b069 (chore: minor changes)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
=======
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)

//// shifted the sequelizer initialization here
if (mode === 'development') {
  sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
  sequelize
    .authenticate()
    .then(async () => {
      console.log('DEV DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
}
if (mode === 'test') {
  sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
  sequelize
    .authenticate()
    .then(() => {
      console.log('TEST DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
}
if (mode === 'production') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
>>>>>>> 6d0b069 (chore: minor changes)
=======
>>>>>>> 79ba677 (chore: minor changes)
=======
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
>>>>>>> 41efe18 (feature: rebase commmit)
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
>>>>>>> 6d0b069 (chore: minor changes)
	sequelize = new Sequelize({
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
	});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17a720a (chore: rebased dev)
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
<<<<<<< HEAD
>>>>>>> d0a89b9 (rebase commit)
=======
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 2dfab96 (feature: add user registration)
<<<<<<< HEAD
=======
>>>>>>> 6d0b069 (chore: minor changes)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
>>>>>>> 4e05ae2 (minor changes)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 79ba677 (chore: minor changes)
=======
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> e08edc4 (chore: rebased dev)
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 41efe18 (feature: rebase commmit)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 6d0b069 (chore: minor changes)
=======
>>>>>>> 97759dc (chore: addedd other user model fields)
	sequelize
		.authenticate()
		.then(() => {
			console.log('PRODUCTION DATABASE CONNECTION ESTABLISHED!');
		})
		.catch((err) => {
			console.log('Unable to connect to the database: ', err);
		});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
  sequelize = new Sequelize({
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
    }
  });
  sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
  sequelize
    .authenticate()
    .then(() => {
      console.log('PRODUCTION DATABASE CONNECTION ESTABLISHED!');
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    });
<<<<<<< HEAD
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
>>>>>>> 08689d6 (* chore/changed procfile setting)
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
>>>>>>> 2b00a07 (major changes)
}

//

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
