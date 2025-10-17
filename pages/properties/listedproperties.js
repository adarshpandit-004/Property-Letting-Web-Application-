import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Landlord-facing page to manage (view/edit/delete) their listed properties
export default function ListedProperties() {
  const [properties, setProperties] = useState([]); // List of landlord's own properties
  const router = useRouter();

  // Fetch all properties and filter only those owned by current landlord
  useEffect(() => {
    fetch('/api/properties')
      .then(res => res.json())
      .then(data => {
        const mine = data.filter(p => p.mine); // Keep only properties flagged as "mine"
        setProperties(mine);
      });
  }, []);

  // Delete a property
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

  // Navigate to property edit page
  const handleEdit = (id) => {
    router.push(`/properties/myproperties?id=${id}`);
  };

  return (
    <div className="form-container">
      <h2>My Listed Properties</h2>

      {/* message to show properties listed yet */}
      {properties.length === 0 ? (
        <p>You have not listed any properties yet.</p>
      ) : (
        <div className="property-grid">
          {/* Render each property card */}
          {properties.map(p => (
            <div key={p.id} className="property-card">
              {p.image_url && <img src={p.image_url} alt={p.title} />}

              <h3>{p.title}</h3>
              <p><strong>Type:</strong> {p.type}</p>
              <p><strong>Location:</strong> {p.location}</p>
              <p><strong>Price:</strong> €{p.price}</p>

              {/* Edit & Delete buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={() => handleEdit(p.id)}>Edit</button>
                <button
                  onClick={() => handleDelete(p.id)}
                  style={{ backgroundColor: '#c0392b', color: 'white' }}
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
