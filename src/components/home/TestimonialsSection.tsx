import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "HR Director",
      company: "TechGrowth Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The team-building retreat organized by A Team Edventures transformed our department. We saw immediate improvements in communication and collaboration that have lasted for months. The facilitators were exceptional at creating a safe space for authentic connection.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As a fast-growing startup, we needed to strengthen our team culture quickly. The custom program designed by A Team Edventures was exactly what we needed. Their approach was strategic, fun, and most importantly, effective. Our team is now more cohesive than ever.",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica Martinez",
      position: "Team Lead",
      company: "Global Enterprises",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "When our team went remote, we struggled with connection and collaboration. The virtual team building sessions provided by A Team Edventures helped bridge that gap. They made virtual activities feel meaningful and engaging, not forced or awkward.",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gradient-to-r from-primary-50 to-secondary-50" id="testimonials">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the teams and organizations 
            that have experienced the transformative power of our programs.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.9,
                  display: index === activeIndex ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
                    />
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-6 text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-primary-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md text-primary-600 hover:text-primary-700 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                      index === activeIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md text-primary-600 hover:text-primary-700 focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;