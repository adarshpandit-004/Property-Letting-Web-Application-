import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to get logged-in user

// GET /api/landlord/applications
// Landlord-only route to fetch applications for their properties
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get user from JWT token

  // Only landlords are allowed
  if (!user || user.role !== 'landlord') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  // Fetch applications linked to properties owned by this landlord
  const [rows] = await db.query(`
    SELECT 
      a.id,
      a.status,
      u.name AS tenant_name,
      u.email AS tenant_email,
      u.contact_number AS tenant_phone,
      p.title AS property_title
    FROM applications a
    JOIN users u ON a.tenant_id = u.id
    JOIN properties p ON a.property_id = p.id
    WHERE p.landlord_id = ?
  `, [user.id]);

  // Return applications list
  res.status(200).json(rows);
}
