// pages/api/history/index.js
import { body } from 'express-validator';
import historyService from '../../../backend/historyService';
import { validate } from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/history`);

  if (req.method === 'GET') {
    const history = historyService.getHistory();
    console.log('GET history:', history);
    return res.status(200).json(history);
  }

  if (req.method === 'POST') {
    await body('volunteerId').isInt().run(req);
    await body('eventId').isInt().run(req);
    await body('participationStatus').isString().run(req);

    validate(req, res, () => {
      const record = req.body;
      const result = historyService.addHistory(record);
      console.log('History record added:', result);
      return res.status(201).json(result);
    });
  }

  res.status(405).json({ message: 'Not allowed' });
}
