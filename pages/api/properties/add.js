import db from '@/lib/db';                       // DB connection
import { getUserFromRequest } from '@/lib/auth'; // Auth helper to get logged-in user

// POST /api/properties/add
// Allows a landlord to add a new property
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') return res.status(405).end();

  const user = getUserFromRequest(req); // Get user from token

  // Only landlords are allowed to add properties
  if (!user || user.role !== 'landlord') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  const {
    title,
    type,
    location,
    price,
    price_unit,
    image_url,
    facilities,
    description
  } = req.body;

  // Validate required fields
  if (!title || !type || !location || !price || !image_url || !description) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    // Insert new property into the DB
    await db.query(`
      INSERT INTO properties 
      (title, type, location, price, image_url, facilities, description, landlord_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      title,
      type,
      location,
      `${price} ${price_unit}`, // Format: "700 €" or similar
      image_url,
      facilities,
      description,
      user.id // Link property to current landlord
    ]);

    res.status(200).json({ message: 'Property added' });
  } catch (err) {
    console.error('Add property error:', err); // Log error
    res.status(500).json({ message: 'Server error' });
  }
}
