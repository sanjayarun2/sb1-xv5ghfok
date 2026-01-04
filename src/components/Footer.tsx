import { MapPin, Phone, Mail } from 'lucide-react';

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
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Company Info */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Premium Box Manufacturing</h1>
          <h2 className="text-xl text-gray-700 mb-2">Fulfilling your packaging needs with excellence</h2>
          <p className="text-gray-600">Trusted to deliver premium packaging solutions since 2010</p>
        </div>

        {/* Colored Social Media Icons */}
        <div className="flex flex-wrap items-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain" />
            </a>
          ))}
        </div>

        {/* Addresses */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {addresses.map((location, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-gray-900">{location.title}</h3>
              <div className="flex items-start space-x-2 text-gray-600"><MapPin className="w-5 h-5 flex-shrink-0 mt-1" /><span>{location.address}</span></div>
              <div className="flex items-center space-x-2 text-gray-600"><Phone className="w-5 h-5" /><span>{location.phone}</span></div>
              <div className="flex items-center space-x-2 text-gray-600"><Mail className="w-5 h-5" /><span>{location.email}</span></div>
            </div>
          ))}
        </div>

        {/* Payment and Shipping */}
        <div className="grid lg:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Payment methods:</h4>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {paymentMethods.map((method) => (
                <div key={method.name} className="h-8 w-16 flex items-center justify-center">
                  <img src={method.logo} alt={method.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">We deliver with:</h4>
            {/* FIXED: Using a grid forces identical size and zoom level for all icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {deliveryPartners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="h-16 flex items-center justify-center bg-white border border-gray-100 rounded-lg p-3 shadow-sm"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Premium Box Manufacturing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}