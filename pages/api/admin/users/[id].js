import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to extract user info

// API route for admin to view, update, or delete a specific user by ID
export default async function handler(req, res) {
  const { id } = req.query;                     // Get user ID from URL
  const user = getUserFromRequest(req);         // Get logged-in user

  // Block non-admin access
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  // GET → fetch user details by ID
  if (req.method === 'GET') {
    const [rows] = await db.query(
      'SELECT id, name, email, role, country_code, contact_number FROM users WHERE id = ?',
      [id]
    );
    if (!rows.length) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(rows[0]); // Return user info
  }

  // PUT → update user info
  if (req.method === 'PUT') {
    const { name, email, role, country_code, contact_number } = req.body;

    await db.query(
      'UPDATE users SET name = ?, email = ?, role = ?, country_code = ?, contact_number = ? WHERE id = ?',
      [name, email, role, country_code, contact_number, id]
    );

    return res.status(200).json({ message: 'User updated' });
  }

  // DELETE → remove the user by ID
  if (req.method === 'DELETE') {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    return res.status(200).json({ message: 'User deleted' });
  }

  // If request method is not handled
  res.status(405).json({ message: 'Method Not Allowed' });
}
