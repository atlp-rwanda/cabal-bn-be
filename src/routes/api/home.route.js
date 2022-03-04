import express from 'express';

const home = express.Router();

home.get("/", (req, res, next) => {
  res.status(200).send({ message: "Welcome to our homepage" });
});

export default home;
