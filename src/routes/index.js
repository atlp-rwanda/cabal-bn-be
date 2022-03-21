import express from 'express';
import home from './api/home.route';
import userRoutes from './api/user.route';
import accommodations from './api/accommodation.route';
import room from './api/room.route';
import locations from './api/location.route';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/home', home);
routes.use('/', room);
routes.use('/accommodations', accommodations);
routes.use('/locations', locations);

export default routes;