import express from 'express';
import roomController from '../../controllers/room.controller';
import upload from '../../helpers/multer';
import { checkLoggedInUser, roles } from '../../middlewares/role.middleware';
import { validateAccommodationId } from '../../middlewares/accommodationId.middleware';
import { validateRoomId } from '../../middlewares/roomId.middleware';
import roomValidation from '../../validations/room.validation';

const room = express.Router();

room.post(
  '/accommodations/:accommodationId/rooms',
  upload.array('images'),
  checkLoggedInUser,
  roles('TRAVEL_ADMIN', 'SUPER_ADMIN'),
  validateAccommodationId,
  roomValidation,
  roomController.createRoom
);
room.get(
  '/accommodations/:accommodationId/rooms',
  validateAccommodationId,
  roomController.findAllRooms
);
room.get(
  '/accommodations/:accommodationId/rooms/:roomId',
  validateAccommodationId,
  validateRoomId,
  roomController.findRoom
);
room.put(
  '/accommodations/:accommodationId/rooms/:roomId',
  upload.array('images'),
  checkLoggedInUser,
  roles('TRAVEL_ADMIN', 'SUPER_ADMIN'),
  validateAccommodationId,
  validateRoomId,
  roomValidation,
  roomController.updateRoom
);
room.delete(
  '/accommodations/:accommodationId/rooms/:roomId',
  checkLoggedInUser,
  roles('TRAVEL_ADMIN', 'SUPER_ADMIN'),
  validateAccommodationId,
  validateRoomId,
  roomController.destroyRoom
);


export default room;
