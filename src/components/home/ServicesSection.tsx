import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TreePine,
  Award,
  Compass,
  Briefcase,
  GraduationCap,
  TentTree,
  Caravan,
  Waves,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center text-accent-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        to="/services"
        className="text-accent-600 font-medium hover:text-accent-700 inline-flex items-center mt-auto"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap size={24} />,
      title: "School Programs & Camps",
      description:
        "Interactive workshops designed to build trust, improve communication, and enhance collaboration among team members.",
    },
    {
      icon: <Compass size={24} />,
      title: "Duke of Edinburgh Award Expeditions",
      description:
        "Customized multi-day retreats that combine strategic planning with team-building activities for maximum impact.",
    },
    {
      icon: <Caravan size={24} />,
      title: "Family Edventure Camps",
      description:
        "Outdoor and indoor adventures that challenge teams to work together, solve problems, and build lasting bonds.",
    },
    {
      icon: <Waves size={24} />,
      title: "Kayak Tours",
      description:
        "Programs focused on developing leadership skills, emotional intelligence, and effective team management.",
    },
    {
      icon: <TentTree size={24} />,

      title: "Sai Wan Overnight Camps",
      description:
        "Design and implementation training programs with certifications of competence for your students or staff to boost morale, increase engagement, and celebrate achievements.",
    },
    {
      icon: <TreePine size={24} />,
      title: "Cheung Chau Day Trips",
      description:
        "Improve team communication through specialized training that addresses barriers and enhances understanding.",
    },
    {
      icon: <Award size={24} />,
      title: "Certification Programs",
      description:
        "Design and implementation training programs with certifications of competence for your students or staff to boost morale, increase engagement, and celebrate achievements.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Corporate Team Building",
      description:
        "Spark creativity and innovation through structured workshops that encourage out-of-the-box thinking and collaboration.",
    },
  ];

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Transformative Outdoor Learning Experiences
          </h2>
          <p className="text-grey-700 max-w-2xl mx-auto">
            We offer highly customizable programs designed to deliver on your
            expectations,strengthen your team, improve communication, and drive
            participant growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
