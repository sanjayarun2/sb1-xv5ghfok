import { PackageCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              
              {/* HEADING SECTION - CLEAN & BALANCED */}
              <h1 className="tracking-tight font-extrabold text-gray-900">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2">
                  Saree Box Manufacturer
                </div>
                <div className="text-blue-600 text-xl sm:text-2xl md:text-3xl font-semibold opacity-90">
                  Premium Saree Packaging Boxes Wholesale
                </div>
              </h1>

              {/* MEANINGFUL DESCRIPTION - UNIFORM TEXT STYLE */}
              <div className="mt-8 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                <p>
                  Specializing in premium saree box manufacturing, we provide a diverse range 
                  of saree packing tray and saree packing box solutions designed for high-volume 
                  requirements. Beyond standard production, our expertise covers durable 
                  saree boxes for packing and customized saree box for gift purposes.
                </p>
                <p className="mt-4">
                  Whether you require a professional saree in box presentation or a large-scale 
                  saree with box bulk order, we are your trusted partner for high-quality 
                  saree boxes wholesale near me, serving clients across Tamil Nadu and India.
                </p>
              </div>

              {/* ACTION BUTTON */}
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#products" className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all">
                    <PackageCheck className="mr-2 h-5 w-5" />
                    View Our Solutions
                  </a>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}