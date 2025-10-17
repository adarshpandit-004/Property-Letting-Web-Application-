import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to extract user info

// GET /api/users
// Admin-only route to fetch all users
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get the authenticated user

  // Only admins can access this route
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    // Fetch user list (exclude passwords)
    const [users] = await db.query('SELECT id, name, email, role FROM users');
    res.status(200).json(users); // Return user data
  } catch {
    res.status(500).json({ message: 'Database error' }); // Handle DB failure
  }
}
