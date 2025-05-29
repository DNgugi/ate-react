import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AboutSection: React.FC = () => {
  const benefits = [
    "Enhanced team communication and collaboration",
    "Increased employee engagement and satisfaction",
    "Improved problem-solving and creative thinking",
    "Stronger interpersonal relationships",
    "Greater team resilience and adaptability",
    "Clearer understanding of team roles and dynamics",
  ];

  return (
    <section className="section bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://ateamedventures.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-05-14-at-05.37.51-2.jpg"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100 rounded-full -z-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-100 rounded-full -z-10 translate-x-1/4 translate-y-1/4"></div>

            {/* Stats card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-6 z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-primary-600">
                      500+
                    </span>
                    <span className="text-sm text-gray-600">Happy Clients</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-primary-600">
                      12+
                    </span>
                    <span className="text-sm text-gray-600">
                      Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              We Build Stronger Teams Through Shared Experiences
            </h2>

            <p className="text-gray-700 mb-6">
              A Team Edventures was founded on a simple principle: teams that
              play together, perform better together. Since 2012, we've been
              helping organizations and schools transform their teams through
              engaging, purposeful experiences designed to foster collaboration,
              communication, and trust.
            </p>

            <p className="text-gray-700 mb-8">
              Our team of experienced facilitators and coaches bring diverse
              backgrounds in psychology, organizational development, outdoor
              leadership, and business management to create custom-tailored
              team-building solutions for your unique challenges and goals.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 ml-2">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
