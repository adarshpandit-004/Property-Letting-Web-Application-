import { useEffect, useState } from 'react';

// Admin-only page to view and delete users
export default function ManageUsers() {
  const [users, setUsers] = useState([]); // User list

  // Fetch users on first render
  useEffect(() => {
    fetchUsers();
  }, []);

  // Load all users from API
  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  // Delete user and refresh list
  const handleDelete = async (id) => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    fetchUsers(); // Refresh list after deletion
  };

  return (
    <div className="container">
      <h2>Manage Users</h2>

      {/* Users table */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
