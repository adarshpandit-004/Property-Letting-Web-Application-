import db from '@/lib/db';                       // MySQL connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to validate user

// Admin-only API route to fetch all users
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get logged-in user

  // Reject if not an admin
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  // Get list of all users (basic info only)
  const [rows] = await db.query('SELECT id, name, email, role FROM users');

  // Return users to client
  return res.status(200).json(rows);
}
