// pages/api/notifications/index.js
import { body } from 'express-validator';
import notificationService from '../../../backend/notificationService';
import { validate } from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/notifications`);

  if (req.method === 'GET') {
    const notifications = notificationService.getNotifications();
    console.log('GET notifications:', notifications);
    return res.status(200).json(notifications);
  }

  if (req.method === 'POST') {
    await body('volunteerId').isInt().run(req);
    await body('message').isLength({ min: 1 }).run(req);

    validate(req, res, () => {
      const notification = req.body;
      const result = notificationService.addNotification(notification);
      console.log('Notification added:', result);
      return res.status(201).json(result);
    });
  }

  res.status(405).json({ message: 'Not allowed' });
}
