import { useState } from 'react';
import { Star, Filter } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
  category: string;
  date: string;
  avatar: string;
}

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Cases' },
    { id: 'civil', name: 'Civil Cases' },
    { id: 'criminal', name: 'Criminal Cases' },
    { id: 'family', name: 'Family Law' },
    { id: 'property', name: 'Property' },
    { id: 'documentation', name: 'Documentation' },
  ];
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Business Owner',
      content: 'The legal guidance I received from Legal-Sahayak helped me resolve a complex property dispute that had been ongoing for years. Their team was professional, thorough, and genuinely cared about my case. What impressed me most was how they explained every step of the process in simple terms, making it easy for me to understand my options and make informed decisions.',
      rating: 5,
      category: 'property',
      date: 'June 2023',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Teacher',
      content: 'I was able to file an RTI application with ease thanks to the team at Legal-Sahayak. The process was simplified and efficient. Their step-by-step guidance made what seemed like a daunting task incredibly manageable. I received a prompt response to my RTI, which helped me address an important issue at my workplace. I highly recommend their services to anyone navigating the RTI process.',
      rating: 5,
      category: 'documentation',
      date: 'August 2023',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Amit Singh',
      position: 'IT Professional',
      content: 'The lawyers at Legal-Sahayak drafted an airtight rental agreement for me. Their attention to detail and legal expertise is commendable. They included clauses I wouldn\'t have thought of on my own, which have protected me from potential disputes. The turnaround time was quick, and the fee was reasonable. I will definitely use their services again for any legal documentation needs.',
      rating: 4,
      category: 'documentation',
      date: 'July 2023',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Sneha Patel',
      position: 'Homemaker',
      content: 'After facing domestic violence, I wasn\'t sure where to turn. Legal-Sahayak provided not just legal support, but emotional support during a very difficult time. They helped me file a police complaint, obtain a protection order, and navigate the family court proceedings. Their female lawyer made me feel comfortable sharing my experience. I\'m now rebuilding my life with my children, and I owe much of my peace of mind to their guidance.',
      rating: 5,
      category: 'family',
      date: 'September 2023',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Vikram Malhotra',
      position: 'Retired Government Officer',
      content: 'As a senior citizen, I was facing challenges with my pension payments and property management. Legal-Sahayak\'s team was patient and understanding, taking the time to address all my concerns. They helped resolve the pension issue through proper channels and also assisted in creating a will to ensure my assets would be distributed according to my wishes. Their services for senior citizens are truly exemplary.',
      rating: 5,
      category: 'civil',
      date: 'May 2023',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Karan Mehra',
      position: 'Small Business Owner',
      content: 'When my shop was broken into, I had no idea how to proceed with filing an FIR and following up with the police. Legal-Sahayak guided me through the entire process, from drafting the complaint to representing my interests during the investigation. Thanks to their intervention, the case was taken seriously, and I was able to receive proper compensation through insurance. Their criminal law expertise was invaluable.',
      rating: 4,
      category: 'criminal',
      date: 'October 2023',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      name: 'Ananya Desai',
      position: 'Entrepreneur',
      content: 'Legal-Sahayak helped me navigate the complex world of business compliance and contract law when I was starting my company. Their counsel on drafting service agreements and privacy policies was excellent. They also conducted a workshop for my team on legal aspects of our industry, which was incredibly informative. Having them as our legal partners gives me confidence that our business is built on a solid legal foundation.',
      rating: 5,
      category: 'civil',
      date: 'November 2023',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 8,
      name: 'Mohammed Qureshi',
      position: 'Civil Engineer',
      content: 'I approached Legal-Sahayak for help with a construction dispute where a contractor had not fulfilled their obligations despite full payment. Their team mediated the situation efficiently, drafting a legally sound notice that prompted the contractor to complete the work without going to court. Their pragmatic approach saved me time, money, and stress. I appreciate their focus on resolution rather than prolonging legal battles.',
      rating: 4,
      category: 'civil',
      date: 'December 2023',
      avatar: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 9,
      name: 'Lakshmi Venkatesh',
      position: 'Doctor',
      content: 'During my divorce proceedings, Legal-Sahayak provided exceptional support, ensuring that custody arrangements for my children prioritized their well-being. Their family law specialist was compassionate yet strategic, helping us reach a fair settlement without unnecessary conflict. Throughout the emotional process, they remained professional and responsive to my concerns. I\'m grateful for their guidance during such a challenging life transition.',
      rating: 5,
      category: 'family',
      date: 'January 2024',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Read about how Legal-Sahayak has helped people across India resolve their legal challenges.
          </p>
        </div>
      </section>

      {/* Testimonials Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filter by case type:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{testimonial.date}</span>
                </div>
                
                <p className="text-gray-700 italic mb-3">"{testimonial.content}"</p>
                
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {categories.find(c => c.id === testimonial.category)?.name || testimonial.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            If you've worked with Legal-Sahayak and would like to share your experience, we'd love to hear from you!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;