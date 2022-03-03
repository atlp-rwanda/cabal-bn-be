import express from 'express';

const home = express.Router();

// eslint-disable-next-line no-unused-vars
home.get('/', (req, res, next) => {
    res.send('Welcome to our homepage');
});

export default home;
