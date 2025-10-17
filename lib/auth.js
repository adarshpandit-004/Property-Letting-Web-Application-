import { parse } from 'cookie';     // For parsing cookies from request headers
import jwt from 'jsonwebtoken';    // For handling JSON Web Tokens (JWT)

// Secret key used to sign/verify tokens, taken from .env file
const SECRET = process.env.JWT_SECRET;

// Extracts and verifies user from request cookie (if token is valid)
export function getUserFromRequest(req) {
  const cookies = parse(req.headers.cookie || '');   // Get cookies from request
  const token = cookies.token;                       // Get token cookie

  if (!token) return null;                           // No token = no user

  try {
    // Verify and decode token using the secret key
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;                                      // Return user payload (id, role, name)
  } catch (err) {
    return null;                                      // Invalid token = return null
  }
}

// Creates a new JWT token for a logged-in user
export function createToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role, name: user.name },  // Payload to store in token
    SECRET,                                              // Signing secret
    { expiresIn: '7d' }                                  // Token valid for 7 days
  );
}
