import { PackageCheck, Palette, Printer, Truck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    /* FIXED: Reduced top padding for better header proximity */
    <div className="relative bg-white overflow-hidden pt-2 lg:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-28">
          
          {/* Main container: stack on mobile, grid on desktop */}
          <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* LEFT SIDE: CONTENT - Fixed mobile scaling/alignment */}
            <div className="text-center lg:text-left pt-4 lg:pt-0">
              <h1 className="tracking-tight font-extrabold text-gray-900 leading-tight">
                {/* FIXED: text-3xl on mobile prevents awkward wrapping shown in screenshot */}
                <div className="text-3xl sm:text-5xl md:text-6xl mb-2 px-2 lg:px-0">
                  Saree Box Manufacturer
                </div>
                {/* FIXED: text-lg on mobile for better visual hierarchy */}
                <div className="text-blue-600 text-lg sm:text-2xl md:text-3xl font-semibold opacity-90 px-4 lg:px-0">
                  Premium Saree Packaging Boxes Wholesale
                </div>
              </h1>

              {/* FIXED: Reduced font size on mobile for better readability */}
              <div className="mt-6 text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
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

              <div className="mt-10 flex justify-center lg:justify-start px-6 lg:px-0">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a href="#products" className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all">
                    <PackageCheck className="mr-2 h-5 w-5" />
                    View Our Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE HOOK CARD - Kept exactly as requested */}
            <div className="mt-14 lg:mt-0 w-full flex justify-center lg:justify-end px-4">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-100 shadow-xl w-full max-w-md transform transition hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-yellow-400 p-2 rounded-full animate-pulse">
                    <Zap className="text-blue-900 h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                      Doorstep Delivery <br/>
                      <span className="text-blue-600 underline">In Just 7 Days</span>
                    </h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                      <Palette className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                         <p className="font-bold text-gray-900 text-sm sm:text-base">1. Instant Design</p>
                         <span className="bg-blue-600 text-[9px] text-white px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Your Logo</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">Get your brand printed on premium boxes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                      <Printer className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">2. Rapid Printing</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">Bulk production with zero delay</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                      <Truck className="text-blue-600 h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">3. Express Shipping</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">Direct to your shop or warehouse</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 py-3 bg-blue-600 rounded-xl text-center">
                   <p className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase">
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