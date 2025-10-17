import { Html, Head, Main, NextScript } from "next/document";

/*Custom HTML document structure for the app. */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body className="antialiased">
        <Main />        
        <NextScript />  
      </body>
    </Html>
  );
}
