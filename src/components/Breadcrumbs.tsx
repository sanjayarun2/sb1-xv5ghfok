import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // FIX: Use your actual domain
  const domain = "https://premiumpacking.in";

  // Generate Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain 
      },
      ...pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": displayName,
          "item": `${domain}${routeTo}` 
        };
      })
    ]
  };

  // If we are on the homepage (no pathnames), we usually don't show breadcrumbs
  if (pathnames.length === 0) return null;

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');

            return (
              <React.Fragment key={name}>
                <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <li className="flex items-center">
                  {isLast ? (
                    <span className="text-blue-600 font-medium">{displayName}</span>
                  ) : (
                    <Link to={routeTo} className="text-gray-500 hover:text-gray-700">
                      {displayName}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}