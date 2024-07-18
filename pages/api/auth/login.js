// pages/api/auth/login.js
import authService from '../../../backend/authService';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const user = await authService.login(email, password);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
