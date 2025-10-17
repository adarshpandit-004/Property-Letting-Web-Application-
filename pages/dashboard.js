import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Dashboard that adapts based on user role (landlord, tenant, admin)
export default function Dashboard() {
  const [user, setUser] = useState(null); // Logged-in user data
  const router = useRouter();

  // Fetch user info on first load
  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (!data) router.push('/login'); // If not logged in, redirect to login
        else setUser(data);               // Set user if logged in
      });
  }, []);

  // Show loading state while user data is loading
  if (!user) return <p>Loading...</p>;

  return (
    <div className="form-container">
      <h2>Welcome back, {user.name}</h2>
      <p><strong>Role:</strong> {user.role}</p>

      {/* Landlord options */}
      {user.role === 'landlord' && (
        <>
          <button onClick={() => router.push('/properties/addproperty')}>Add New Property</button>
          <button onClick={() => router.push('/properties/myproperties')}>Listed Properties</button>
          <button onClick={() => router.push('/applications/manage')}>Manage Applications</button>
        </>
      )}

      {/* Tenant options */}
      {user.role === 'tenant' && (
        <>
          <button onClick={() => router.push('/properties/viewproperty')}>Browse Properties</button>
          <button onClick={() => router.push('/applications/myapplications')}>My Applications</button>
        </>
      )}

      {/* Admin options */}
      {user.role === 'admin' && (
        <>
          <button onClick={() => router.push('/admin/users')}>Manage Users</button>
          <button onClick={() => router.push('/admin/applications')}>Manage Applications</button>
        </>
      )}
    </div>
  );
}
