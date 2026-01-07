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
  const siteImage = "https://premiumpacking.in/4box.webp"; // Required for SERP Image

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "description": description,
    "image": siteImage, // Fix for SERP image
    "url": canonicalUrl || "https://premiumpacking.in",
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
      {/* Google Tag (gtag.js) Fix */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RZLWYZYQT7"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RZLWYZYQT7');
        `}
      </script>

      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage} /> {/* Fix for SERP image */}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} /> {/* Fix for SERP image */}
      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Direct Google Image Fixes */}
      <meta name="thumbnail" content={siteImage} />
      <meta name="image" content={siteImage} />
      
      <meta name="theme-color" content="#ffffff" />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}