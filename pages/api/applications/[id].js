import db from '@/lib/db';                       // Database connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to validate user

// Admin-only route to update status of a specific application (PUT)
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get user from JWT token

  // Allow only admin users
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.query; // Get application ID from URL

  // PUT → update application status (approved/declined)
  if (req.method === 'PUT') {
    const { status } = req.body;

    // Only allow valid status values
    if (!['approved', 'declined'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    try {
      // Update application status in DB
      await db.query('UPDATE applications SET status = ? WHERE id = ?', [status, id]);
      return res.status(200).json({ message: 'Application updated' });
    } catch {
      return res.status(500).json({ message: 'Update failed' }); // DB error
    }
  }

  // For any other method → return 405
  res.status(405).end();
}
