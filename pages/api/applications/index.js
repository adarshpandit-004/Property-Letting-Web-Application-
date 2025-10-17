import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to get tenant info

// Route: POST /api/applications
// Allows a tenant to apply for a property
export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get logged-in user

  // Only allow tenants to apply
  if (!user || user.role !== 'tenant') {
    return res.status(403).json({ message: 'Only tenants can apply' });
  }

  // Handle application submission
  if (req.method === 'POST') {
    const { property_id } = req.body; // Property being applied for

    // Check for duplicate application
    const [existing] = await db.query(
      'SELECT * FROM applications WHERE tenant_id = ? AND property_id = ?',
      [user.id, property_id]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: 'Already applied for this property' });
    }

    // Insert new application with default status 'pending'
    await db.query(
      'INSERT INTO applications (tenant_id, property_id, status) VALUES (?, ?, ?)',
      [user.id, property_id, 'pending']
    );

    return res.status(200).json({ message: 'Application submitted successfully' });
  }

  // Reject unsupported methods
  res.status(405).json({ message: 'Method Not Allowed' });
}
