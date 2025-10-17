import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Landlord-only page to view and manage their listed properties
export default function ListedProperties() {
  const [properties, setProperties] = useState([]); // Store only landlord's properties

  // Load properties on initial render
  useEffect(() => {
    fetch('/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data.filter(p => p.mine))); // Only keep properties flagged as "mine"
  }, []);

  // Delete property with confirmation
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this property?')) return;

    const res = await fetch(`/api/properties/${id}`, { method: 'DELETE' });

    if (res.ok) {
      // Remove deleted property from state
      setProperties(prev => prev.filter(p => p.id !== id));
    } else {
      alert('Failed to delete property.');
    }
  };

  // Redirect to edit page for selected property
  const handleEdit = (id) => {
    window.location.href = `/properties/edit/${id}`;
  };

  return (
    <div className="form-container">
      <h2>My Listed Properties</h2>

      {/* Show message if landlord has no listed properties */}
      {properties.length === 0 ? (
        <p>You have not listed any properties yet.</p>
      ) : (
        <div className="property-grid">
          {/* Display each property as a card */}
          {properties.map(p => (
            <div key={p.id} className="property-card">
              {p.image_url && <img src={p.image_url} alt={p.title} />}

              <h3>{p.title}</h3>
              <p><strong>Type:</strong> {p.type}</p>
              <p><strong>Location:</strong> {p.location}</p>
              <p><strong>Price:</strong> €{p.price}</p>

              {/* Action buttons: Edit / Delete */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(p.id)}>Edit</button>
                <button
                  onClick={() => handleDelete(p.id)}
                  style={{ backgroundColor: '#c0392b' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
