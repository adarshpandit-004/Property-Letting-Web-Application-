import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to extract user info

export default async function handler(req, res) {
  const { id } = req.query; // Property ID from URL

  // Public: GET property details by ID
  if (req.method === 'GET') {
    const [rows] = await db.query(`
      SELECT p.*, u.name AS landlord_name
      FROM properties p
      JOIN users u ON p.landlord_id = u.id
      WHERE p.id = ?
    `, [id]);

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: 'Property not found' });
    }

    return res.status(200).json(rows[0]); // Return full property data with landlord name
  }

  // Auth check for PUT/DELETE actions
  const user = getUserFromRequest(req);
  if (!user || user.role !== 'landlord') {
    return res.status(403).json({ message: 'Unauthorized access' });
  }

  // DELETE: Landlord deletes their own property
  if (req.method === 'DELETE') {
    const [check] = await db.query(
      'SELECT * FROM properties WHERE id = ? AND landlord_id = ?',
      [id, user.id]
    );

    if (check.length === 0) {
      return res.status(404).json({ message: 'Property not found or not yours' });
    }

    await db.query('DELETE FROM properties WHERE id = ?', [id]);
    return res.status(200).json({ message: 'Deleted successfully' });
  }

  // PUT: Landlord updates their own property
  if (req.method === 'PUT') {
    const { title, type, location, price, image_url, facilities, description } = req.body;

    const [check] = await db.query(
      'SELECT * FROM properties WHERE id = ? AND landlord_id = ?',
      [id, user.id]
    );

    if (check.length === 0) {
      return res.status(404).json({ message: 'Property not found or not yours' });
    }

    await db.query(
      `UPDATE properties
       SET title = ?, type = ?, location = ?, price = ?, image_url = ?, facilities = ?, description = ?
       WHERE id = ?`,
      [title, type, location, price, image_url, facilities, description, id]
    );

    return res.status(200).json({ message: 'Updated successfully' });
  }

  // Unsupported method
  return res.status(405).json({ message: 'Method Not Allowed' });
}
