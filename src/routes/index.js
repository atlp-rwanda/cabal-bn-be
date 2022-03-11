import express from "express";
import home from "./api/home.route";
import userRoutes from './api/user.route';
import tripRoutes from './api/trip.route';

const routes = express.Router();
routes.use('/users', userRoutes);
routes.use("/home", home);
routes.use("/trip", tripRoutes);


export default routes;
