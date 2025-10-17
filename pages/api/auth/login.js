import db from '@/lib/db';             // DB connection
import bcrypt from 'bcrypt';           // For password hashing comparison
import { createToken } from '@/lib/auth'; // JWT token creator

// POST /api/auth/login
// Handles user login and issues a secure cookie with a token
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  try {
    // Look up user by email (case-insensitive)
    const [rows] = await db.query(
      'SELECT * FROM users WHERE LOWER(email) = LOWER(?) LIMIT 1',
      [email.trim()]
    );

    // No matching user
    if (!rows || rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials (email not found)' });
    }

    const user = rows[0];

    // Check password match using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials (wrong password)' });
    }

    // Create JWT token with user data
    const token = createToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });

    // Set token in HttpOnly cookie (valid for 7 days)
    res.setHeader(
      'Set-Cookie',
      `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`
    );

    return res.status(200).json({ message: 'Login successful' });

  } catch (err) {
    console.error('Login error:', err); // Log any server error
    return res.status(500).json({ message: 'Server error' });
  }
}
