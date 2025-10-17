import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Page to show full property details with an "Apply Now" button for tenants
export default function PropertyDetails() {
  const { id } = useRouter().query;                  // Property ID from URL
  const [property, setProperty] = useState(null);    // Property details
  const [user, setUser] = useState(null);            // Logged-in user info
  const [applyMsg, setApplyMsg] = useState('');      // Success/error message
  const [error, setError] = useState('');            // Load error
  const [loading, setLoading] = useState(true);      // Loading state

  useEffect(() => {
    if (!id) return;

    // Fetch property details
    fetch(`/api/properties/${id}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('Property not found');
        return res.json();
      })
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // Fetch logged-in user info
    fetch('/api/auth/me')
      .then(res => res.ok ? res.json() : null)
      .then(setUser);
  }, [id]);

  // Submit application for this property (only for tenants)
  const handleApply = async () => {
    const res = await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ property_id: property.id }),
    });

    if (res.ok) {
      setApplyMsg(`${user.name} successfully applied for "${property.title}"`);
    } else {
      const errData = await res.json();
      setApplyMsg(`Failed to apply: ${errData.message}`);
    }
  };

  // Handle loading/error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>No property found.</p>;

  return (
    <div className="form-container">
      <h2>{property.title}</h2>

      {/* Property image */}
      {property.image_url && (
        <img
          src={property.image_url}
          alt={property.title}
          style={{ maxWidth: '100%', borderRadius: '10px' }}
        />
      )}

      {/* Property details */}
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Landlord:</strong> {property.landlord_name}</p>
      <p><strong>Price:</strong> €{property.price}</p>
      <p><strong>Facilities:</strong> {property.facilities}</p>
      <p><strong>Description:</strong> {property.description}</p>

      {/* Show Apply button only if logged in as tenant */}
      {user?.role === 'tenant' ? (
        <button onClick={handleApply} style={{ marginTop: '20px' }}>Apply Now</button>
      ) : (
        <a href="/login">
          <button style={{ marginTop: '20px' }}>Login to Apply</button>
        </a>
      )}

      {/* Show result message */}
      {applyMsg && <p className="success" style={{ marginTop: '10px' }}>{applyMsg}</p>}
    </div>
  );
}
