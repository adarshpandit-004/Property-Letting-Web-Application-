import { useEffect, useState } from 'react';

// Tenant-facing page to view their own submitted applications
export default function MyApplications() {
  const [applications, setApplications] = useState([]); // List of tenant's applications
  const [error, setError] = useState('');               // Error message (if any)

  // Fetch tenant's applications on page load
  useEffect(() => {
    fetch('/api/applications/my')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setApplications(data); // Set data if valid
        } else {
          setError('Invalid response format.');
        }
      })
      .catch(() => {
        setError('Failed to load applications.');
      });
  }, []);

  return (
    <div className="form-container">
      <h2>My Applications</h2>

      {/* Show error if any */}
      {error && <p className="error">{error}</p>}

      {/* No applications yet */}
      {applications.length === 0 && !error ? (
        <p>You haven’t applied for any properties yet.</p>
      ) : (
        <div className="property-grid">
          {/* Show each application as a property card */}
          {applications.map((app) => (
            <div key={app.id} className="property-card">
              {/* Display property image if available */}
              {app.image_url && (
                <img
                  src={app.image_url}
                  alt={app.property_title}
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                />
              )}
              <h3>{app.property_title}</h3>
              <p><strong>Type:</strong> {app.type}</p>
              <p><strong>Location:</strong> {app.location}</p>
              <p><strong>Price:</strong> €{app.price}</p>
              <p><strong>Status:</strong> <span className={app.status}>{app.status}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
