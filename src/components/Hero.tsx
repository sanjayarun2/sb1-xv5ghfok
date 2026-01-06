import { PackageCheck, Palette, Printer, Truck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden pt-2 lg:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-28">
          
          <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* LEFT SIDE: CONTENT - Fixed Mobile Symmetry */}
            <div className="text-center lg:text-left pt-6 lg:pt-0 w-full">
              <h1 className="tracking-tight font-extrabold text-gray-900 leading-tight">
                {/* Adjusted mobile size for better line balancing */}
                <div className="text-[1.75rem] leading-8 sm:text-5xl md:text-6xl mb-2 px-2 lg:px-0">
                  Saree Box Manufacturer
                </div>
                <div className="text-blue-600 text-lg sm:text-2xl md:text-3xl font-semibold opacity-90 px-4 lg:px-0">
                  Premium Saree Packaging Boxes Wholesale
                </div>
              </h1>

              {/* Symmetric padding for description on mobile */}
              <div className="mt-8 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
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

              {/* Action Button - Balanced on Mobile */}
              <div className="mt-10 flex justify-center lg:justify-start px-6 sm:px-0">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a href="#products" className="group w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all">
                    <PackageCheck className="mr-2 h-5 w-5" />
                    View Our Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE HOOK CARD - Professional Layout */}
            <div className="mt-14 lg:mt-0 w-full flex justify-center lg:justify-end px-4 sm:px-0">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-100 shadow-xl w-full max-w-md transform transition hover:scale-[101%]">
                
                {/* Header: Centered on mobile for aesthetics */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 text-center sm:text-left">
                  <div className="bg-yellow-400 p-2.5 rounded-full shadow-sm shrink-0">
                    <Zap className="text-blue-900 h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 leading-none">
                      Doorstep Delivery
                    </h3>
                    <p className="text-blue-600 font-bold text-lg mt-1 underline decoration-2 underline-offset-4">In Just 7 Days</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                      <Palette className="text-blue-600 h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                         <p className="font-bold text-gray-900 text-base">1. Instant Design</p>
                         <span className="bg-blue-600 text-[9px] text-white px-2 py-0.5 rounded-full uppercase font-bold tracking-tight">Your Logo</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium leading-snug">Get your brand printed on premium boxes</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                      <Printer className="text-blue-600 h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-base mb-1">2. Rapid Printing</p>
                      <p className="text-sm text-gray-600 font-medium leading-snug">Bulk production with zero delay</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                      <Truck className="text-blue-600 h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-base mb-1">3. Express Shipping</p>
                      <p className="text-sm text-gray-600 font-medium leading-snug">Direct to your shop or warehouse</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 py-3.5 bg-gray-900 rounded-2xl text-center shadow-lg mx-2 sm:mx-0">
                   <p className="text-white font-black text-xs tracking-widest uppercase">
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