import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Page for landlords to edit their own listed property
export default function EditProperty() {
  const { id } = useRouter().query;         // Get property ID from URL
  const router = useRouter();

  const [form, setForm] = useState({
    title: '', type: '', location: '', price: '', image_url: '',
    facilities: '', description: ''
  });

  const [error, setError] = useState('');

  // Fetch property details to pre-fill form
  useEffect(() => {
    if (!id) return;

    fetch(`/api/properties/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setForm({
            title: data.title || '',
            type: data.type || '',
            location: data.location || '',
            price: data.price || '',
            image_url: data.image_url || '',
            facilities: data.facilities || '',
            description: data.description || ''
          });
        }
      })
      .catch(() => setError('Failed to load property.'));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Submits updated property to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/properties/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      router.push('/properties/listedproperties'); // Redirect after update
    } else {
      setError('Failed to update property.');
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Property</h2>

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* allows to edit form */}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} required />

        <label>Type</label>
        <input name="type" value={form.type} onChange={handleChange} required />

        <label>Location</label>
        <input name="location" value={form.location} onChange={handleChange} required />

        <label>Price</label>
        <input name="price" value={form.price} onChange={handleChange} required />

        <label>Image URL</label>
        <input name="image_url" value={form.image_url} onChange={handleChange} />

        <label>Facilities</label>
        <input name="facilities" value={form.facilities} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} rows="4" />

        <button type="submit">Update Property</button>
      </form>
    </div>
  );
}
