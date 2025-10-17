import { useState } from 'react';
import { useRouter } from 'next/router';

// Login page for users (tenant, landlord, admin)
export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' }); // Form state
  const [error, setError] = useState('');                         // Error message
  const router = useRouter();

  // Update form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error

    // Send login request
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // Handle login result
    if (!res.ok) {
      setError(data.message || 'Login failed');
    } else {
      router.push('/dashboard'); // Redirect on success
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      {/* Shows error if any data doesn't match with the one stored in sql */}
      {error && <p className="error">{error}</p>}

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
