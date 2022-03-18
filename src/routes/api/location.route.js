import express from 'express';
import locationController from '../../controllers/location.controller';
import locationValidation from '../../validations/location.validation';
import { TravelAdmin } from '../../middlewares/role.middleware';

const locations = express.Router();

locations.post(
  '/',
  TravelAdmin,
  locationValidation,
  locationController.locationCreate
);
locations.get('/', locationController.findLocation);
locations.get('/:locationId', locationController.findOneLocation);
locations.delete(
  '/:locationId',
  TravelAdmin,
  locationController.deleteLocation
);

export default locations;
