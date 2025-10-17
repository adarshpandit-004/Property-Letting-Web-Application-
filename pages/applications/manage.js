import { useEffect, useState } from 'react';

// Landlord-facing page to manage tenant applications
export default function ManageApplications() {
  const [applications, setApplications] = useState([]); // All applications

  // Fetch applications for properties owned by the logged-in landlord
  useEffect(() => {
    fetch('/api/applications/manage')
      .then(res => res.json())
      .then(setApplications);
  }, []);

  // Handle status update (approve or decline)
  const handleStatusChange = async (id, status) => {
    await fetch(`/api/applications/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });

    // Update the application status locally after successful change
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, status } : app))
    );
  };

  return (
    <div className="form-container">
      <h2>Manage Applications</h2>

      {/* If no applications available */}
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        // Display application cards
        applications.map((app) => (
          <div key={app.id} className="application-card">
            <p><strong>Tenant:</strong> {app.tenant_name} ({app.tenant_email})</p>
            <p><strong>Property:</strong> {app.property_title}</p>
            <p><strong>Status:</strong> {app.status}</p>

            {/* Show approve/decline buttons only if status is pending */}
            {app.status === 'pending' && (
              <>
                <button onClick={() => handleStatusChange(app.id, 'approved')}>Approve</button>
                <button onClick={() => handleStatusChange(app.id, 'declined')}>Decline</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
