import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Logout page — clears token and redirects to home
export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Call logout API, then redirect to home
    async function logout() {
      await fetch('/api/auth/logout');
      router.push('/'); // Redirect to homepage
    }

    logout(); // Trigger logout on page load
  }, []);

  return <p>Logging out...</p>; // Temporary message while logging out
}
