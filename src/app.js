/* eslint-disable import/no-unresolved */
import docs from 'documentation/index';
import passport from 'middlewares/passport.middleware';
import express from 'express';
import 'dotenv';
import { serve, setup } from 'swagger-ui-express';
import morgan from 'morgan';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
// import formData from 'express-form-data';
// eslint-disable-next-line import/no-named-as-default-member
import routes from './routes/index';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(formData.parse());
// app.use(formData.union());
app.use(passport.initialize());

app.use('/api/v1', routes);
app.use('/api-docs', serve, setup(docs));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Barefoot Nomad.' });
});

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Route not found.' });
});

const port = process.env.PORT || 5000;
const KEY = process.env.API_KEY;
sgMail.setApiKey(KEY);
app.listen(port, () => {
    console.log('server up running on port ', port);
});

export default app;