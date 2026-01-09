import { PackageCheck, Zap, Globe, MessageCircle } from 'lucide-react';

export default function Hero() {
  // Use the standard wa.me format for global compatibility
  const whatsappURL = "https://wa.me/918904752338?text=Hi%2C%20I%20am%20interested%20in%20custom%20saree%20boxes.";

  return (
    <div className="relative bg-white overflow-hidden pt-4 lg:pt-10">
      {/* STRICT ALIGNMENT FIX: 
         max-w-7xl ensures content starts exactly at the navbar logo edge.
         mx-auto centers this container while px-4/6/8 handles responsive padding.
      */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-white">
          
          <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* LEFT SIDE: CONTENT SHIFTED TO START FROM THE CONTAINER EDGE */}
            <div className="text-left pt-6 lg:pt-0 w-full">
              {/* FIX: Replaced inner divs with spans for valid H1 semantic structure */}
              <h1 className="tracking-tight font-extrabold text-gray-900 leading-tight">
                <span className="block text-4xl sm:text-5xl md:text-6xl mb-2">
                  Saree Box Manufacturer
                </span>
                <span className="block text-blue-600 text-lg sm:text-2xl md:text-3xl font-semibold opacity-90">
                  Premium Saree Packaging Boxes Wholesale
                </span>
              </h1>

              {/* RESTORED FULL DESCRIPTION */}
              <div className="mt-8 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl text-justify [hyphens:auto]">
                <p>
                  Specializing in premium saree box manufacturing, we provide a diverse range 
                  of saree packing tray and saree packing box solutions designed for high-volume 
                  requirements. Beyond standard production, our expertise covers durable 
                  saree boxes for packing and customized saree box for gift purposes.
                </p>
                <p className="mt-4">
                  Whether you require a professional saree in box presentation or a large-scale 
                  saree with box bulk order, we are your trusted partner for high-quality 
                  saree boxes wholesale.
                </p>
              </div>

              <div className="mt-10 flex justify-start">
                <div className="rounded-md shadow">
                  <a href="#products" className="group flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all">
                    <PackageCheck className="mr-2 h-5 w-5" />
                    View Our Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: KEPT EXACTLY THE SAME AS PREVIOUS DESIGN */}
            <div className="mt-12 lg:mt-0 w-full flex justify-end">
              <div className="bg-gradient-to-br from-blue-50/50 to-white p-5 rounded-[2rem] border border-blue-100 shadow-2xl w-full max-w-sm flex flex-col items-center text-center relative overflow-hidden">
                
                <div className="relative w-full mb-2 group">
                  <div className="absolute top-0 left-0 bg-yellow-400 p-2 rounded-full shadow-md z-20">
                    <Zap className="text-blue-900 h-5 w-5 fill-current" />
                  </div>
                  
                  <div className="relative px-4">
                    <img 
                      src="/c5694789c65c7c22b7f6092f3a355c35-removebg-preview.png" 
                      alt="Premium Saree Box" 
                      className="w-full h-auto drop-shadow-xl" 
                    />
                    
                    <div className="absolute top-[35%] left-[48%] -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 border-dashed px-3 py-1 bg-white/70 backdrop-blur-[2px] rounded rotate-[-15deg]">
                       <p className="text-blue-600 font-black text-[10px] uppercase tracking-tighter">Your Logo Here</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-black text-gray-800 leading-tight mb-4">
                   Saree Box With <br/> 
                   <span className="text-blue-600">Your Company Logo</span>
                </h3>

                {/* 7 DAYS HIGHLIGHT - KEPT IN BLUE BLOCK AS REQUESTED */}
                <div className="mb-6 relative py-3 px-10 w-full">
                  <div className="absolute inset-0 bg-blue-600 transform -rotate-1 rounded-xl shadow-lg"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-white font-black text-5xl tracking-tighter leading-none uppercase">7 Days</span>
                    <span className="text-white text-xs font-black italic tracking-widest uppercase mt-1">
                      In Your Hand*
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                   <Globe className="text-blue-500 h-4 w-4" />
                   <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">Global Shipping Available</p>
                </div>

                <a 
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 font-black text-sm tracking-wide"
                >
                   <MessageCircle className="h-5 w-5 fill-current" />
                   GET CUSTOM QUOTE
                </a>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}