import { useEffect, useState } from 'react';

// Admin-only component for managing users (view, edit, delete)
export default function ManageUsers() {
  const [users, setUsers] = useState([]);               // All users
  const [selectedUser, setSelectedUser] = useState(null); // Currently selected user
  const [isEditing, setIsEditing] = useState(false);     // Toggle edit mode

  // Fetch all users from the API
  const fetchUsers = async () => {
    const res = await fetch('/api/admin/users');
    const data = await res.json();
    setUsers(data);
  };

  // Load users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle button actions (view, edit, delete)
  const handleAction = async (action, userId) => {
    if (action === 'delete') {
      // Confirm before deletion
      if (confirm('Are you sure you want to delete this user?')) {
        await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' });
        await fetchUsers(); // Refresh list
      }
    } else if (action === 'view' || action === 'edit') {
      // Fetch selected user details
      const res = await fetch(`/api/admin/users/${userId}`);
      const data = await res.json();
      setSelectedUser(data);
      setIsEditing(action === 'edit');
    }
  };

  // Handle form input changes (for editing user)
  const handleChange = (field, value) => {
    setSelectedUser(prev => ({ ...prev, [field]: value }));
  };

  // Save updated user details to API
  const handleUpdate = async () => {
    const res = await fetch(`/api/admin/users/${selectedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedUser),
    });

    if (res.ok) {
      alert('User updated successfully');
      setSelectedUser(null);
      setIsEditing(false);
      await fetchUsers(); // Refresh list
    } else {
      alert('Failed to update user');
    }
  };

  return (
    <div className="form-container">
      <h2>Manage Users</h2>

      {/* User table */}
      <div className="table">
        <div className="user-table">

          {/* Table headers */}
          <div className="table-header">
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Actions</span>
          </div>

          {/* User rows */}
          {users.map(user => (
            <div key={user.id} className="table-row">
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.role}</span>
              <span className="action-buttons">
                <button onClick={() => handleAction('view', user.id)}>View</button>
                <button onClick={() => handleAction('edit', user.id)}>Edit</button>
                <button onClick={() => handleAction('delete', user.id)}>Delete</button>
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* View/Edit form (only shown when a user is selected) */}
      {selectedUser && (
        <div className="form-container mt-20">
          <h3>{isEditing ? 'Edit User' : 'User Details'}</h3>

          {/* Name */}
          <label>Name</label>
          <input
            value={selectedUser.name}
            onChange={e => handleChange('name', e.target.value)}
            disabled={!isEditing}
          />

          {/* Email */}
          <label>Email</label>
          <input
            value={selectedUser.email}
            onChange={e => handleChange('email', e.target.value)}
            disabled={!isEditing}
          />

          {/* Role */}
          <label>Role</label>
          <select
            value={selectedUser.role}
            onChange={e => handleChange('role', e.target.value)}
            disabled={!isEditing}
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>

          {/* Optional: Country code */}
          <label>Country Code</label>
          <input
            value={selectedUser.country_code || ''}
            onChange={e => handleChange('country_code', e.target.value)}
            disabled={!isEditing}
          />

          {/* Optional: Contact number */}
          <label>Contact Number</label>
          <input
            value={selectedUser.contact_number || ''}
            onChange={e => handleChange('contact_number', e.target.value)}
            disabled={!isEditing}
          />

          {/* Only show update button if in edit mode */}
          {isEditing && <button onClick={handleUpdate}>Update</button>}
        </div>
      )}
    </div>
  );
}
