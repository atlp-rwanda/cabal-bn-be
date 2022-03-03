import express from 'express';
import Sequelize from 'sequelize';
import 'dotenv/config';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV || 'development';

try {
    // TESTING DATABASE CONNECTION
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

    app.listen(port, () => {
        console.log('server up running on port ', port);
    });
} catch (error) {
    console.log(error);
}
