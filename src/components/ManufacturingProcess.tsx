import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const processes = [
  {
    title: "Pre Press",
    description: "Advanced pre-press setup with state-of-the-art equipment for precise printing preparation",
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "pre-press"
  },
  {
    title: "Binding Division",
    description: "Modern binding facilities equipped with automated machinery for high-quality finishing",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "binding-division"
  },
  {
    title: "Packaging Finishing",
    description: "Complete packaging solutions with premium finishing for the perfect end product",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600",
    slug: "packaging-finishing"
  }
];

export default function ManufacturingProcess() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
          Specialized Saree <span className="text-blue-500">Storage Bags</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => (
            <Link 
              key={index}
              to={`/process/${process.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
                <img
                  src={process.image}
                  alt={`${process.title} manufacturing process - Premium Pack Sivakasi`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{process.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}