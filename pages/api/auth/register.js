import db from '@/lib/db';         // DB connection
import bcrypt from 'bcrypt';       // For password hashing

// POST /api/auth/register
// Handles user registration for tenants and landlords
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, contact_number, password, role } = req.body;

  // Basic field validation
  if (!name || !email || !contact_number || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Role must be tenant or landlord
  if (!['tenant', 'landlord'].includes(role)) {
    return res.status(400).json({ message: 'Invalid user role' });
  }

  // Validate contact number format: +ccXXXXXXXXXX,, country code with phone number
  const phoneRegex = /^\+\d{2,3}\d{10}$/;
  if (!phoneRegex.test(contact_number)) {
    return res.status(400).json({ message: 'Invalid contact number format' });
  }

  try {
    // Check if the email is already registered
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await db.query(
      'INSERT INTO users (name, email, contact_number, password, role) VALUES (?, ?, ?, ?, ?)',
      [name, email, contact_number, hashedPassword, role]
    );

    return res.status(200).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Registration error:', error); // Log any server errors
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
