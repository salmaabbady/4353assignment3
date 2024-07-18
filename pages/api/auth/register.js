import { body, validationResult } from 'express-validator';
import authService from '../../../backend/authService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await body('email').isEmail().run(req);
    await body('password').isLength({ min: 6 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const result = authService.register(email, password);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    return res.status(201).json({ message: 'User registered successfully' });
  }
  res.status(405).json({ message: 'Method not allowed' });
}
