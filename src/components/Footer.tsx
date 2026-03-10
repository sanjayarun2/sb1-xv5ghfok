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
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Sections Grid */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Premium Box Manufacturing</h3>
            <p className="text-sm text-gray-600 mb-2">Fulfilling your packaging needs with excellence</p>
            <p className="text-sm text-gray-600 mb-6">Trusted to deliver premium packaging solutions since 2010</p>
            
            <div className="flex flex-wrap items-center gap-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src={social.icon} alt={`Follow us on ${social.name}`} className="w-5 h-5 object-contain" width={20} height={20} loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Packaging Solutions */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Packaging Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/product/plain-saree-box" className="hover:text-blue-600 transition-colors">Plain Saree Box</Link></li>
              <li><Link to="/product/printed-saree-box" className="hover:text-blue-600 transition-colors">Printed Saree Box</Link></li>
              <li><Link to="/product/customized-saree-box" className="hover:text-blue-600 transition-colors">Customized Saree Box</Link></li>
              <li><Link to="/product/luxury-saree-paper-box" className="hover:text-blue-600 transition-colors">Luxury Saree Paper Box</Link></li>
              <li><Link to="/product/custom-designed-saree-box" className="hover:text-blue-600 transition-colors">Custom designed saree box</Link></li>
              <li><Link to="/product/saree-storage-cartons" className="hover:text-blue-600 transition-colors">Saree Storage Cartons</Link></li>
              <li className="pt-2 border-t border-gray-100 mt-2"><Link to="/gallery" className="hover:text-blue-600 transition-colors font-medium">Saree Box Gallery</Link></li>
              <li><Link to="/case-study" className="hover:text-blue-600 transition-colors font-medium">Case Studies</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-1">
             <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Contact Details</h3>
             <div className="space-y-6">
                {addresses.map((location, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-bold text-gray-900 text-sm uppercase">{location.title}</p>
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                      <span>{location.address}</span>
                    </div>
                    {/* CLICK TO CALL LINK */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      <a href={`tel:${location.phone.replace(/\s+/g, '')}`}>{location.phone}</a>
                    </div>
                    {/* CLICK TO EMAIL LINK */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      <a href={`mailto:${location.email}`} className="truncate">{location.email}</a>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          {/* Column 4: Service Areas */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/saree-box-manufacturer-in-surat" className="hover:text-blue-600 transition-colors">Surat saree box supplier</Link></li>
              <li><Link to="/saree-box-manufacturer-in-chennai" className="hover:text-blue-600 transition-colors">Chennai &amp; Kancheepuram</Link></li>
              <li><Link to="/saree-box-manufacturer-in-mumbai" className="hover:text-blue-600 transition-colors">Mumbai &amp; export hubs</Link></li>
              <li><Link to="/saree-box-manufacturer-in-bangalore" className="hover:text-blue-600 transition-colors">Bangalore boutiques</Link></li>
              <li><Link to="/saree-box-manufacturer-in-ahmedabad" className="hover:text-blue-600 transition-colors">Ahmedabad wholesalers</Link></li>
              <li><Link to="/saree-box-manufacturer-in-hyderabad" className="hover:text-blue-600 transition-colors">Hyderabad saree markets</Link></li>
              <li><Link to="/saree-box-manufacturer-in-kolkata" className="hover:text-blue-600 transition-colors">Kolkata saree hubs</Link></li>
              <li><Link to="/saree-box-manufacturer-in-delhi" className="hover:text-blue-600 transition-colors">Delhi &amp; NCR</Link></li>
              <li><Link to="/export-saree-boxes" className="hover:text-blue-600 transition-colors">Export saree boxes</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment & Shipping Section */}
        <div className="grid lg:grid-cols-2 gap-8 border-t border-gray-200 pt-10">
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">Payment methods:</h4>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {paymentMethods.map((method) => (
                <div key={method.name} className="h-8 w-16 flex items-center justify-center">
                  <img src={method.logo} alt={method.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">We deliver with:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {deliveryPartners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="h-16 flex items-center justify-center bg-white border border-gray-100 rounded-lg p-3 shadow-sm"
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} delivery partner`} 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy"
                    width={120}
                    height={48}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-medium">&copy; {new Date().getFullYear()} Premium Box Manufacturing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}