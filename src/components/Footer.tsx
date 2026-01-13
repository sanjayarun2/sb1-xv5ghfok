import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg' },
  { name: 'Pinterest', url: 'https://pinterest.com', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/pinterest.svg' },
  { name: 'TikTok', url: 'https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg' }
];

const addresses = [
  {
    title: "Main Branch",
    address: "183 Edanganasalai, Murugan Nagar - 2nd street, Elampillai - 637502",
    phone: "+91 8904752338",
    email: "branch@premiumpacking.in"
  },
  {
    title: "Production Plant",
    address: "158 Tamil Nagar, Sivakasi - 626123",
    phone: "+91 8526939639",
    email: "Factory@premiumpacking.in"
  }
];

const paymentMethods = [
  { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
  { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
  { name: 'American Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg' },
  { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
  { name: 'Apple Pay', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg' }
];

const deliveryPartners = [
  { name: 'FedEx', logo: '/Fedex.webp' },
  { name: 'India Post', logo: '/indianpost.webp' },
  { name: 'Delhivery', logo: '/Delhivery.webp' },
  { name: 'Shipglobal', logo: '/Shipglobal.webp' },
  { name: 'Shiprocket', logo: '/shiprocket.webp' },
  { name: 'Bluedart', logo: '/Bluedart.webp' }
];

export default function Footer() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://premiumpacking.in/#organization",
        "name": "Premium Box Manufacturing",
        "url": "https://premiumpacking.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://premiumpacking.in/logo.png",
          "contentUrl": "https://premiumpacking.in/logo.png",
          "width": "512",
          "height": "512",
          "caption": "Premium Box Manufacturing"
        },
        "sameAs": socialLinks.map(link => link.url)
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://premiumpacking.in/#localbusiness",
        "name": "Premium Box Manufacturing",
        "image": "https://premiumpacking.in/logo.png",
        "telephone": "+91 8904752338",
        "url": "https://premiumpacking.in",
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
      }
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Info & Quick Links Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
          <div className="lg:col-span-1">
            <h1 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Premium Box Manufacturing</h1>
            <p className="text-gray-700 font-medium mb-1">Fulfilling your packaging needs with excellence</p>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">Trusted to deliver premium packaging solutions since 2010</p>
            
            {/* Colored Social Media Icons */}
            <div className="flex flex-wrap items-center gap-5">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Packaging Solutions</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/product/1" className="hover:text-blue-600 transition-colors">Plain Saree Box</Link></li>
              <li><Link to="/product/2" className="hover:text-blue-600 transition-colors">Printed Saree Box</Link></li>
              <li><Link to="/product/3" className="hover:text-blue-600 transition-colors">Customized Saree Box</Link></li>
              <li><Link to="/product/4" className="hover:text-blue-600 transition-colors">Luxury Saree Paper Box</Link></li>
              <li><Link to="/product/5" className="hover:text-blue-600 transition-colors">Custom designed saree box</Link></li>
              <li><Link to="/product/6" className="hover:text-blue-600 transition-colors">Saree Storage Cartons</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
             <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Contact Details</h3>
             <div className="space-y-8">
                {addresses.map((location, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-bold text-gray-900 text-sm uppercase tracking-tight">{location.title}</p>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-gray-400 mt-0.5" />
                        <span className="leading-relaxed">{location.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
                        <a href={`tel:${location.phone}`} className="hover:text-blue-600">{location.phone}</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
                        <a href={`mailto:${location.email}`} className="hover:text-blue-600 truncate">{location.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Payment and Shipping */}
        <div className="grid lg:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
          <div>
            <h4 className="text-xs font-bold text-gray-900 mb-8 uppercase tracking-widest">Payment methods</h4>
            <div className="flex flex-wrap items-center gap-8">
              {paymentMethods.map((method) => (
                <div key={method.name} className="h-6 flex items-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                  <img src={method.logo} alt={method.name} className="h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 mb-8 uppercase tracking-widest">We deliver with</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {deliveryPartners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="h-14 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-md p-3 transition-colors hover:bg-white hover:shadow-sm"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium">&copy; {new Date().getFullYear()} Premium Box Manufacturing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}