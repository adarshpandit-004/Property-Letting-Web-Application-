import db from '@/lib/db';                       // Import DB connection
import { getUserFromRequest } from '@/lib/auth'; // Get logged-in user from token

// PUT /api/admin/applications/update
// Admin-only route to update the status of an application
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Verify requester identity

  // Allow only admin users
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  // Only allow PUT method
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id, status } = req.body; // Expect application ID and new status

  // Validate input
  if (!id || !status) {
    return res.status(400).json({ message: 'Missing application ID or status' });
  }

  try {
    // Update the application's status in the DB
    await db.query('UPDATE applications SET status = ? WHERE id = ?', [status, id]);
    return res.status(200).json({ message: `Application ${status}` });
  } catch (err) {
    console.error('Admin update error:', err); // Log error for debug
    return res.status(500).json({ message: 'Failed to update application' });
  }
}
