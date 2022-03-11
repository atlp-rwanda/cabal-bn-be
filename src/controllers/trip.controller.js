/* eslint-disable curly */
/* eslint-disable require-jsdoc */
import tripService from '../services/trip.service';

class tripController {
  static async createTrip(req, res) {
    try {
      const tripCreated =
        await tripService.createTrip(req.params.userId,req.body);
      return res.status(201).json({
        message: 'Trip created successfully ',
        data: tripCreated
      });
    } catch (err) {
      console.log(err, '======');
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async findTrip(req, res) {
    try {
      const show = await tripService.findSpecificTrip(req.params.userId);
      if (!show) 
        return res.status(404).json({ message: 'User with this Id not found' });
      return res
        .status(200)
        .json({ message: 'Trip retrieved Successfully', data: show });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async managerFindTrip(req, res) {
    try {
      const { managerId } = req.params;
      const managerFind = await tripService.managerFindAllTrip(managerId);
      if (!managerFind) {
        return res.status(404).json({ message: 'Manager with this Id not found' });
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
        const updated = await  tripService.updateTrip(req.params.userId, req.params.id, req.body);
        if(!updated)
        {
       return res.status(400).json({ status: 400, message: "Failed to Update"}); 
        }
      return res.status(200).json({ status: 200, message: "Updated successfully", data: updated });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal server Error"
        })
    }
  }

  static async deleteTrip(req, res) {
    try {
      const deletedTrip = await tripService.deleteTrip( req.params.userId,req.params.id );
        return res.status(204).json({ message: 'Trip deleted successfully', deletedTrip });
    
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  }
  
}
export default tripController;

