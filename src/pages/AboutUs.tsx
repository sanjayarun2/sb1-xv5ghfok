import { MapPin, Phone, Mail, Award, Users, Factory, Truck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import StoreLocator from '../components/MapLocator';

export default function AboutUs() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Leading manufacturer of premium Saree boxes based in Sivakasi. Pioneer in innovative box designs with nationwide distribution."
        keywords="saree box manufacturer, Sivakasi, box manufacturing, premium packaging"
      />
      <div className="pt-16 bg-white">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneer in premium Saree box manufacturing, delivering excellence since 2010
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 in Sivakasi, Tamil Nadu, we've grown from a small workshop to one of India's leading manufacturers of premium packaging solutions. Our specialization in Saree boxes has made us the preferred choice for textile retailers and manufacturers across the country.
              </p>
              <p className="text-gray-600">
                With state-of-the-art manufacturing facilities and a team of skilled craftsmen, we combine traditional expertise with modern technology to create packaging solutions that stand out.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Our Sivakasi manufacturing factory facility"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1200}
                height={600}
                decoding="async"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Award className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">Premium materials and rigorous quality control in every product</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled craftsmen with years of industry experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Factory className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facility</h3>
              <p className="text-gray-600">State-of-the-art manufacturing unit in Sivakasi</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Truck className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pan-India Reach</h3>
              <p className="text-gray-600">Distribution network across major cities</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Locations</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Main Factory</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">158 Tamil Nagar, Sivakasi - 626123</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">+91 8526939639</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">factory@premiumbox.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Distribution Center</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">183 Edanganasalai, Murugan Nagar - 2nd street, Elampillai - 637502</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">+91 8904752338</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">distribution@premiumbox.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
               <StoreLocator />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}