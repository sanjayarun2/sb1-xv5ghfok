import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/youtube.svg' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg' },
  { name: 'Pinterest', url: 'https://pinterest.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/pinterest.svg' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tiktok.svg' }
];

const addresses = [
  {
    title: "Main Branch",
    address: "183 Edanganasalai, Murugan Nagar - 2nd street, Elampillai - 637502",
    phone: "+91 8904752338",
    email: "branch@premiumbox.com"
  },
  {
    title: "Production Plant",
    address: "158 Tamil Nagar, Sivakasi - 626123",
    phone: "+91 8526939639",
    email: "Factory@premiumbox.com"
  }
];

const paymentMethods = [
  { 
    name: 'Visa', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
    width: 65,
    height: 21
  },
  { 
    name: 'Mastercard', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    width: 50,
    height: 30
  },
  { 
    name: 'American Express', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg',
    width: 50,
    height: 30
  },
  { 
    name: 'PayPal', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
    width: 80,
    height: 20
  },
  { 
    name: 'Apple Pay', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg',
    width: 60,
    height: 25
  }
];

const deliveryPartners = [
  { 
    name: 'India Post', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/India_Post_Logo.svg',
    width: 100,
    height: 40
  },
  { 
    name: 'DHL', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/DHL_Logo.svg',
    width: 80,
    height: 30
  },
  { 
    name: 'FedEx', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/FedEx_Express.svg',
    width: 80,
    height: 30
  }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Info */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Premium Box Manufacturing
          </h1>
          <h2 className="text-xl text-gray-700 mb-2">
            Fulfilling your packaging needs with excellence
          </h2>
          <p className="text-gray-600">
            Trusted to deliver premium packaging solutions since 2010
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5"
                style={{ filter: 'invert(0.5)' }}
              />
            </a>
          ))}
        </div>

        {/* Addresses */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {addresses.map((location, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-gray-900">{location.title}</h3>
              <div className="flex items-start space-x-2 text-gray-600">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{location.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>{location.email}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment and Shipping */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Payment methods we accept:</h4>
            <div className="flex flex-wrap items-center gap-6">
              {paymentMethods.map((method) => (
                <div 
                  key={method.name} 
                  className="relative"
                  style={{ 
                    width: method.width, 
                    height: method.height 
                  }}
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">We deliver with:</h4>
            <div className="flex flex-wrap items-center gap-6">
              {deliveryPartners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="relative"
                  style={{ 
                    width: partner.width, 
                    height: partner.height 
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Premium Box Manufacturing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}