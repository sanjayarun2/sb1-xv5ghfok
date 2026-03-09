import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const scrollLeft = () => {
    const slider = document.getElementById('testimonial-slider');
    if (slider) slider.scrollLeft -= slider.offsetWidth;
  };

  const scrollRight = () => {
    const slider = document.getElementById('testimonial-slider');
    if (slider) slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <div className="relative">
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <div 
        id="testimonial-slider" 
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide gap-6 py-4 px-8"
      >
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.avatar}
                alt={testimonial.name}
                loading="lazy"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600">"{testimonial.content}"</p>
          </div>
        ))}
      </div>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}