import express from 'express';
import home from './api/home.route';
import userRoutes from './api/user.route';
import tripRoutes from './api/trip.route';
import upload from '../helpers/multer';

const routes = express.Router();

routes.use('/home', home);
routes.use('/users', userRoutes);
routes.use('/trips', upload.array(''), tripRoutes);

export default routes;
