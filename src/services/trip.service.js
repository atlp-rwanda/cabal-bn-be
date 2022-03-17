/* eslint-disable object-shorthand */
/* eslint-disable require-jsdoc */
import { Trip } from '../database/models';

class tripService {
<<<<<<< HEAD
  static async createTrip(userId, data) {
=======

  static async createTrip(userId,data) {
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
    // eslint-disable-next-line object-shorthand
    const tripCreate = await Trip.create({ ...data, userId: userId });
    tripCreate.save();
    return tripCreate;
  }

  static async updateTrip(userId, id, data) {
    // eslint-disable-next-line object-shorthand
    const exist = await Trip.findOne({
      where: {
        // eslint-disable-next-line object-shorthand
        userId: userId,
        status: 'pending',
        id: id
      }
    });
    if (exist) {
      exist.managerId = data.managerId ? data.managerId : exist.managerId;
      exist.originCity = data.originCity ? data.originCity : exist.originCity;
      exist.destination = data.destination
        ? data.destination
        : exist.destination;
      exist.reason = data.reason ? data.reason : exist.reason;
      exist.returnDate = data.returnDate ? data.returnDate : exist.returnDate;
      exist.tripDate = data.tripDate ? data.tripDate : exist.tripDate;
<<<<<<< HEAD
      exist.accomodationId = data.accomodationId
        ? data.accomodationId
        : exist.accomodationId;
=======
      exist.accomodationId = data.accomodationId ? data.accomodationId : exist.accomodationId;
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      const updatedArticle = await exist.save();
      return updatedArticle;
    }
    return exist;
  }

  static async findSpecificTrip(userId) {
<<<<<<< HEAD
    const foundOneTrip = await Trip.findAll({
      where: {
        // eslint-disable-next-line object-shorthand
        userId: userId
=======
    const foundOneTrip = await Trip.findAll({ 
      where:{
// eslint-disable-next-line object-shorthand
        userId:userId
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      }
    });
    return foundOneTrip;
  }

  static async managerFindAllTrip(managerId) {
<<<<<<< HEAD
    const foundAllTrip = await Trip.findAll({
      where: {
        // eslint-disable-next-line object-shorthand
        managerId: managerId
=======
    const foundAllTrip = await Trip.findAll({ 
      where:{
// eslint-disable-next-line object-shorthand
        managerId:managerId
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      }
    });
    return foundAllTrip;
  }
<<<<<<< HEAD

  static async deleteTrip(userId, id) {
    const deleteTrip = await Trip.destroy({
      where: {
        status: 'pending',
=======
  

static async deleteTrip(userId,id) {
    const deleteTrip = await Trip.destroy({ 
      where:{
        status:"pending",
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
        // eslint-disable-next-line object-shorthand
        userId: userId,
        // eslint-disable-next-line object-shorthand
        id: id
      }
    });
    return deleteTrip;
  }
}
export default tripService;
