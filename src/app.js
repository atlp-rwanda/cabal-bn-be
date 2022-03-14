/* eslint-disable import/no-unresolved */
import docs from 'documentation/index';
import passport from 'middlewares/passport.middleware';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
import sgMail from '@sendgrid/mail';
import routes from './routes/index';
import 'dotenv';

const app = express();
const port = process.env.PORT || 5000;
const KEY = process.env.API_KEY;
sgMail.setApiKey(KEY);
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
