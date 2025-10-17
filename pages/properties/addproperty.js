import { useState } from 'react';
import { useRouter } from 'next/router';

// Landlord-facing page to add a new property listing
export default function AddProperty() {
  const router = useRouter();

  // Form state for property fields
  const [form, setForm] = useState({
    title: '',
    type: '',
    location: '',
    price: '',
    price_unit: 'per month',
    image_url: '',
    facilities: [],
    description: '',
  });

  const [facilityInput, setFacilityInput] = useState(''); // Selected facility from dropdown

  // Available facilities
  const facilitiesList = [
    'Parking', 'Central Heating', 'Alarm', 'Cable Television', 'Washing Machine',
    'Dryer', 'Dishwasher', 'Microwave', 'Pets Allowed', 'Internet', 'Gym', 'Entertainment Rooms', 'Laundry'
  ];

  // Add selected facility to the form's facilities array
  const handleAddFacility = () => {
    if (facilityInput && !form.facilities.includes(facilityInput)) {
      setForm(prev => ({
        ...prev,
        facilities: [...prev.facilities, facilityInput],
      }));
      setFacilityInput(''); // Reset dropdown
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send property data to backend API
    const res = await fetch('/api/properties/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        facilities: form.facilities.join(', '), // Send facilities as comma-separated string
      }),
    });

    if (res.ok) {
      alert('Property added!');
      router.push('/properties/myproperties'); // Redirect to property list
    } else {
      alert('Failed to add property');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Property</h2>

      {/* Property form */}
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />

        <label>Accommodation Type</label>
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
          required
        >
          <option value="">Select</option>
          <option value="Student Accommodation">Student Accommodation</option>
          <option value="Sharing Apartments">Sharing Apartments</option>
          <option value="Houses">Houses</option>
          <option value="Short Term">Short Term</option>
        </select>

        <label>Location</label>
        <input
          value={form.location}
          onChange={e => setForm({ ...form, location: e.target.value })}
          required
        />

        <label>Price</label>
        <div className="price-group">
          <input
            type="number"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            required
          />
          <select
            value={form.price_unit}
            onChange={e => setForm({ ...form, price_unit: e.target.value })}
          >
            <option value="per month">Per Month</option>
            <option value="per week">Per Week</option>
          </select>
        </div>

        <label>Image URL</label>
        <input
          value={form.image_url}
          onChange={e => setForm({ ...form, image_url: e.target.value })}
          required
        />

        <label>Facilities</label>
        <div className="facility-dropdown">
          <select
            value={facilityInput}
            onChange={e => setFacilityInput(e.target.value)}
          >
            <option value="">Select facility</option>
            {facilitiesList.map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <button type="button" onClick={handleAddFacility}>+</button>
        </div>

        {/* Display selected facilities as tags */}
        <div className="facility-tags">
          {form.facilities.map((f, idx) => (
            <span key={idx} className="facility-tag">{f}</span>
          ))}
        </div>

        <label>Property Description</label>
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          required
        />

        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}
