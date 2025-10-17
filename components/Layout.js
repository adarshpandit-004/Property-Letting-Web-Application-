import Link from 'next/link'; // Used for client-side navigation between pages

// Layout component wraps around each page and adds a consistent navbar at the top
// Props:children: the actual page content passed inside <Layout>...</Layout>

export default function Layout({ children }) {
  return (
    <div>
      {/* navigation bar */}
      <nav className="navbar">
        <div className="navbar-brand">HearthLet Agency</div> 

        <div className="navbar-links">
          {/* Navigation links to key pages */}
          <Link href="/">Home</Link>
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
          <Link href="/logout">Logout</Link>
        </div>
      </nav>

      {/* Main content area where child components/pages are rendered */}
      <main>{children}</main>
    </div>
  );
}
