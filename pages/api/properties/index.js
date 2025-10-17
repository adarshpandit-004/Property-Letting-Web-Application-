import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to identify user

export default async function handler(req, res) {
  const user = getUserFromRequest(req); // Get user from token (if logged in)

  // GET: Public route to fetch all properties
  if (req.method === 'GET') {
    const [rows] = await db.query(`
      SELECT p.*, u.name AS landlord_name
      FROM properties p
      JOIN users u ON p.landlord_id = u.id
    `);

    // Mark each property with `mine: true` if it belongs to logged-in landlord
    const result = rows.map(row => ({
      ...row,
      mine: user?.role === 'landlord' && row.landlord_id === user.id
    }));

    return res.status(200).json(result);
  }

  // POST: Only landlords can create properties
  if (!user || user.role !== 'landlord') {
    return res.status(403).json({ message: 'Unauthorized access' });
  }

  if (req.method === 'POST') {
    const { title, type, location, price, image_url, facilities, description } = req.body;

    await db.query(
      `INSERT INTO properties 
       (title, type, location, price, image_url, facilities, description, landlord_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, type, location, price, image_url, facilities, description, user.id]
    );

    return res.status(201).json({ message: 'Property created' });
  }

  // Any unsupported method
  res.status(405).json({ message: 'Method Not Allowed' });
}
