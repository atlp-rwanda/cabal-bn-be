<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b00a07 (major changes)
/* eslint-disable import/no-unresolved */
import docs from 'documentation/index';
import passport from 'middlewares/passport.middleware';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';
import 'dotenv';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

app.use('/api/v1', routes);
app.use('/api-docs', serve, setup(docs));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Barefoot Nomad.' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.listen(port, () => {
  console.log('server up running on port ', port);
});

export default app;
<<<<<<< HEAD
>>>>>>> 886728a (finished rebasing and updating user model)
=======
=======
try {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cors());
  app.use(morgan('dev'));

  app.use(passport.initialize());

  app.use('/api/v1', routes);
  app.use('/api-docs', serve, setup(docs));

  app.listen(port, () => {
    console.log('server up running on port ', port);
  });
>>>>>>> 86d4444 (chore: updated yarn.lock)
} catch (error) {
  console.log(error);
}

export default app;
>>>>>>> 4e05ae2 (minor changes)
=======

export default app;
>>>>>>> 79ba677 (chore: minor changes)
=======

export default app;
>>>>>>> e2aeb77 (chore: minor changes)
>>>>>>> 08689d6 (* chore/changed procfile setting)
=======
>>>>>>> 2b00a07 (major changes)
