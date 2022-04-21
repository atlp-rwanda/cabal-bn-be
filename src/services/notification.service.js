import { notification } from "../database/models"
import { Op } from 'sequelize';

export default class Notification {
    static async createNotification(data) {
        return await notification.create(data)
    }


    static async Allnotification(to_user_id, countNumber = 0) {
        const getnotification = await notification.findAll({
            where: { to_user_id },
            order: [
                ['isRead', 'ASC'],
            ],
        });
        getnotification.map(notification => {
            if (notification.isRead === false) {
                countNumber++;
            }
        });
        return { countNumber, getnotification };
    }
    static async updateStatus(to_user_id) {
        const unreadNotifications = await notification.findAll({ where: { isRead: false, to_user_id } });
        const markallAsRead = await notification.update({ isRead: true }, { where: { to_user_id } });
        const updatedRows = unreadNotifications.map(notification => {
            return notification.id;
        });

        const result = notification.findAll({
            where: {
                id: {
                    [Op.in]: updatedRows
                }
            }
        });
        return result;
    }

    static async ReadOne(id, to_user_id, countNumber = 0) {
        const updateStatus = await notification.update({ isRead: true }, { where: { id } });
        const readOne = await notification.findOne({ where: { id } })
        const count = await notification.findAll({ where: { isRead: false, to_user_id } })

        count.map(notification => {
            countNumber++;
        });
        return { countNumber, readOne };
    }
}