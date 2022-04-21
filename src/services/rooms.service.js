/* eslint-disable require-jsdoc */
import { Room, Accommodation } from '../database/models';

class roomService {
  static async createRoom(room) {
    const roomCreate = await Room.create(room);
    return roomCreate;
  }

  static async findRooms({ where, offset, order, limit }) {
    const rooms = await Room.findAndCountAll({
      where,
      offset,
      limit,
      order: order || [['createdAt', 'DESC']]
    });
    return rooms;
  }

  static async findARoom(id) {
    const findRoom = await Room.findByPk(id, {
      include: [{ model: Accommodation, as: 'Accommodations' }]
    });
    return findRoom;
  }

  static async findAndUpdateRoom({ where, id }, roomUpdate) {
    const updateRoom = await Room.update(roomUpdate, {
      where: id ? { id } : where,
      returning: true,
      raw: true
    });
    return updateRoom;
  }

  static async deleteRoom({ where }) {
    const deleteRoom = await Room.destroy({ where });
    return deleteRoom;
  }
}

export default roomService;
