import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Team Building Activities That Actually Work",
      excerpt: "Discover team-building exercises that create meaningful connections and deliver measurable results for your organization.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Jessica Chen",
      date: "May 15, 2025",
      readTime: "6 min read",
      category: "Team Building"
    },
    {
      id: 2,
      title: "Remote Team Building: Strategies for Distributed Teams",
      excerpt: "Learn effective approaches to building team cohesion and culture when your employees work from different locations.",
      image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Michael Rodriguez",
      date: "April 28, 2025",
      readTime: "8 min read",
      category: "Remote Work"
    },
    {
      id: 3,
      title: "The ROI of Team Building: Measuring Success",
      excerpt: "How to quantify the impact of team building initiatives and demonstrate their value to organizational leadership.",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "David Wilson",
      date: "April 10, 2025",
      readTime: "7 min read",
      category: "Leadership"
    }
  ];

  return (
    <section className="section bg-white" id="blog">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Latest Team Building Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our articles for expert advice, trends, and strategies to help you 
            build stronger, more effective teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card h-full flex flex-col"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  <Link to={`/blog/${post.id}`} className="text-gray-900 hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center mt-4">
                  <div className="flex items-center">
                    <User size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700 text-sm">{post.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="ml-auto text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;