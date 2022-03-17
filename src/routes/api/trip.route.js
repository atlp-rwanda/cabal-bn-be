import express from 'express';
import tripContoller from '../../controllers/trip.controller';
import { requestValidation } from '../../validations/tripValidation/trip.valiadation';
import { checkLoggedInUser } from '../../middlewares/role.middleware';

const tripRoutes = express.Router();
const checkLoginRequester = (req, res, next) => {
  checkLoggedInUser(req, res, next, 'REQUESTER');
};
const checkLoginManager = (req, res, next) => {
  checkLoggedInUser(req, res, next, 'MANAGER');
};
tripRoutes.post(
  '/request',
  checkLoginRequester,
  requestValidation,
  tripContoller.createTrip
);
tripRoutes.delete('/:id', checkLoginRequester, tripContoller.deleteTrip);
tripRoutes.get('/', checkLoginRequester, tripContoller.findTrip);
tripRoutes.get('/manager', checkLoginManager, tripContoller.managerFindTrip);
tripRoutes.put(
  '/changeRequest/:id',
  checkLoginRequester,
  tripContoller.userUpdateTrip
);

export default tripRoutes;
