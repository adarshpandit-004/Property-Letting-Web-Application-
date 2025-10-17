import cookie from 'cookie'; // For setting and clearing cookies

/*Clears the JWT token cookie to log the user out, even works with GET or POST requests.*/
export default function handler(req, res) {
  // Overwrite the token cookie with an empty value and expired date
  res.setHeader('Set-Cookie', cookie.serialize('token', '', {
    httpOnly: true,         // Cookie can't be accessed by JS
    path: '/',              // Applies to entire app
    expires: new Date(0),   // Immediately expires the cookie
  }));

  return res.status(200).json({ message: 'Logged out successfully' });
}
