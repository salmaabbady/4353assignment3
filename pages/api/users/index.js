// pages/api/users/index.js
import { body } from 'express-validator';
import userService from '../../../backend/userService';
import { validate } from '../../../middleware/validation';

export default async function handler(req, res) {
  console.log(`${req.method} request to /api/users`);

  if (req.method === 'GET') {
    const users = userService.getUsers();
    console.log('GET users:', users);
    return res.status(200).json(users);
  }

  if (req.method === 'POST') {
    await body('email').isEmail().run(req);
    await body('fullName').isLength({ max: 50 }).run(req);
    await body('address1').isLength({ max: 100 }).run(req);
    await body('city').isLength({ max: 100 }).run(req);
    await body('state').isLength({ is: 2 }).run(req);
    await body('zipCode').isLength({ min: 5, max: 9 }).run(req);
    await body('skills').isArray().run(req);

    validate(req, res, () => {
      const user = req.body;
      const result = userService.addUser(user);
      console.log('User added:', result);
      return res.status(201).json(result);
    });
  }

  res.status(405).json({ message: 'Not allowed' });
}
