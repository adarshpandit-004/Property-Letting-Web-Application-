import { getUserFromRequest } from '@/lib/auth'; // Extract user from token
import db from '@/lib/db';                       // DB connection

// GET /api/auth/me
// Returns the logged-in user's profile data
export default async function handler(req, res) {
  const userToken = getUserFromRequest(req); // Extract user from JWT token

  // If no valid token → unauthorized
  if (!userToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Fetch user's full data from the DB using ID from token
  const [rows] = await db.query(
    'SELECT id, name, email, role FROM users WHERE id = ?', 
    [userToken.id]
  );

  const user = rows[0];

  // If user doesn't exist in DB
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Return user info
  return res.status(200).json(user);
}
