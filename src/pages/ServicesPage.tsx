import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Compass,
  Briefcase,
  TrendingUp,
  Zap,
  MessageCircle,
  Calendar,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Caravan,
  Waves,
  TentTree,
  TreePine,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
}

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "Our Programs - A Team Edventures";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const services: Service[] = [
    {
      id: "school-camps",
      title: "School Camps",
      icon: <GraduationCap size={24} />,
      description:
        "Interactive workshops designed to build trust, improve communication, and enhance collaboration among team members. These structured experiences create opportunities for team members to connect in meaningful ways while developing critical teamwork skills.",
      features: [
        "Problem-solving challenges",
        "Communication exercises",
        "Trust-building activities",
        "Personality assessments and discussions",
        "Goal alignment workshops",
        "Conflict resolution training",
      ],
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "dofe",
      title: "Duke of Edinburgh Award Expeditions",
      icon: <Compass size={24} />,
      description:
        "Outdoor and indoor adventures that challenge teams to work together, solve problems, and build lasting bonds. These experiential activities take team members out of their comfort zones and into environments where collaboration becomes essential for success.",
      features: [
        "Guided wilderness expeditions",
        "Urban scavenger hunts",
        "Ropes courses and climbing challenges",
        "Team-based competitions",
        "Survival scenario simulations",
        "Guided reflection and learning transfer",
      ],
      image:
        "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "fec",
      title: "Family Edventure Camps",
      icon: <Caravan size={24} />,
      description:
        "Customized multi-day retreats that combine strategic planning with team-building activities for maximum impact. These immersive experiences provide the time and space needed for teams to disconnect from daily pressures and focus on strengthening relationships and alignment.",
      features: [
        "Luxury or rustic venue arrangements",
        "Facilitated strategic planning sessions",
        "Team building activities and challenges",
        "Wellness components (yoga, meditation)",
        "Catered meals and accommodations",
        "Follow-up implementation planning",
      ],
      image:
        "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "kayak",
      title: "Kayak Tours",
      icon: <Waves size={24} />,
      description:
        "Programs focused on developing leadership skills, emotional intelligence, and effective team management. These specialized experiences help leaders better understand their strengths, growth areas, and impact on team dynamics.",
      features: [
        "360° leadership assessments",
        "Emotional intelligence training",
        "Coaching and mentoring skills",
        "Decision-making frameworks",
        "Change management techniques",
        "One-on-one executive coaching",
      ],
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "sai-wan",
      title: "Sai Wan Overnight Camps",
      icon: <TentTree size={24} />,
      description:
        "Spark creativity and innovation through structured workshops that encourage out-of-the-box thinking and collaboration. These sessions create space for teams to break through conventional thinking and develop fresh approaches to challenges.",
      features: [
        "Design thinking methodology",
        "Creative problem-solving techniques",
        "Ideation and brainstorming facilitation",
        "Prototyping and concept testing",
        "Innovation culture development",
        "Cross-functional collaboration frameworks",
      ],
      image:
        "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cheung-chau",
      title: "Cheung Chau Day Trips",
      icon: <TreePine size={24} />,
      description:
        "Improve team communication through specialized training that addresses barriers and enhances understanding. These programs equip team members with the skills to express ideas clearly, listen effectively, and navigate difficult conversations.",
      features: [
        "Active listening techniques",
        "Constructive feedback methods",
        "Conflict resolution strategies",
        "Cross-cultural communication",
        "Meeting facilitation skills",
        "Presentation and persuasion training",
      ],
      image:
        "https://images.pexels.com/photos/7648045/pexels-photo-7648045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "certification",
      title: "Certification Programs",
      icon: <Award size={24} />,
      description:
        "Design and implementation of recognition systems that boost morale, increase engagement, and celebrate achievements. These programs create structured approaches to acknowledging contributions and reinforcing desired behaviors and outcomes.",
      features: [
        "Recognition program design",
        "Peer-to-peer recognition systems",
        "Achievement celebration events",
        "Reward strategy development",
        "Implementation and training",
        "Program effectiveness measurement",
      ],
      image:
        "https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "corporate",
      title: "Corporate Team Building",
      icon: <Briefcase size={24} />,
      description:
        "Remote-friendly activities and workshops designed specifically for distributed teams and remote workers. These experiences create connection and engagement regardless of physical location, helping remote teams develop the cohesion needed for high performance.",
      features: [
        "Virtual escape rooms and challenges",
        "Remote team building games",
        "Online collaboration workshops",
        "Digital communication enhancement",
        "Remote team culture development",
        "Time zone-friendly scheduling",
      ],
      image:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
              Our Programs
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Highly customizable and comprehensive outdoor education programs
              tailored to match your unique challenges, goals, and needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Transformative Outdoor Experiences
            </h2>
            <p className="text-gray-700">
              Each of our programs is designed to address your specific needs
              while delivering measurable results and creating lasting impact.
              Click on a program to learn more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 h-full flex flex-col cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {service.description.split(".")[0]}.
                </p>
                <button
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center mt-auto"
                  onClick={() => setSelectedService(service)}
                >
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Service Detail Modal */}
          {selectedService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Close details"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {selectedService.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {selectedService.description}
                  </p>

                  <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link to="/contact" className="btn-primary">
                      Request This Service
                    </Link>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="btn-secondary"
                    >
                      View Other Services
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                How We Create Impactful Experiences
              </h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Understand</h3>
                    <p className="text-gray-700">
                      We begin by deeply understanding your team's dynamics,
                      challenges, and goals through comprehensive interviews and
                      assessments.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Design</h3>
                    <p className="text-gray-700">
                      Our experts craft a customized program that addresses your
                      specific needs, incorporating the perfect blend of
                      activities and facilitation.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Deliver</h3>
                    <p className="text-gray-700">
                      Experienced facilitators guide your team through the
                      program, creating a safe, engaging environment for
                      meaningful connection and growth.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reflect</h3>
                    <p className="text-gray-700">
                      Guided reflection helps participants extract meaningful
                      insights and translate experiences into actionable
                      workplace applications.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sustain</h3>
                    <p className="text-gray-700">
                      We provide follow-up resources, check-ins, and
                      measurements to ensure lasting impact and continued
                      progress toward your goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://ateamedventures.com/wp-content/uploads/2024/08/IMG_1239-scaled.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />

              {/* Stats card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-6 hidden md:block">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="block text-2xl font-bold text-primary-600">
                      98%
                    </span>
                    <span className="text-sm text-gray-600">
                      Client Satisfaction
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-primary-600">
                      87%
                    </span>
                    <span className="text-sm text-gray-600">
                      Improved Team Performance
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-primary-50 rounded-lg p-8 md:p-12 relative">
              <svg
                className="w-16 h-16 text-primary-200 absolute top-4 left-4 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="relative z-10">
                <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                  "I was going to write an email to thank you and your whole
                  team. The girls have had an absolute blast on both their
                  camps. They have not stopped talking about all the adventures
                  and really had such a good time. I am so appreciative of your
                  team's skill, effort and care looking after them and teaching
                  them new skills. The photos were all so great, I want to go on
                  one of the camps!! The kids will definitely be back. It has
                  been their favorite of all the outdoor adventure camps they
                  have ever done whilst in HK!"
                </p>

                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Corina W.</p>
                    <p className="text-primary-600">Parent, Family Edventure Camp</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute h-96 w-96 rounded-full bg-white/40 -top-20 -right-20 blur-3xl"></div>
          <div className="absolute h-96 w-96 rounded-full bg-white/40 bottom-10 left-10 blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Team's Performance?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Contact us today to discuss your team's needs and discover how
                our customized services can help you achieve your goals.
              </p>
              <Link
                to="/contact"
                className="btn-primary bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Common Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    How long are your typical programs?
                  </h4>
                  <p className="text-white/80">
                    Our programs range from half-day workshops to multi-day
                    retreats, depending on your goals and availability.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    How many people can participate?
                  </h4>
                  <p className="text-white/80">
                    We work with teams of all sizes, from small departments of
                    5-10 people to company-wide events of 100+ participants.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    How do you measure results?
                  </h4>
                  <p className="text-white/80">
                    We use pre and post-program assessments, participant
                    feedback, and follow-up check-ins to measure impact and ROI.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
