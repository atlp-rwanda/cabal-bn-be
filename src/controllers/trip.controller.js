/* eslint-disable no-else-return */
/* eslint-disable curly */
/* eslint-disable require-jsdoc */
import tripService from '../services/trip.service';
<<<<<<< HEAD
import { validateDate } from '../helpers/dataComparison';
=======
import { validateDate } from '../helpers/dataComparison'
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7

class tripController {
  static async createTrip(req, res) {
    try {
<<<<<<< HEAD
      const compareDates = validateDate(req.body.returnDate, req.body.tripDate);
      if (compareDates) {
        if (!req.user.managerId) {
          return res.status(400).json({
            message: ' You are not assigned a manager'
          });
        }
        req.body.managerId = req.user.managerId;

        const tripCreated = await tripService.createTrip(req.user.id, req.body);
        return res.status(201).json({
          message: 'Trip created successfully ',
          data: tripCreated
        });
      }
      // eslint-disable-next-line no-else-return
      else {
        return res.status(400).json({
          status: 400,
          message: 'Trip date is greater than return date'
        });
      }
=======
      const compareDates = validateDate(req.body.returnDate, req.body.tripDate)
      if (compareDates) {
        if(!req.user.managerId){
          return res.status(400).json({
            message: ' You are not assigned a manager',
          });
        }
        req.body.managerId=req.user.managerId;

      const tripCreated =
        await tripService.createTrip(req.user.id,req.body);
      return res.status(201).json({
        message: 'Trip created successfully ',
        data: tripCreated
      });
    }
    // eslint-disable-next-line no-else-return
    else{
     return res.status(400).json({ status: 400, message: "Trip date is greater than return date" });
    }
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
    } catch (err) {
      console.log(err, '======');
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async findTrip(req, res) {
    try {
      const show = await tripService.findSpecificTrip(req.user.id);
<<<<<<< HEAD
      return res
        .status(200)
        .json({ message: 'Trip retrieved Successfully', data: show });
=======
      return res .status(200).json({ message: 'Trip retrieved Successfully', data: show });
        
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async managerFindTrip(req, res) {
    try {
      const managerFind = await tripService.managerFindAllTrip(req.user.id);
      if (!managerFind) {
        return res
          .status(404)
          .json({ message: 'Manager with this Id not found' });
      }
      return res
        .status(200)
        .json({ message: 'Trip retrieved Successfully', data: managerFind });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async userUpdateTrip(req, res) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const updated = await tripService.updateTrip(
        req.user.id,
        req.params.id,
        req.body
      );
      if (!updated) {
        return res
          .status(400)
          .json({ status: 400, message: 'No trip wit this Id' });
      }
      return res
        .status(200)
        .json({ status: 200, message: 'Updated successfully', data: updated });
=======
=======
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
        const updated = await  tripService.updateTrip(req.user.id, req.params.id, req.body);
        if(!updated)
        {
       return res.status(404).json({ status: 400, message: "No trip wit this Id"}); 
        }
      return res.status(200).json({ status: 200, message: "Updated successfully", data: updated });
>>>>>>> 0bb1fe4 ([#181339534]-Working on the error)
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Internal server Error'
      });
    }
  }

  static async deleteTrip(req, res) {
    try {
<<<<<<< HEAD
      const deletedTrip = await tripService.deleteTrip(
        req.user.id,
        req.params.id
      );
      if (deletedTrip) {
        return res
          .status(200)
          .json({ message: 'Trip deleted successfully', deletedTrip });
      }
      // eslint-disable-next-line no-else-return
      else {
        return res.status(404).json({ message: 'No trip with Id found' });
      }
=======
      const deletedTrip = await tripService.deleteTrip(req.user.id,req.params.id);
      if(deletedTrip){
        return res.status(200).json({ message: 'Trip deleted successfully', deletedTrip });
      }
     // eslint-disable-next-line no-else-return
     else{
      return res.status(404).json({ message: 'No trip with Id found'});
     }
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  }
}
export default tripController;
