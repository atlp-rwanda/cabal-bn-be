/* eslint-disable require-jsdoc */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import 'dotenv/config';
import { serve, setup } from 'swagger-ui-express';
import routes from './routes/index';
import docs from './documentation/index';
import db from './database/models';

const app = express();
const port = process.env.PORT || 5000;

console.log('authenticating ....');
async function connectdb() {
  try {
    const { sequelize } = db;
    await sequelize.authenticate();
    console.log('Database established successfully !!');
  } catch (err) {
    console.log('failed to connect to the database', err);
  }
}
connectdb();

app.use('/api/v1', routes);
app.use('/api-docs', serve, setup(docs));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Barefoot Nomad.' });
});
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});
const server = app.listen(port, () => {
  console.log('server up running on port ', port);
});

export default server;
