import { useEffect, useState } from 'react';

// Landlord view to manage applications submitted for their properties
export default function ManageApplications() {
  const [apps, setApps] = useState([]);           // Application list
  const [successMsg, setSuccessMsg] = useState(''); // Success message (after approval)

  // Load landlord's applications on first render
  useEffect(() => {
    fetch('/api/landlord/applications')
      .then(res => res.json())
      .then(setApps);
  }, []);

  // Handle approval or rejection of an application
  const handleAction = async (id, status, tenantName, propertyTitle) => {
    const confirmMsg = `Are you sure you want to ${status} this application?`;
    if (!confirm(confirmMsg)) return;

    // Update application status via API
    const res = await fetch(`/api/admin/applications/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });

    // Show success message if approved
    if (res.ok && status === 'approved') {
      setSuccessMsg(`${tenantName} successfully booked "${propertyTitle}".`);
    }

    // Refresh application list after update
    const updated = await fetch('/api/landlord/applications').then(res => res.json());
    setApps(updated);
  };

  return (
    <div className="form-container">
      <h2>Manage Applications</h2>

      {/* Success message after approval */}
      {successMsg && <p className="success">{successMsg}</p>}

      {/* List of applications */}
      {apps.map(app => (
        <div key={app.id} style={{ marginBottom: '30px' }}>
          <p><strong>Name:</strong> {app.tenant_name}</p>
          <p><strong>Email:</strong> {app.tenant_email}</p>
          <p><strong>Phone:</strong> {app.tenant_phone || 'Not provided'}</p>
          <p><strong>Property:</strong> {app.property_title}</p>
          <p><strong>Status:</strong> {app.status}</p>

          {/* Action buttons */}
          <button
            onClick={() => handleAction(app.id, 'approved', app.tenant_name, app.property_title)}>
            Approve
          </button>
          <button
            onClick={() => handleAction(app.id, 'declined', app.tenant_name, app.property_title)}
            style={{ marginLeft: '10px' }}>
            Decline
          </button>
        </div>
      ))}
    </div>
  );
}
