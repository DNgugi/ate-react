import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, Share2, MessageCircle, ThumbsUp, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    // Update page title - in a real app you would get the post's title
    document.title = 'Blog Post - A Team Edventures';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);

  // This would come from your data source in a real application
  const post = {
    id: parseInt(id || "1"),
    title: "5 Team Building Activities That Actually Work",
    excerpt: "Discover team-building exercises that create meaningful connections and deliver measurable results for your organization.",
    content: `
      <p>Team building activities have become an essential part of corporate culture, yet many employees dread them. Why? Because too often, these activities feel forced, awkward, or disconnected from actual workplace challenges. The good news is that when done right, team building can be both enjoyable and incredibly effective.</p>
      
      <p>In this article, we'll explore five evidence-based team building activities that create genuine connections and deliver measurable results for your organization.</p>
      
      <h2>Why Traditional Team Building Often Falls Flat</h2>
      
      <p>Before diving into effective solutions, it's important to understand why many team building efforts fail to achieve their goals:</p>
      
      <ul>
        <li>They feel inauthentic or forced</li>
        <li>They lack clear connection to workplace challenges</li>
        <li>They don't account for different personality types</li>
        <li>They're treated as one-time events rather than part of ongoing development</li>
        <li>They lack proper facilitation and reflection</li>
      </ul>
      
      <p>The most effective team building experiences address these pitfalls while creating meaningful opportunities for connection, collaboration, and growth.</p>
      
      <h2>Activity 1: Problem-Solving Challenges</h2>
      
      <p>Problem-solving challenges place teams in scenarios where they must work together to overcome obstacles. These activities simulate workplace challenges while creating a low-risk environment for developing communication and collaboration skills.</p>
      
      <p><strong>How it works:</strong> Teams are presented with a complex problem that requires diverse perspectives and skills to solve. The challenge should be difficult enough to require genuine collaboration but achievable within the allotted time.</p>
      
      <p><strong>Example:</strong> "Escape Room Challenges" – Whether using a commercial escape room or creating your own puzzle-based challenge, these experiences require communication, critical thinking, and teamwork under pressure.</p>
      
      <p><strong>Why it works:</strong> Problem-solving challenges reveal natural team dynamics, leadership tendencies, and communication patterns. They also create opportunities for team members to recognize and appreciate diverse strengths and thinking styles.</p>
      
      <h2>Activity 2: Shared Experiences with Purpose</h2>
      
      <p>Memorable shared experiences create natural bonds between team members, especially when they're connected to meaningful purposes or values.</p>
      
      <p><strong>How it works:</strong> Design an experience that takes participants outside their comfort zones while creating opportunities for mutual support and shared achievement.</p>
      
      <p><strong>Example:</strong> "Community Impact Projects" – Have teams work together on meaningful service projects that benefit the local community. This might involve renovating a school, creating care packages for those in need, or environmental cleanup efforts.</p>
      
      <p><strong>Why it works:</strong> Shared purpose creates stronger bonds than recreational activities alone. When teams unite around meaningful impact, they develop deeper connections while reinforcing organizational values.</p>
      
      <h2>Activity 3: Structured Vulnerability Exercises</h2>
      
      <p>Psychological safety – the belief that one can speak up without facing rejection or humiliation – is the foundation of high-performing teams. Structured exercises that encourage appropriate vulnerability can dramatically strengthen team trust.</p>
      
      <p><strong>How it works:</strong> Create structured opportunities for team members to share personal insights, challenges, and perspectives in a supported environment.</p>
      
      <p><strong>Example:</strong> "Personal History Map" – Team members create visual representations of their professional journeys, including key inflection points, challenges overcome, and formative experiences. Each person shares their map with the team, followed by thoughtful discussion.</p>
      
      <p><strong>Why it works:</strong> When facilitated properly, these exercises develop empathy, reduce judgment, and build the psychological safety needed for innovation and honest communication.</p>
      
      <h2>Activity 4: Skill Complementarity Challenges</h2>
      
      <p>These activities highlight the importance of diverse skills and perspectives by creating scenarios where success depends on leveraging everyone's unique strengths.</p>
      
      <p><strong>How it works:</strong> Design activities where different roles require different abilities, creating interdependence among team members.</p>
      
      <p><strong>Example:</strong> "Blind Build" – Teams must construct a specified structure, but each member has different constraints (some can see but not touch, others can touch but not see, etc.). Success requires clear communication and leveraging each person's available abilities.</p>
      
      <p><strong>Why it works:</strong> These exercises demonstrate in tangible ways how diversity of thought and skill is essential for team success, while also revealing communication gaps and opportunities for improvement.</p>
      
      <h2>Activity 5: Strategic Storytelling</h2>
      
      <p>Narrative-based exercises help teams align around shared vision, values, and identity while developing stronger personal connections.</p>
      
      <p><strong>How it works:</strong> Use structured storytelling prompts to help team members share experiences and perspectives related to their work and collaboration.</p>
      
      <p><strong>Example:</strong> "Success Stories Circle" – Team members share stories of times when the team overcame significant challenges or achieved important goals. After each story, the group discusses what team qualities made the success possible and how to replicate these in future work.</p>
      
      <p><strong>Why it works:</strong> Storytelling taps into emotional centers of the brain, creating stronger retention and meaning. It also helps teams develop shared language and identity around their collective strengths and values.</p>
      
      <h2>Keys to Successful Implementation</h2>
      
      <p>For any team building activity to deliver lasting impact, consider these essential elements:</p>
      
      <ul>
        <li><strong>Proper facilitation:</strong> Skilled facilitators can create psychological safety, guide productive discussions, and help teams extract meaningful insights.</li>
        <li><strong>Reflection and application:</strong> Always include structured reflection about how insights from the activity apply to workplace challenges.</li>
        <li><strong>Follow-up:</strong> Create mechanisms to reinforce learnings in the weeks following the activity.</li>
        <li><strong>Leadership participation:</strong> When leaders authentically engage in team building, it signals the importance of relationship development.</li>
        <li><strong>Customization:</strong> Tailor activities to your team's specific challenges, culture, and goals.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Effective team building isn't about forced fun or one-time events. It's about creating meaningful experiences that develop the trust, communication, and collaboration necessary for high performance.</p>
      
      <p>By implementing these five evidence-based activities with proper facilitation and follow-through, you can transform your team's dynamics and create lasting impact on their performance and satisfaction.</p>
      
      <p>Remember, the goal isn't just to have fun (though that's a nice bonus). The goal is to develop the relationships, understanding, and skills that enable your team to tackle its biggest challenges together.</p>
    `,
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Jessica Chen",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    authorBio: "Jessica is a team development specialist with over 10 years of experience designing and facilitating team-building programs for organizations worldwide.",
    date: "May 15, 2025",
    readTime: "6 min read",
    category: "Team Building",
    tags: ["Activities", "Engagement", "Communication"]
  };
  
  // Related posts would also come from your data source
  const relatedPosts = [
    {
      id: 2,
      title: "Remote Team Building: Strategies for Distributed Teams",
      excerpt: "Learn effective approaches to building team cohesion and culture when your employees work from different locations.",
      image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Michael Rodriguez",
      date: "April 28, 2025",
      category: "Remote Work"
    },
    {
      id: 4,
      title: "Building Psychological Safety in Teams",
      excerpt: "How to create an environment where team members feel safe to take risks, voice opinions, and be their authentic selves.",
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sarah Johnson",
      date: "March 22, 2025",
      category: "Team Culture"
    },
    {
      id: 6,
      title: "Improving Communication in Cross-Functional Teams",
      excerpt: "Strategies for enhancing collaboration and communication among team members from different departments and backgrounds.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Michelle Lee",
      date: "February 25, 2025",
      category: "Communication"
    }
  ];

  return (
    <>
      {/* Featured Image Header */}
      <div className="relative h-96 md:h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Link 
                to={`/blog?category=${post.category}`} 
                className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {post.category}
              </Link>
              {post.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  to={`/blog?tag=${tag}`}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </Link>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-white/80 text-sm space-x-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/blog" className="hover:text-primary-600">Blog</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-400 truncate max-w-[200px]">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share and Engagement */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-gray-700 font-medium mr-4">Share this article:</span>
                    <div className="inline-flex space-x-3">
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-400">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-700">
                        <Linkedin size={20} />
                      </a>
                      <button className="text-gray-500 hover:text-primary-600">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="inline-flex items-center text-gray-500 hover:text-primary-600">
                      <ThumbsUp size={20} className="mr-2" />
                      <span>42</span>
                    </button>
                    <button className="inline-flex items-center text-gray-500 hover:text-primary-600">
                      <MessageCircle size={20} className="mr-2" />
                      <span>12</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-20 h-20 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                  <p className="text-gray-600 mb-4">{post.authorBio}</p>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700">
                    View all posts by {post.author.split(' ')[0]} →
                  </a>
                </div>
              </div>
              
              {/* Comments Section - Would be implemented with actual functionality in a real app */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Comments (12)</h3>
                <div className="space-y-8">
                  {/* Comment example */}
                  <div className="border-b border-gray-200 pb-8">
                    <div className="flex">
                      <img 
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Commenter" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center mb-2">
                          <h4 className="font-bold mr-2">Michael Smith</h4>
                          <span className="text-gray-500 text-sm">3 days ago</span>
                        </div>
                        <p className="text-gray-700 mb-3">
                          Great article! I've tried the "Success Stories Circle" with my team and it was incredibly effective at highlighting our strengths and building confidence. Looking forward to trying the other activities.
                        </p>
                        <button className="text-gray-500 hover:text-primary-600 text-sm font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Another comment example */}
                  <div>
                    <div className="flex">
                      <img 
                        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Commenter" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center mb-2">
                          <h4 className="font-bold mr-2">Emma Johnson</h4>
                          <span className="text-gray-500 text-sm">1 week ago</span>
                        </div>
                        <p className="text-gray-700 mb-3">
                          I appreciate how these activities focus on actual team development rather than just "fun." The section on structured vulnerability exercises is particularly valuable - psychological safety is indeed the foundation of high-performing teams.
                        </p>
                        <button className="text-gray-500 hover:text-primary-600 text-sm font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Comment Form */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
                  <form>
                    <div className="mb-4">
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                        placeholder="Your comment..."
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        className="px-4 py-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                        placeholder="Your name"
                      />
                      <input
                        type="email"
                        className="px-4 py-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      <input type="checkbox" id="save-info" className="mr-2" />
                      <label htmlFor="save-info" className="text-gray-700 text-sm">
                        Save my name and email for the next time I comment
                      </label>
                    </div>
                    <button type="submit" className="btn-primary">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Related Posts */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-20 h-20 object-cover rounded-md mr-3 flex-shrink-0"
                        />
                        <div>
                          <span className="text-xs text-primary-600 font-medium">
                            {relatedPost.category}
                          </span>
                          <h4 className="font-medium leading-tight mb-1">
                            <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary-600">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-gray-500 text-xs">
                            {relatedPost.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Popular Tags */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Team Building', 'Leadership', 'Communication', 'Remote Work', 'Engagement', 'Culture', 'Activities', 'Trust'].map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/blog?tag=${tag}`}
                        className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest team building insights delivered to your inbox.
                  </p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Subscribe
                    </button>
                  </form>
                </div>
                
                {/* CTA */}
                <div className="bg-primary-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-bold mb-3">Ready to Transform Your Team?</h3>
                  <p className="text-white/80 mb-4">
                    Contact us to learn how our team-building solutions can help your organization.
                  </p>
                  <Link to="/contact" className="block w-full text-center bg-white text-primary-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">More Articles You Might Like</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs text-primary-600 font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    <Link to={`/blog/${post.id}`} className="text-gray-900 hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
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
    </>
  );
};

export default BlogPostPage;