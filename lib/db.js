import mysql from 'mysql2/promise'; // Use promise-based MySQL client

// Create a connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Database host
  user: process.env.DB_USER,         // DB username
  password: process.env.DB_PASSWORD, // DB password
  database: process.env.DB_NAME,     // DB name
  waitForConnections: true,          // Wait if no connection is available
  connectionLimit: 10,               // Max number of connections
});

// Export the pool for use in API routes and queries
export default pool;
