import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string; // Added image prop for dynamic product photos
  type?: 'website' | 'product'; // Added to distinguish page types
}

export default function SEOHead({ 
  title, 
  description, 
  canonicalUrl,
  keywords,
  image,
  type = 'website' 
}: SEOProps) {
  const siteName = 'Premium Box Manufacturing';
  const fullTitle = `${title} | ${siteName}`;
  // Fallback to your main image if specific product image isn't provided
  const siteImage = image || "https://premiumpacking.in/printed%20box.webp"; 

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "description": description,
    "image": "https://premiumpacking.in/printed%20box.webp", 
    "url": "https://premiumpacking.in",
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
      "price": "99",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail"
      }
    }
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
      <meta property="og:type" content={type} />
      <meta property="og:image" content={siteImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />

      {/* Always show Organization for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* ONLY show Product Schema on product pages to avoid Google penalties */}
      {type === 'product' && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
}