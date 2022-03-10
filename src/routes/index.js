import express from "express";
import home from "./api/home.route";
import userRoutes from './api/user.route';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use("/home", home);


export default routes;
