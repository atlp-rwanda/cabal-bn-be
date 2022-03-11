import express from 'express';
import tripContoller from '../../controllers/trip.controller';
import { requestValidation } from '../../validations/tripValidation/trip.valiadation';

const tripRoutes = express.Router();

tripRoutes.post('/request/:userId',requestValidation,tripContoller.createTrip);
tripRoutes.delete('/tripRemove/:userId/:id',tripContoller.deleteTrip);
tripRoutes.get('/:userId',tripContoller.findTrip);
tripRoutes.get('/manager/:managerId',tripContoller.managerFindTrip)
tripRoutes.put('/changeRequest/:userId/:id',tripContoller.userUpdateTrip)

export default tripRoutes;
