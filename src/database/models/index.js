require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const db = {};

const mode = process.env.NODE_ENV || 'development';
let sequelize;

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
  sequelize = new Sequelize({
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
    }
  });
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
