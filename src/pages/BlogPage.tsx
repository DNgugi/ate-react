import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Search, Filter, ChevronDown } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Blog - A Team Edventures';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Team Building Activities That Actually Work",
      excerpt: "Discover team-building exercises that create meaningful connections and deliver measurable results for your organization.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Jessica Chen",
      date: "May 15, 2025",
      readTime: "6 min read",
      category: "Team Building",
      tags: ["Activities", "Engagement", "Communication"]
    },
    {
      id: 2,
      title: "Remote Team Building: Strategies for Distributed Teams",
      excerpt: "Learn effective approaches to building team cohesion and culture when your employees work from different locations.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Michael Rodriguez",
      date: "April 28, 2025",
      readTime: "8 min read",
      category: "Remote Work",
      tags: ["Remote Teams", "Virtual", "Culture"]
    },
    {
      id: 3,
      title: "The ROI of Team Building: Measuring Success",
      excerpt: "How to quantify the impact of team building initiatives and demonstrate their value to organizational leadership.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "David Wilson",
      date: "April 10, 2025",
      readTime: "7 min read",
      category: "Leadership",
      tags: ["ROI", "Metrics", "Results"]
    },
    {
      id: 4,
      title: "Building Psychological Safety in Teams",
      excerpt: "How to create an environment where team members feel safe to take risks, voice opinions, and be their authentic selves.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sarah Johnson",
      date: "March 22, 2025",
      readTime: "9 min read",
      category: "Team Culture",
      tags: ["Psychological Safety", "Trust", "Innovation"]
    },
    {
      id: 5,
      title: "Outdoor Adventure Activities for Corporate Teams",
      excerpt: "Explore how outdoor challenges can help build resilience, trust, and problem-solving capabilities in corporate teams.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Chris Martinez",
      date: "March 8, 2025",
      readTime: "6 min read",
      category: "Adventure",
      tags: ["Outdoor", "Challenge", "Nature"]
    },
    {
      id: 6,
      title: "Improving Communication in Cross-Functional Teams",
      excerpt: "Strategies for enhancing collaboration and communication among team members from different departments and backgrounds.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Michelle Lee",
      date: "February 25, 2025",
      readTime: "7 min read",
      category: "Communication",
      tags: ["Cross-Functional", "Collaboration", "Diversity"]
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const allTags = blogPosts.reduce((tags, post) => {
    post.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    return tags;
  }, [] as string[]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === "" || post.category === selectedCategory;
    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

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
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Team Building Insights</h1>
            <p className="text-white/80 text-lg md:text-xl">
              Expert advice, trends, and strategies to help you build 
              stronger, more effective teams.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                {/* Mobile Filter Toggle */}
                <div className="mb-6 lg:hidden">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <Filter size={18} className="text-primary-600 mr-2" />
                      <span className="font-medium">Filter Posts</span>
                    </div>
                    <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                <div className={`space-y-8 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                  {/* Search */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Search</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                      <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      <div 
                        className={`cursor-pointer rounded-md px-3 py-2 ${
                          selectedCategory === "" ? "bg-primary-100 text-primary-700" : "hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedCategory("")}
                      >
                        All Categories
                      </div>
                      {categories.map((category, index) => (
                        <div 
                          key={index}
                          className={`cursor-pointer rounded-md px-3 py-2 ${
                            selectedCategory === category ? "bg-primary-100 text-primary-700" : "hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      <span 
                        className={`text-sm px-3 py-1 rounded-full cursor-pointer ${
                          selectedTag === "" 
                            ? "bg-primary-100 text-primary-700" 
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedTag("")}
                      >
                        All
                      </span>
                      {allTags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`text-sm px-3 py-1 rounded-full cursor-pointer ${
                            selectedTag === tag 
                              ? "bg-primary-100 text-primary-700" 
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Featured Post */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Featured Post</h3>
                    <div>
                      <img 
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Featured post" 
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h4 className="text-lg font-semibold mb-2">The Science of Effective Team Building</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Research-backed approaches to creating cohesive, high-performing teams in any organization.
                      </p>
                      <Link to="/blog/7" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <h2 className="text-xl md:text-2xl font-bold mb-3">
                            <Link to={`/blog/${post.id}`} className="text-gray-900 hover:text-primary-600 transition-colors">
                              {post.title}
                            </Link>
                          </h2>
                          
                          <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                          
                          <div className="mt-auto">
                            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-3">
                              <div className="flex items-center mr-4">
                                <User size={14} className="mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center mr-4">
                                <Calendar size={14} className="mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <Link 
                              to={`/blog/${post.id}`} 
                              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
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
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">No posts found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any posts matching your search criteria.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("");
                      setSelectedTag("");
                    }}
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="inline-flex rounded-md shadow-sm">
                    <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Previous
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary-50 text-sm font-medium text-primary-600">
                      1
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      2
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Next
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-700 relative overflow-hidden">
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8">
              Get the latest team building insights, tips, and strategies delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn-primary bg-white text-primary-700 hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;