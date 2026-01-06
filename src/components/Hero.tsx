import { PackageCheck, Palette, Printer, Truck, Clock, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden pt-4 lg:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:pb-28">
          
          {/* FIXED: Changed flex-col-reverse to flex-col to show text first on mobile */}
          <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* LEFT SIDE: CONTENT */}
            <div className="mt-10 lg:mt-0 text-center lg:text-left">
              <h1 className="tracking-tight font-extrabold text-gray-900">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2">
                  Saree Box Manufacturer
                </div>
                <div className="text-blue-600 text-xl sm:text-2xl md:text-3xl font-semibold opacity-90">
                  Premium Saree Packaging Boxes Wholesale
                </div>
              </h1>

              <div className="mt-8 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  Specializing in premium saree box manufacturing, we provide a diverse range 
                  of saree packing tray and saree packing box solutions designed for high-volume 
                  requirements. Beyond standard production, our expertise covers durable 
                  saree boxes for packing and customized saree box for gift purposes.
                </p>
                <p className="mt-4">
                  Whether you require a professional saree in box presentation or a large-scale 
                  saree with box bulk order, we are your trusted partner for high-quality 
                  saree boxes wholesale near me.
                </p>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#products" className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all">
                    <PackageCheck className="mr-2 h-5 w-5" />
                    View Our Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE HOOK CARD */}
            <div className="mt-12 lg:mt-0 w-full flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-100 shadow-xl w-full max-w-md transform transition hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-yellow-400 p-2 rounded-full animate-pulse">
                    <Zap className="text-blue-900 h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">
                      Doorstep Delivery <br/>
                      <span className="text-blue-600 underline">In Just 7 Days</span>
                    </h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Palette className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                         <p className="font-bold text-gray-900">1. Instant Design</p>
                         <span className="bg-blue-600 text-[10px] text-white px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Your Logo</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Get your brand printed on premium boxes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Printer className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">2. Rapid Printing</p>
                      <p className="text-sm text-gray-600 font-medium">Bulk production with zero delay</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Truck className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">3. Express Shipping</p>
                      <p className="text-sm text-gray-600 font-medium">Direct to your shop or warehouse</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 py-3 bg-blue-600 rounded-xl text-center">
                   <p className="text-white font-bold text-sm tracking-widest uppercase">
                     Fastest in the Industry
                   </p>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}