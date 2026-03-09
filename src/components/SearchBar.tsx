import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define product data for client-side search
const products = [
  {
    id: '1',
    name: 'Premium Silk Saree Box',
    description: 'Elegant box with golden accents and traditional design',
    category: 'Saree Boxes',
    keywords: ['silk', 'saree', 'traditional', 'wedding', 'bridal']
  },
  {
    id: '2',
    name: 'Wedding Saree Box',
    description: 'Luxurious box with traditional designs and premium finish',
    category: 'Saree Boxes',
    keywords: ['wedding', 'bridal', 'luxury', 'premium']
  },
  {
    id: '3',
    name: 'Designer Saree Box',
    description: 'Modern design with metallic accents',
    category: 'Saree Boxes',
    keywords: ['designer', 'modern', 'metallic', 'fashion']
  },
  {
    id: '4',
    name: 'Custom Printed Gift Box',
    description: 'Full-color printed packaging with your design',
    category: 'Printed Boxes',
    keywords: ['gift', 'custom', 'printed', 'personalized']
  },
  {
    id: '5',
    name: 'Retail Product Box',
    description: 'Brand-focused packaging with high-quality printing',
    category: 'Printed Boxes',
    keywords: ['retail', 'brand', 'product', 'packaging']
  },
  {
    id: '6',
    name: 'Industrial Carton',
    description: 'Heavy-duty corrugated boxes for shipping',
    category: 'Carton Boxes',
    keywords: ['industrial', 'shipping', 'heavy-duty', 'corrugated']
  },
  {
    id: '7',
    name: 'Storage Carton',
    description: 'Durable boxes for warehouse storage',
    category: 'Carton Boxes',
    keywords: ['storage', 'warehouse', 'durable', 'bulk']
  }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    setIsSearching(true);

    if (value.length > 1) {
      const searchTerm = value.toLowerCase();
      const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
      );
      setResults(searchResults);
    } else {
      setResults([]);
    }

    setIsSearching(false);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search our box solutions..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      {(results.length > 0 || isSearching) && isFocused && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          ) : (
            <ul className="max-h-64 overflow-y-auto">
              {results.map((result) => (
                <li key={result.id}>
                  <button
                    onClick={() => {
                      navigate(`/product/${result.id}`);
                      setQuery('');
                      setResults([]);
                      setIsFocused(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{result.name}</div>
                    <div className="text-sm text-gray-500">
                      in {result.category}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {result.description}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}