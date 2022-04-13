/* eslint-disable no-return-await */
/* eslint-disable require-jsdoc */
import { Booking, Room, Accommodation } from '../database/models';

class bookingService {
  static async createBooking(booking) {
    return await Booking.create(booking);
  }

  static async listAllRoomBookings({ where, id }) {
    const bookings = await Booking.findAndCountAll({
      where: id ? { id } : where
    });
    return bookings;
  }

  static async listSingleBooking(id, roomId) {
    const booking = await Booking.findOne({
      where: { id, room_id: roomId },
      include: [{ model: Room, as: 'Rooms' }]
    });
    return booking;
  }

  static async checkBookingByUserId(id, roomId) {
    const booking = await Booking.findOne({
      where: { user_id: id, room_id: roomId },
      include: [{ model: Room, as: 'Rooms' }]
    });
    return booking;
  }

  static async updateBookingStatus({ where, id }, data) {
    const booking = await Booking.update(data, {
      where: id ? { id } : where,
      returning: true,
      raw: true
    });
    console.log(booking)
    return booking;
  }

  static async deleteBooking({ where }) {
    return await Booking.destroy({ where });
  }
}
export default bookingService;
