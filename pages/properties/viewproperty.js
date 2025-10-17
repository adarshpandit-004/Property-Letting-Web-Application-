import { useEffect, useState } from 'react';
import Link from 'next/link';

// Public page to browse all listed properties
export default function ViewProperties() {
  const [properties, setProperties] = useState([]); // Property list
  const [error, setError] = useState('');           // Error message (if any)

  // Fetch all properties on page load
  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch('/api/properties');
        if (!res.ok) throw new Error('Failed to fetch properties');

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Invalid response format');

        setProperties(data); // Save fetched properties
      } catch (err) {
        console.error('Error:', err.message);
        setError('Unable to load properties.');
        setProperties([]); // Clear list on failure
      }
    }

    fetchProperties();
  }, []);

  return (
    <div className="container">
      <h2>Browse Properties</h2>

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* No properties found */}
      {properties.length === 0 && !error ? (
        <p>No properties found.</p>
      ) : (
        <div className="property-grid">
          {/* Property cards */}
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img
                src={property.image_url}
                alt={property.title}
                style={{ maxWidth: '100%', borderRadius: '10px' }}
              />
              <h3>{property.title}</h3>
              <p><strong>Landlord:</strong> {property.landlord_name}</p>
              <p><strong>Price:</strong> €{property.price}</p>

              {/* Link to full property detail page */}
              <Link href={`/properties/${property.id}`}>View</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
