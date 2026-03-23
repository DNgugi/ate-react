import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiCanoe, GiIsland } from "react-icons/gi";

import {
  Award,
  Compass,
  Briefcase,
  GraduationCap,
  TentTree,
  Caravan,
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
      title: "School Camps",
      icon: <GraduationCap size={24} />,
      description:
        "Our school camps are designed to integrate with your curriculum and help your students build trust, improve communication, and enhance collaboration using adventure as a base. ",
    },
    {
      title: "Duke of Edinburgh Award Expeditions",
      icon: <Compass size={24} />,
      description:
        "We support DofE programs with a wide range of options for hiking and kayaking based expeditions, as well as pre-expedition training supplied by our experienced instructors",
    },
    {
      title: "Family Edventure Camps",
      icon: <Caravan size={24} />,
      description:
        "Our Sai Wan base is the perfect getaway for you and your family. Our base offers equipment rental and WASH facilities, with optional indoor accommodation and guided experiences ",
    },
    {
      title: "Kayak Tours",
      icon: <GiCanoe size={24} />,
      description:
        "Our experienced and certified kayak guides can take you kayaking around some scenic locations in Hong Kong",
    },
    {
      title: "Sai Wan Overnight Camps",
      icon: <TentTree size={24} />,
      description:
        "Come camping at our rustic Sai Wan base where we offer our base for your exploration of the area.",
    },
    {
      id: "cheung-chau",
      title: "Cheung Chau Day Trips",
      icon: <GiIsland size={24} />,
      description:
        "Cheung Chau Island is just 40 minutes by fast ferry from Central piers and offers an excellent exploration of Hong Kong culture.",
    },
    {
      title: "Certification Programs",
      icon: <Award size={24} />,
      description:
        "From our Sai Wan and Cheung Chau bases, we offer certification courses to help you develop your skills and competencies.",
    },
    {
      title: "Corporate Team Building",
      icon: <Briefcase size={24} />,
      description:
        "These workshops designed specifically for corporate teams, helping your team develop the cohesion needed for high performance.",
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
