import home from 'routes/api/homeRoute';
import express from 'express';

const routes = express.Router();

routes.use('/home', home);

export default routes;