import { Clock, Target, Package, Users } from 'lucide-react';

export default function ProjectStats() {
  return (
    <section id="stats" className="relative bg-white py-24 overflow-hidden border-t border-gray-100">
      
      {/* METHODOLOGY: ABSOLUTE IMAGE OVERLAY
          Using a standard <img> tag ensures the map loads correctly on all browsers.
          Grayscale and low opacity keep it professional and subtle.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_blank_without_borders.svg" 
          alt="World map background for global saree box delivery statistics"
          className="w-full h-auto opacity-[0.05] grayscale scale-110 lg:scale-100"
          width={1200}
          height={600}
          loading="lazy"
        />
      </div>

      {/* STRICT VERTICAL ALIGNMENT:
          Using max-w-7xl ensures the section starts at the exact same vertical line 
          as your logo and hero text.
      */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Global Saree <span className="text-blue-600">Box</span> Impact in Numbers
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Delivering excellence at a competitive saree boxes wholesale price to clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* STAT ITEM 1 */}
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-5 bg-blue-50 rounded-2xl mb-5 group-hover:bg-blue-100 transition-colors">
              <Clock className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-5xl font-black text-gray-900 tracking-tighter">15+</div>
            <div className="mt-3 text-gray-700 font-bold uppercase text-[10px] tracking-[0.2em]">Industry Experience</div>
          </div>

          {/* STAT ITEM 2 */}
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-5 bg-blue-50 rounded-2xl mb-5 group-hover:bg-blue-100 transition-colors">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-5xl font-black text-gray-900 tracking-tighter">40+</div>
            <div className="mt-3 text-gray-700 font-bold uppercase text-[10px] tracking-[0.2em]">Successful Deliveries</div>
          </div>

          {/* STAT ITEM 3 */}
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-5 bg-blue-50 rounded-2xl mb-5 group-hover:bg-blue-100 transition-colors">
              <Package className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-5xl font-black text-gray-900 tracking-tighter">15+</div>
            <div className="mt-3 text-gray-700 font-bold uppercase text-[10px] tracking-[0.2em]">Box Varieties</div>
          </div>

          {/* STAT ITEM 4 */}
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-5 bg-blue-50 rounded-2xl mb-5 group-hover:bg-blue-100 transition-colors">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-5xl font-black text-gray-900 tracking-tighter">100+</div>
            <div className="mt-3 text-gray-700 font-bold uppercase text-[10px] tracking-[0.2em]">Satisfied Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}