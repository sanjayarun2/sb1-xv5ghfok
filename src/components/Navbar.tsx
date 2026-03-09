import React, { useState, useEffect } from 'react';
import { Package, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Spacer div to prevent content from going under navbar */}
      <div className="h-16"></div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group">
                <Package className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-110" />
                <span className="ml-2 text-xl font-bold text-gray-900">PremiumPack</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {/* Search Bar - Desktop */}
              <div className="w-64 lg:w-96">
                <SearchBar />
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {isHomePage ? (
                  <>
                    <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
                  </>
                ) : (
                  <>
                    <Link to="/#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
                    <Link to="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</Link>
                  </>
                )}
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
                <a 
                  href="mailto:contact@premiumbox.com" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-white border-b border-gray-200`}
        >
          <div className="px-4 pt-2 pb-3 space-y-3">
            <div className="mb-4">
              <SearchBar />
            </div>
            {isHomePage ? (
              <>
                <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Products</a>
                <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Testimonials</a>
              </>
            ) : (
              <>
                <Link to="/#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Products</Link>
                <Link to="/#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Testimonials</Link>
              </>
            )}
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">About Us</Link>
            <a 
              href="mailto:contact@premiumbox.com" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}