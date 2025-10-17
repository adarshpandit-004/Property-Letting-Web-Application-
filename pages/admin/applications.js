import { useEffect, useState } from 'react';

// AdminApplications component shows a list of all tenant applications with full actions
export default function AdminApplications() {
  const [apps, setApps] = useState([]); // State to store applications

  // Fetch all applications from admin API
  const fetchApplications = async () => {
    const res = await fetch('/api/admin/applications');
    const data = await res.json();
    setApps(Array.isArray(data) ? data : []); // Set data if it's a valid array
  };

  // Load applications on component mount
  useEffect(() => {
    fetchApplications();
  }, []);

  // Handle "View" button → shows application details in an alert
  const handleView = async (id) => {
    const res = await fetch(`/api/admin/applications/${id}`);
    const data = await res.json();
    alert(`Tenant: ${data.tenant_name}
Email: ${data.tenant_email}
Applied Property: ${data.property_title}
Location: ${data.location}
Status: ${data.status}`);
  };

  // Confirm action (approve/decline/delete), call API accordingly
  const confirmAction = async (action, id) => {
    const confirmMsg = `Are you sure you want to ${action} this application?`;
    if (!confirm(confirmMsg)) return; // Show confirm dialog

    const method = action === 'delete' ? 'DELETE' : 'PUT';
    const body = action === 'delete' ? null : JSON.stringify({ status: action });

    const res = await fetch(`/api/admin/applications/${id}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body
    });

    if (res.ok) {
      await fetchApplications(); // Refresh list on success
    } else {
      alert('Failed to update status.');
    }
  };

  return (
    <div className="form-container">
      <h2>All Applications</h2>

      {/* Application table layout */}
      <div className="table">
        <div className="table application-table">

          {/* Table header with CSS grid layout */}
          <div className="table-header" style={{ gridTemplateColumns: '2fr 3fr 1fr 1fr 4fr' }}>
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* Table rows for each application */}
          {apps.map(app => (
            <div key={app.id} className="table-row" style={{ gridTemplateColumns: '2fr 3fr 1fr 1fr 4fr' }}>
              <span>{app.tenant_name}</span>
              <span>{app.tenant_email}</span>
              <span>tenant</span>
              <span className={`status-badge ${app.status}`}>{app.status}</span>

              <span className="action-buttons">
                <button className="view-btn" onClick={() => handleView(app.id)}>View</button>
                <button className="edit-btn" onClick={() => confirmAction('approved', app.id)}>Approve</button>
                <button className="edit-btn" onClick={() => confirmAction('declined', app.id)}>Decline</button>
                <button className="delete-btn" onClick={() => confirmAction('delete', app.id)}>Delete</button>
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
