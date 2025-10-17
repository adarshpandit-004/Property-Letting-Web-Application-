import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to get landlord info

// Route: GET /api/applications/manage
// Landlord-only route to fetch all applications submitted for their properties
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get logged-in user

  // Only landlords are allowed to access this route
  if (!user || user.role !== 'landlord') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  // Get all applications for properties owned by this landlord
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
    WHERE p.landlord_id = ?
    ORDER BY a.id DESC
  `, [user.id]);

  // Return the list of applications
  return res.status(200).json(rows);
}
