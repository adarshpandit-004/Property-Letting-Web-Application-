import '../styles/globals.css';

// Reusable layout for all pages
import Layout from '../components/Layout';

/**
 * The custom App component in Next.js, which wraps every page in the <Layout> component,so it persist across all pages.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
