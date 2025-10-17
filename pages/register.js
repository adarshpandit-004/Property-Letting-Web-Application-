import { useState } from 'react';
import { useRouter } from 'next/router';

// User registration page for tenants and landlords
export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    country_code: '+353',
    contact_number: '',
    password: '',
    confirmPassword: '',
    role: 'tenant',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Updates form fields on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Submit form data to register user
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validations for password, and contact number
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/^\d{10}$/.test(form.contact_number)) {
      setError("Contact number must be 10 digits");
      return;
    }

    const fullNumber = `${form.country_code}${form.contact_number}`;

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        contact_number: fullNumber,
        password: form.password,
        role: form.role,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Registration failed");
    } else {
      setMessage("Registration successful. Redirecting...");
      setError('');
      setTimeout(() => router.push('/login'), 1500); // Redirect to login after short delay
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>

      {/* Success/error messages */}
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      {/* Registration form */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Contact Number</label>
        <div className="phone-input">
          <select name="country_code" value={form.country_code} onChange={handleChange}>
            <option value="+353">IE +353</option>
            <option value="+977">NP +977</option>
            <option value="+34">ES +34</option>
          </select>
          <input
            type="text"
            name="contact_number"
            placeholder="10-digit number"
            maxLength="10"
            value={form.contact_number}
            onChange={handleChange}
            required
          />
        </div>

        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />

        <label>Role</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
