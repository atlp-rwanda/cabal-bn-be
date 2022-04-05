import express from 'express';
import accommodationController from '../../controllers/accommodation.controller';
import upload from '../../helpers/multer';
import { checkLoggedInUser, roles } from '../../middlewares/role.middleware';
import {
  checkCommentOnAccommodation,
  checkUserCreatedComment,
  validateAccommodationId
} from '../../middlewares/accommodationId.middleware';
import accommodationValidation, {
  commentValidation
} from '../../validations/accommodation.validation';
import { checkTimeOnTrip } from '../../middlewares/trip.middleware';

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

accommodations.get(
  '/:accommodationId/comment',
  validateAccommodationId,
  accommodationController.getAllComments
);
accommodations.post(
  '/:accommodationId/comment',
  commentValidation,
  checkLoggedInUser,
  validateAccommodationId,
  checkTimeOnTrip(1),
  accommodationController.createComment
);
accommodations.put(
  '/:accommodationId/comment/:commentId',
  commentValidation,
  checkLoggedInUser,
  validateAccommodationId,
  checkCommentOnAccommodation,
  checkUserCreatedComment,
  accommodationController.updateComment
);
accommodations.delete(
  '/:accommodationId/comment/:commentId',
  checkLoggedInUser,
  validateAccommodationId,
  checkCommentOnAccommodation,
  checkUserCreatedComment,
  accommodationController.deleteComment
);

export default accommodations;
