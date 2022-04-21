/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import { config } from 'dotenv';
import NotificationService from '../services/notification.service';
config();

export default class NotificationController {
    static async allnotification(req, res) {
        const Allnotification = await NotificationService.Allnotification(req.user.id);
        return res.status(200).json({ data: Allnotification });
    }

    static async markAllnotification(req, res) {
        const markall = await NotificationService.updateStatus(req.user.id);
        return res.status(200).json({ message: 'mark all notification  successfully', data: markall });
    }

    static async ReadOne(req, res) {
        const updateStatus = await NotificationService.ReadOne(req.params.id, req.user.id);
        if (updateStatus) {
            return res.status(200).json({ message: 'Read one notification  successfully', data: { updateStatus } });
        }
    }
}