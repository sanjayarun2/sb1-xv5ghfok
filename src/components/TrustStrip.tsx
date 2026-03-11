import { Link } from 'react-router-dom';
import { MapPin, Globe } from 'lucide-react';

const regions = [
  { label: 'Salem', to: '/about' },
  { label: 'Surat', to: '/saree-box-manufacturer-in-surat' },
  { label: 'Chennai', to: '/saree-box-manufacturer-in-chennai' },
  { label: 'Mumbai', to: '/saree-box-manufacturer-in-mumbai' },
  { label: 'Kolkata', to: '/saree-box-manufacturer-in-kolkata' },
  { label: 'Delhi', to: '/saree-box-manufacturer-in-delhi' },
  { label: 'Bangalore', to: '/saree-box-manufacturer-in-bangalore' },
  { label: 'Hyderabad', to: '/saree-box-manufacturer-in-hyderabad' },
  { label: 'Ahmedabad', to: '/saree-box-manufacturer-in-ahmedabad' },
];

interface TrustStripProps {
  variant?: 'india' | 'export' | 'both';
}

export default function TrustStrip({ variant = 'both' }: TrustStripProps) {
  return (
    <div className="bg-gray-50 border-t border-b border-gray-100 py-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {(variant === 'india' || variant === 'both') && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm text-gray-500 mb-2 last:mb-0">
            <MapPin className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
            <span className="font-semibold text-gray-700">Trusted by saree brands in</span>
            {regions.map((r, i) => (
              <span key={r.to}>
                <Link to={r.to} className="text-blue-600 hover:underline font-medium">
                  {r.label}
                </Link>
                {i < regions.length - 1 && <span className="text-gray-300 ml-1">&middot;</span>}
              </span>
            ))}
          </div>
        )}
        {(variant === 'export' || variant === 'both') && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm text-gray-500">
            <Globe className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
            <span className="font-semibold text-gray-700">Export packaging shipped to</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              UAE
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              USA
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              UK
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              Saudi Arabia
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              Singapore
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              Malaysia
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              Canada
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              Australia
            </Link>
            <span className="text-gray-300">&middot;</span>
            <Link to="/export-saree-boxes" className="text-blue-600 hover:underline font-medium">
              Germany
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
