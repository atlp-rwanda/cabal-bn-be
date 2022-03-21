import express from 'express';
import tripContoller from '../../controllers/trip.controller';
import tripValidation from '../../validations/trip.validation';
import { checkLoggedInUser, roles } from '../../middlewares/role.middleware';
import {
  checkTripDates,
  checkTripExistStatus
} from '../../middlewares/trip.middleware';
import { validateAccommodationFields } from '../../middlewares/accommodationId.middleware';
import { validateLocationFields } from '../../middlewares/location.middleware';
import { accommodationFields, locationFields } from '../../utils/trip.util';

const tripRoutes = express.Router();

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
  validateLocationFields(...locationFields),
  validateAccommodationFields(...accommodationFields),
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
