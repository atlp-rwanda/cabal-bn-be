import bookingService from '../services/booking.service';
import roomService from '../services/rooms.service';
import { bookingStatus } from '../utils/booking.utils';
import { User } from '../database/models';

export const validateBookingId = async (req, res, next) => {
  const { bookingId, roomId } = req.params;
  const booking = await bookingService.listSingleBooking(bookingId, roomId);
  if (!booking) return res.status(404).json({ message: 'booking not found' });
  req.booking = booking;
  next();
};

export const checkRequester = async (req, res, next) => {
  const { roomId } = req.params;
  const { id } = req.user;

  const user = await User.findOne({
    where: { id: id },
    include: 'Role'
  });
  if (user.Role.name === 'REQUESTER') {
    const booking = await bookingService.checkBookingByUserId(id, roomId);
    if (!booking) {
      return res.status(404).json({
        message: `no booking records found under your name`
      });
    } else
      return res.status(200).json({
        message: `booking information`,
        booking
      });
  }
  return next();
};
export const checkRegisterdUserId = async (req, res, next) => {
  const { id } = req.user;
  const { roomId, bookingId } = req.params;

  const user = await User.findOne({
    where: { id: id },
    include: 'Role'
  });

  const findBooking = await bookingService.listSingleBooking(bookingId, roomId);
  if (findBooking.user_id !== id && user.Role.name !== 'SUPER_ADMIN')
    /* istanbul ignore next */
    return res
      .status(400)
      .json({ message: 'you are not allowed to delete this booking' });
  return next();
};

export const checkStatus = async (req, res, next) => {
  const { roomId, bookingId } = req.params;
  const booking = await bookingService.listSingleBooking(bookingId, roomId);
  const { name } = req.user.Role.dataValues;
  if (booking.status !== 'PENDING' && name !== 'SUPER_ADMIN')
    return res.status(400).json({
      message: 'you are not allowed to modify an approved or rejected booking '
    });
  return next();
};

export const requesterUpdateBooking = async (req, res, next) => {
  const { roomId } = req.params;
  const { id } = req.user;

  const user = await User.findOne({
    where: { id: id },
    include: 'Role'
  });
  if (user.Role.name === 'REQUESTER') {
    const booking = await bookingService.checkBookingByUserId(id, roomId);
    if (!booking) {
      return res.status(404).json({
        message: `no booking records found under your name`
      });
    }
  }
  next();
};

export const checkRoomAvailability = async (req, res, next) => {
  const { roomId } = req.params;
  const room = await roomService.findARoom(roomId);
  if (room.isBooked)
    return res.status(404).json({
      message:
        'Sorry, this room has been booked already. Please try another one.'
    });
  next();
};
