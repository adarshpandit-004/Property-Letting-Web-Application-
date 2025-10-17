import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to validate user

// DELETE /api/users/[id]
// Admin-only route to delete a specific user
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get logged-in user

  // Only admins are allowed to delete users
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.query; // User ID from URL

  // Handle DELETE request
  if (req.method === 'DELETE') {
    try {
      await db.query('DELETE FROM users WHERE id = ?', [id]);
      res.status(200).json({ message: 'User deleted' });
    } catch {
      res.status(500).json({ message: 'Database error' }); // Server/database error
    }
  } else {
    res.status(405).end(); // Method not allowed for non-DELETE
  }
}
