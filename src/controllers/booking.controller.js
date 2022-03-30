import bookingService from '../services/booking.service';
import roomService from '../services/rooms.service';

class bookingController {
  static async createBooking(req, res) {
    try {
      const { roomId } = req.params;
      const data = {
        ...req.body,
        user_id: req.user.id,
        room_id: roomId
      };
      const booking = await bookingService.createBooking(data);
      return res
        .status(200)
        .json({ message: 'successfully booked a room.', booking });
    } catch (error) {
      /* istanbul ignore next */
      return res.status(500).json({ error: 'something went wrong!' });
    }
  }
  static async listAllRoomBookings(req, res) {
    try {
      const { roomId } = req.params;
      const bookings = await bookingService.listAllRoomBookings({
        where: { room_id: roomId }
      });
      /* istanbul ignore next */
      if (!bookings || bookings.count === 0)
        return res
          .status(404)
          .json({ message: 'no booking records found on this room' });
      return res
        .status(200)
        .json({ message: 'list of all bookings', bookings });
    } catch (error) {
      /* istanbul ignore next */
      return res.status(500).json({ error: 'something went wrong' });
    }
  }
  static async listSingleBooking(req, res) {
    try {
      const booking = req.booking.dataValues;
      return res.status(200).json({ message: 'booking information', booking });
    } catch (error) {
      /* istanbul ignore next */
      res.status(500).json({ error: 'something went wrong' });
    }
  }

  static async updateBooking(req, res) {
    try {
      const { roomId, bookingId } = req.params;

      const updates = {
        ...req.body,
        room_id: roomId
      };
      const updatedBooking = await bookingService.updateBookingStatus(
        { where: { id: bookingId, room_id: roomId } },
        updates
      );
      if (updatedBooking[1][0].status === 'APPROVED') {
        await roomService.findAndUpdateRoom(
          { where: { id: roomId } },
          { isBooked: true }
        );
      }
      return res
        .status(200)
        .json({ message: 'updated booking info', updatedBooking });
    } catch (error) {
      /* istanbul ignore next */
      return res.status(500).json({ error: 'something went wrong' });
    }
  }

  static async deleteBooking(req, res) {
    try {
      const { bookingId, roomId } = req.params;
      await bookingService.deleteBooking({
        where: { id: bookingId, room_id: roomId }
      });
      return res.status(201).json({ message: 'booking deleted successfully' });
    } catch (err) {
      /* istanbul ignore next */
      return res.status(500).json({ message: 'something went wrong' });
    }
  }
}
export default bookingController;
