import { useEffect, useState } from 'react';

// Tenant-facing page to apply for a property
export default function Apply() {
  const [properties, setProperties] = useState([]);    // All available properties
  const [propertyId, setPropertyId] = useState('');    // Selected property ID
  const [message, setMessage] = useState('');          // Success/error message

  // Fetch all properties on initial render
  useEffect(() => {
    async function fetchProperties() {
      const res = await fetch('/api/properties');       // Call API
      const data = await res.json();
      setProperties(data);                              // Store properties
    }
    fetchProperties();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message

    const res = await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ property_id: propertyId }), // Submit selected property ID
    });

    const data = await res.json();

    // Show response message
    if (!res.ok) {
      setMessage(data.message || 'Application failed');
    } else {
      setMessage('Application submitted successfully!');
      setPropertyId(''); // Reset selection
    }
  };

  return (
    <div className="form-container">
      <h2>Apply for a Property</h2>

      {/* Application form */}
      <form onSubmit={handleSubmit}>
        {/* Dropdown with all property options */}
        <select value={propertyId} onChange={(e) => setPropertyId(e.target.value)} required>
          <option value="">Select a property</option>
          {properties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title} — €{p.price}
            </option>
          ))}
        </select>

        <button type="submit">Apply</button>

        {/* Success or error message */}
        {message && <p className="success">{message}</p>}
      </form>
    </div>
  );
}
