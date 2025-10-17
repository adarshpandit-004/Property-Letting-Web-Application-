import db from '@/lib/db';                      // DB connection pool
import { getUserFromRequest } from '@/lib/auth'; // Extract and verify user from token

// API handler to manage a specific application by its ID (GET, PUT, DELETE)
export default async function handler(req, res) {
  const { id } = req.query;                     // Extract application ID from URL
  const user = getUserFromRequest(req);         // Get authenticated user

  // Allow only admin users
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    // GET → fetch application details (tenant + property info)
    if (req.method === 'GET') {
      const [rows] = await db.query(`
        SELECT 
          a.id, 
          a.status, 
          u.name AS tenant_name, 
          u.email AS tenant_email,
          p.title AS property_title, 
          p.location
        FROM applications a
        JOIN users u ON a.tenant_id = u.id
        JOIN properties p ON a.property_id = p.id
        WHERE a.id = ?
      `, [id]);

      if (rows.length === 0) return res.status(404).json({ message: 'Not found' });
      return res.status(200).json(rows[0]); // Return single application row
    }

    // PUT → update application status (approved/declined/pending)
    if (req.method === 'PUT') {
      const { status } = req.body;

      // Validate status input
      if (!['approved', 'declined', 'pending'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
      }

      await db.query('UPDATE applications SET status = ? WHERE id = ?', [status, id]);
      return res.status(200).json({ message: 'Status updated' });
    }

    // DELETE → remove the application completely
    if (req.method === 'DELETE') {
      await db.query('DELETE FROM applications WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Application deleted' });
    }

    // If method is not GET, PUT or DELETE → return 405
    res.status(405).json({ message: 'Method Not Allowed' });
    
  } catch (err) {
    console.error('Admin applications [id] error:', err); // Log error for debugging
    res.status(500).json({ message: 'Server error' });     // Return generic error message
  }
}
