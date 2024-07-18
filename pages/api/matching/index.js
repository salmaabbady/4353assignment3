// pages/api/matching/index.js
import { body } from 'express-validator';
import matchingService from '../../../backend/matchingService';
import { validate } from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/matching`);

  if (req.method === 'POST') {
    await body('volunteerId').isInt().run(req);
    await body('eventId').isInt().run(req);

    validate(req, res, () => {
      const { volunteerId, eventId } = req.body;
      const result = matchingService.matchVolunteer(volunteerId, eventId);
      console.log('Match created:', result);
      return res.status(201).json(result);
    });
  }

  res.status(405).json({ message: 'Not allowed' });
}
