import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Users, Award, TrendingUp, Heart } from "lucide-react";

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "About Us - A Team Edventures";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              About A Team Edventures
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              We build stronger teams through innovative, engaging, and
              impactful team-building experiences tailored to your
              organization's unique needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Delivering exceptional programs in the outdoors
              </h2>

              <p className="text-gray-700 mb-6">
                A Team Edventures was founded in 2012 with a mission to
                transform how outdoor education programs are delivered to
                maximise learning and impact on participants.
              </p>

              <p className="text-gray-700 mb-6">
                Drawing on our diverse backgrounds and shared passion for
                experiential learning, we developed a unique approach that
                combines adventure, strategic challenges, and guided reflection
                to create truly transformative team experiences.
              </p>

              <p className="text-gray-700">
                Twelve years later, we've helped over 500 organizations across
                industries experience and learn in the outdoors, building
                stronger, more cohesive teams. From high schools to universities
                and parents, our clients consistently report enjoying our
                programs and seeing improvements in their participants following
                our programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://ateamedventures.com/wp-content/uploads/2024/08/WhatsApp-Image-2023-05-25-at-9.53.58-PM.jpg"
                  alt="A Team Edventures team"
                  className="w-full h-auto"
                />
              </div>

              {/* Timeline indicator */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-primary-600">
                      2012
                    </span>
                    <span className="text-sm text-gray-600">Founded</span>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-primary-600">
                      13+
                    </span>
                    <span className="text-sm text-gray-600">
                      Years Experience
                    </span>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-primary-600">
                      500+
                    </span>
                    <span className="text-sm text-gray-600">Clients</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Mission & Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              What Drives Us
            </h2>
            <p className="text-gray-700">
              Our mission and values guide everything we do, from program design
              to client interactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To transform organizations by creating powerful team experiences
                that foster collaboration, trust, and growth, enabling teams to
                reach their full potential and achieve exceptional results.
              </p>
              <p className="text-gray-700">
                We believe that strong teams are the foundation of successful
                organizations, and our mission is to help build those
                foundations through expertly crafted experiences that challenge,
                inspire, and unite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-lg">Excellence</h4>
                    <p className="text-gray-700">
                      We are committed to delivering exceptional quality in
                      every aspect of our work.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-lg">Innovation</h4>
                    <p className="text-gray-700">
                      We continuously explore new approaches and ideas to create
                      meaningful, impactful experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-lg">Integrity</h4>
                    <p className="text-gray-700">
                      We operate with honesty, transparency, and ethical conduct
                      in all that we do.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-lg">Impact</h4>
                    <p className="text-gray-700">
                      We measure our success by the positive change we create
                      for our clients and their teams.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Meet The Experts
            </h2>
            <p className="text-gray-700">
              Our diverse team brings together expertise in psychology,
              organizational development, leadership coaching, and adventure
              facilitation to create truly exceptional team experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Anthony Somerset",
                title: "Director",
                bio: "With 20+ years in organizational psychology, Anthony leads our vision to transform teams through innovative experiences.",
                image:
                  "https://ateamedventures.com/wp-content/uploads/2024/08/thumbnail_1D475876-E38E-4CC0-8830-56F17CDDE8C0-1.jpg",
              },
              {
                name: "Wanda Huang",
                title: "Programs Director - China",
                bio: "Wanda designs our signature programs, blending her background in adventure education and curriculum design.",
                image:
                  "https://ateamedventures.com/wp-content/uploads/2024/08/wanda-1.jpg",
              },
              {
                name: "Zoe Lim",
                title: "Programs Director - Hong Kong",
                bio: "A master facilitator with expertise in conflict resolution and team dynamics, Zoe creates transformative experiences.",
                image:
                  "https://ateamedventures.com/wp-content/uploads/2024/08/adc7cd77-bc07-409f-ab54-726e5aea66b7-1.jpg",
              },
              {
                name: "Aidan McLaughlin",
                title: "Operations and Safety Manager",
                bio: "Aidan bridges client needs with our program capabilities, ensuring each program is delivered safely and effectively.",
                image:
                  "https://ateamedventures.com/wp-content/uploads/2024/08/IMG_20200227_184620_1-1-scaled.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm">{member.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">
              Get to Know Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              The A Team Edventures Difference
            </h2>
            <p className="text-gray-700">
              What sets our team-building experiences apart from traditional
              approaches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={32} />,
                title: "Research-Based Methodology",
                description:
                  "Our programs are grounded in organizational psychology research, ensuring activities translate to real workplace improvements.",
              },
              {
                icon: <Users size={32} />,
                title: "Customized Experiences",
                description:
                  "We don't believe in one-size-fits-all. Every program is tailored to your team's specific challenges, goals, and dynamics.",
              },
              {
                icon: <Heart size={32} />,
                title: "Holistic Approach",
                description:
                  "We balance fun with purpose, ensuring participants enjoy themselves while developing meaningful skills and connections.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-8 h-full"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 relative overflow-hidden">
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
              Let's discuss how we can create a customized team-building
              experience that addresses your organization's unique challenges
              and goals.
            </p>
            <Link
              to="https://calendly.com/ateamedventures-info/30min"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
              target="_blank"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
