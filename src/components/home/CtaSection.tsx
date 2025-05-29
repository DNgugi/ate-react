import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-white/40 -top-20 -right-20 blur-3xl"></div>
        <div className="absolute h-96 w-96 rounded-full bg-white/40 bottom-10 left-10 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Whether you're looking to improve communication, boost morale, or develop leadership skills,
            we have the perfect program for your team. Get in touch today to start your journey towards a more
            cohesive and high-performing team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-white/80 text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">1,200+</p>
              <p className="text-white/80 text-sm">Team Events</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">12+</p>
              <p className="text-white/80 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-white/80 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;