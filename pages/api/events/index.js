// pages/api/events/index.js
import { body } from 'express-validator';
import eventService from '../../../backend/eventService';
import { validate } from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/events`);

  if (req.method === 'GET') {
    const events = eventService.getEvents();
    console.log('GET events:', events);
    return res.status(200).json(events);
  }

  if (req.method === 'POST') {
    await body('eventName').isLength({ max: 100 }).run(req);
    await body('eventDescription').isString().run(req);
    await body('city').isLength({ max: 100 }).run(req);
    await body('state').isLength({ is: 2 }).run(req);
    await body('location').isLength({ max: 100 }).run(req);
    await body('requiredSkills').isArray().run(req);
    await body('urgency').isString().run(req);
    await body('eventDate').isISO8601().run(req);

    validate(req, res, () => {
      const event = req.body;
      const result = eventService.addEvent(event);
      console.log('Event added:', result);
      return res.status(201).json(result);
    });
  }

  res.status(405).json({ message: 'Not allowed' });
}
