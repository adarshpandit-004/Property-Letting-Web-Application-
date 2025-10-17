import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to identify user

// Route: GET /api/applications/myapplications
// Tenant-only route to get their submitted applications
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get logged-in user

  // Only tenants are allowed to view their applications
  if (!user || user.role !== 'tenant') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  // Get all applications submitted by this tenant
  const [rows] = await db.query(`
    SELECT 
      a.id, 
      a.status,
      p.title AS property_title,
      p.type, 
      p.location, 
      p.price, 
      p.image_url
    FROM applications a
    JOIN properties p ON a.property_id = p.id
    WHERE a.tenant_id = ?
  `, [user.id]);

  // Return list of applications + related property info
  res.status(200).json(rows);
}
