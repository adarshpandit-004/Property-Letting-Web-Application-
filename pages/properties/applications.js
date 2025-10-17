import { useEffect, useState } from 'react';

// Landlord-facing page to manage all incoming tenant applications
export default function ManageApplications() {
  const [applications, setApplications] = useState([]); // Stores applications
  const [message, setMessage] = useState('');           // Success message

  // Load applications on first render
  useEffect(() => {
    fetch('/api/landlord/applications')
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(() => setApplications([])); // Handle error silently
  }, []);

  // Handle approve/decline action
  const handleAction = async (id, action) => {
    const confirmMsg = `Are you sure you want to ${action} this application?`;
    if (!confirm(confirmMsg)) return;

    // Update status via API
    const res = await fetch(`/api/landlord/applications/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: action })
    });

    if (res.ok) {
      // Refresh application list after update
      const updated = await fetch('/api/landlord/applications').then(res => res.json());
      setApplications(updated);

      // Show booking confirmation message
      const app = updated.find(a => a.id === id);
      if (action === 'approved' && app) {
        setMessage(`${app.tenant_name} successfully booked "${app.property_title}"`);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Manage Applications</h2>

      {/* Success message after approval */}
      {message && <p className="success">{message}</p>}

      {/* If no applications exist */}
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="application-card">
            <p><strong>Tenant Name:</strong> {app.tenant_name}</p>
            <p><strong>Email:</strong> {app.tenant_email}</p>
            <p><strong>Phone:</strong> {app.contact_number}</p>
            <p><strong>Property:</strong> {app.property_title}</p>
            <p><strong>Status:</strong> {app.status}</p>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button onClick={() => handleAction(app.id, 'approved')}>Approve</button>
              <button onClick={() => handleAction(app.id, 'declined')}>Decline</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
