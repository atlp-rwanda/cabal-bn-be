import express from 'express';
import accommodationController from '../../controllers/accommodation.controller';
import upload from '../../helpers/multer';
import { checkLoggedInUser, roles } from '../../middlewares/role.middleware';
import { validateAccommodationId } from '../../middlewares/accommodationId.middleware';
import accommodationValidation from '../../validations/accommodation.validation';

const accommodations = express.Router();
const app = express();

app.use(validateAccommodationId);
accommodations.post(
  '/',
  checkLoggedInUser,
  roles('TRAVEL_ADMIN', 'SUPER_ADMIN'),
  accommodationValidation,
  upload.array('images'),
  accommodationController.createAccommodation
);

accommodations.post(
  '/:accommodationId/like',
  checkLoggedInUser,
  validateAccommodationId,
  accommodationController.likeAccommodation
);

accommodations.get('/', accommodationController.findAllAccommodations);
accommodations.get(
  '/:accommodationId',
  validateAccommodationId,
  accommodationController.findAccommodation
);
accommodations.put(
  '/:accommodationId',
  checkLoggedInUser,
  roles('TRAVEL_ADMIN', 'SUPER_ADMIN'),
  validateAccommodationId,
  accommodationValidation,
  upload.array('images'),
  accommodationController.updateAccommodation
);
accommodations.delete(
  '/:accommodationId',
  checkLoggedInUser,
  roles('TRAVEL_ADMIN', 'SUPER_ADMIN'),
  validateAccommodationId,
  accommodationController.destroyAccommodation
);

export default accommodations;
