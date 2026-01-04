import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  canonicalUrl,
  keywords 
}: SEOProps) {
  const siteName = 'Premium Box Manufacturing';
  const fullTitle = `${title} | ${siteName}`;

  // Use a standard JavaScript object and stringify it for the script tag
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "description": description,
    "url": canonicalUrl || "https://yourwebsite.com",
    "telephone": "+91 8904752338",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "183 Edanganasalai, Murugan Nagar - 2nd street",
        "addressLocality": "Elampillai",
        "postalCode": "637502",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "158 Tamil Nagar",
        "addressLocality": "Sivakasi",
        "postalCode": "626123",
        "addressCountry": "IN"
      }
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />

      {/* FIXED: Using JSON.stringify avoids the "Missing '}' or object member name" error */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}