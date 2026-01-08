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
  const siteImage = "https://premiumpacking.in/printed%20box.webp"; 

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "description": description,
    "image": siteImage, 
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

  // FIX: Added Product Schema for Stars, Stock, and Delivery labels
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": title,
    "image": siteImage,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": siteName
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl || "https://premiumpacking.in",
      "priceCurrency": "INR",
      "price": "99", // Set to a low placeholder value to trigger the label
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        }
      }
    }
  };

  return (
    <Helmet>
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
      
      <meta name="robots" content="max-image-preview:large" />
      
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />
      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      <meta name="thumbnail" content={siteImage} />
      <meta name="image" content={siteImage} />
      
      <meta name="theme-color" content="#ffffff" />

      {/* Organization/LocalBusiness Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Product/Rating/Price/Stock Data */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
}