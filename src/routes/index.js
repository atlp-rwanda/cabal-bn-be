import express from 'express';
import home from 'routes/api/homeRoute';

const routes = express.Router();

routes.use('/home', home);

export default routes;