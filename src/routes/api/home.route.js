import express from 'express';

const home = express.Router();

home.get('/', (req, res, next) => {
  res.send('Welcome to our homepage');
  console.log(typeof res);
});

export default home;
