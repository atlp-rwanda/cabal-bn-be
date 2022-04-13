import { notification } from "../database/models"

export default class Notification {
  static async createNotification(data) {
    return await notification.create(data)
  }
}