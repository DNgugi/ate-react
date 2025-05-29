import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-accent-600 to-accent-400 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-white/30 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute h-96 w-96 rounded-full bg-white/30 bottom-10 right-10 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              Transformative outdoor experiences
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Outdoor Education Experiences
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Expertly crafted, highly customizable experiences for families,
              schools and corporate organisations that foster collaboration,
              boost morale, and drive personal development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/services"
                className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/contact"
                className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://ateamedventures.com/wp-content/uploads/2024/08/IMG_2448-1-scaled.jpg"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-500 text-white mb-2">
                  Featured Program
                </span>
                <h3 className="text-xl text-white font-bold mb-1">
                  School Programs
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  Our curriculum matching, highly experienced instructors and
                  beautiful locations across Hong Kong and China are everything
                  you need for your upcoming school camp!
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-white text-sm font-medium hover:underline"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Floating stats card */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
