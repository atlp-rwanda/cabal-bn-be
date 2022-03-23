import express from 'express';
import tripContoller from '../../controllers/trip.controller';
import tripValidation, { changestatusValidation } from '../../validations/trip.validation';
import { checkLoggedInUser, roles } from '../../middlewares/role.middleware';
import {
    checkLocationAccommodation,
    checkTripDates,
    checkTripExistStatus,
    checkTripIdExist,
    checkManagerId
} from '../../middlewares/trip.middleware';
import { validateAccommodationFields } from '../../middlewares/accommodationId.middleware';
import { validateLocationFields } from '../../middlewares/location.middleware';
import { accommodationFields, locationFields } from '../../utils/trip.util';

const tripRoutes = express.Router();

tripRoutes.get(
    '/',
    checkLoggedInUser,
    roles('REQUESTER', 'MANAGER', 'SUPER_ADMIN'),
    tripContoller.findTrip
);

tripRoutes.post(
    '/',
    tripValidation,
    validateLocationFields(...locationFields),
    validateAccommodationFields(...accommodationFields),
    checkTripDates,
    checkLoggedInUser,
    roles('REQUESTER'),
    checkLocationAccommodation,
    tripContoller.createTrip
);
tripRoutes.put(
    '/:id',
    tripValidation,
    checkTripDates,
    checkLoggedInUser,
    roles('REQUESTER', 'SUPER_ADMIN'),
    checkTripExistStatus('PENDING'),
    validateLocationFields(...locationFields),
    validateAccommodationFields(...accommodationFields),
    checkLocationAccommodation,
    tripContoller.userUpdateTrip
);

tripRoutes.delete(
    '/:id',
    checkLoggedInUser,
    roles('REQUESTER', 'SUPER_ADMIN'),
    checkTripExistStatus('PENDING'),
    tripContoller.deleteTrip
);

tripRoutes.patch(
    '/:id',
    checkLoggedInUser,
    roles('MANAGER', 'SUPER_ADMIN'),
    checkTripIdExist,
    checkManagerId,
    changestatusValidation,
    tripContoller.updateStatus
);
export default tripRoutes;