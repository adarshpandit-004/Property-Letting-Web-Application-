import db from '@/lib/db';                       // MySQL DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to get user from token

// GET /api/admin/applications
// Returns all property applications (admin-only)
export default async function handler(req, res) {
  const user = getUserFromRequest(req);          // Get logged-in user

  // Allow only admin users to access this API
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    // Join applications with tenant and property info
    const [rows] = await db.query(`
      SELECT 
        a.id,
        a.status,
        u.name AS tenant_name,
        u.email AS tenant_email,
        p.title AS property_title
      FROM applications a
      JOIN users u ON a.tenant_id = u.id
      JOIN properties p ON a.property_id = p.id
    `);

    // Return all application records
    res.status(200).json(rows);
  } catch (err) {
    console.error('Admin applications error:', err); // Log error for debug
    res.status(500).json({ message: 'Failed to load applications' });
  }
}
