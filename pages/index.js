import Link from 'next/link';
import Head from 'next/head';

// Public homepage of HearthLet Agency
export default function Home() {
  return (
    <div>
      <Head>
        <title>HearthLet Agency | Home</title>
      </Head>

      {/* Hero Section - Welcome message and CTA */}
      <section className="hero">
        <h1>Find Your Cozy Corner</h1>
        <p>A warm, secure stay begins with HearthLet Agency.</p>
        <Link href="/properties/viewproperty" className="browse-btn">
          Browse Properties
        </Link>
      </section>

      {/* Featured Properties Preview */}
      <section className="property-preview">
        <h2>Listed Properties</h2>
        <div className="property-thumbnails">
          {/* Static example thumbnails */}
          <a href="/properties/1">
            <img src="/images/1.jpg" alt="Property 1" />
          </a>
          <a href="/properties/3">
            <img src="/images/2.jpg" alt="Property 3" />
          </a>
          <a href="/properties/4">
            <img src="/images/3.jpg" alt="Property 4" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <footer className="about">
        <h2>About Us</h2>
        <p>
          HearthLet Agency is a trusted Dublin-based property letting platform that connects tenants
          with warm, affordable homes and enables landlords to securely manage their properties.
          Whether you're looking for a long-term rental or listing your apartment, HearthLet ensures
          a smooth, reliable experience with a human touch.
        </p>
      </footer>

      {/* Branding at the bottom */}
      <div className="navbar-brand">
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
          HearthLet Agency
        </a>
      </div>
    </div>
  );
}
