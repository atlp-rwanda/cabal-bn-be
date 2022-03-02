import express from 'express';
import routes from 'routes/index';
import 'dotenv/config';
import Sequelize from 'sequelize';

const app = express();
const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV || 'development';

try {
  //TESTING DATABASE CONNECTION
  if (mode === 'development') {
    const sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
    sequelize
      .authenticate()
      .then(() => {
        console.log('DEV DATABASE CONNECTION ESTABLISHED!');
      })
      .catch((err) => {
        console.log('Unable to connect to the database: ', err);
      });
  }
  if (mode === 'test') {
    const sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
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
    const sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
    sequelize
      .authenticate()
      .then(() => {
        console.log('PRODUCTION DATABASE CONNECTION ESTABLISHED!');
      })
      .catch((err) => {
        console.log('Unable to connect to the database: ', err);
      });
  }
  app.use('/api/v1', routes);
} catch (error) {
  console.log(error);
}
const server = app.listen(port, () => {
  console.log('server up running on port ', port);
});

export default server;
