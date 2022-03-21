import express from 'express';
import tripContoller from '../../controllers/trip.controller';
import tripValidation from '../../validations/trip.validation';
import { checkLoggedInUser, roles } from '../../middlewares/role.middleware';
import {
  checkTripDates,
  checkTripExistStatus
} from '../../middlewares/trip.middleware';

const tripRoutes = express.Router();
// const checkLoginRequester = (req, res, next) => {
//   checkLoggedInUser(req, res, next, 'REQUESTER');
// };
// const checkLoginManager = (req, res, next) => {
//   checkLoggedInUser(req, res, next, 'MANAGER');
// };

tripRoutes.get(
  '/',
  checkLoggedInUser,
  roles('REQUESTER'),
  tripContoller.findTrip
);
tripRoutes.get(
  '/manager',
  checkLoggedInUser,
  roles('MANAGER'),
  tripContoller.managerFindTrip
);

tripRoutes.post(
  '/',
  tripValidation,
  checkTripDates,
  checkLoggedInUser,
  roles('REQUESTER'),
  tripContoller.createTrip
);
tripRoutes.put(
  '/:id',
  tripValidation,
  checkTripDates,
  checkLoggedInUser,
  roles('REQUESTER'),
  checkTripExistStatus('PENDING'),
  tripContoller.userUpdateTrip
);

tripRoutes.delete(
  '/:id',
  checkLoggedInUser,
  roles('REQUESTER'),
  checkTripExistStatus('PENDING'),
  tripContoller.deleteTrip
);

export default tripRoutes;
