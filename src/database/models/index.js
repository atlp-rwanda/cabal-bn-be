/* eslint-disable global-require */
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const mode = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.js`)[mode];
const db = {};

let sequelize;

// shifted the sequelizer initialization here
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
    sequelize
        .authenticate()
        .then(async() => {
            console.log(`${mode} DATABASE CONNECTION ESTABLISHED!`);
        })
        .catch((err) => {
            console.log('Unable to connect to the database: ', err);
        });
} else {
    sequelize = new Sequelize({
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false
    });
    sequelize
        .authenticate()
        .then(() => {
            console.log(`${mode} DATABASE CONNECTION ESTABLISHED!`);
        })
        .catch((err) => {
            console.log('Unable to connect to the database: ', err);
        });
}

//

fs.readdirSync(__dirname)
    .filter(
        (file) =>
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
    .forEach((file) => {
        // eslint-disable-next-line import/no-dynamic-require
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