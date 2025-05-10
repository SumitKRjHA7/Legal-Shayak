import { ArrowRight, FileText, Shield, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Home/HeroSection';
import ServiceCard from '../components/Services/ServiceCard';
import TestimonialCard from '../components/Testimonials/TestimonialCard';

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: 'Free Legal Consultation',
      description: 'Get expert advice from experienced lawyers for your legal concerns',
      icon: <Users className="h-10 w-10 text-blue-900" />,
    },
    {
      id: 2,
      title: 'Document Drafting',
      description: 'Professional assistance with affidavits, agreements, and legal documents',
      icon: <FileText className="h-10 w-10 text-blue-900" />,
    },
    {
      id: 3,
      title: 'Court Case Support',
      description: 'End-to-end support for representation in courts across jurisdictions',
      icon: <Shield className="h-10 w-10 text-blue-900" />,
    },
    {
      id: 4,
      title: 'RTI Filing Assistance',
      description: 'Help with filing and following up on Right to Information applications',
      icon: <Clock className="h-10 w-10 text-blue-900" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Raj Kumar',
      position: 'Business Owner',
      content: 'The legal guidance I received from Legal-Sahayak helped me resolve a complex property dispute that had been ongoing for years.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Teacher',
      content: 'I was able to file an RTI application with ease thanks to the team at Legal-Sahayak. The process was simplified and efficient.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Amit Singh',
      position: 'IT Professional',
      content: 'The lawyers at Legal-Sahayak drafted an airtight rental agreement for me. Their attention to detail and legal expertise is commendable.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Legal-Sahayak provides a wide range of legal services to simplify your legal journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Legal-Sahayak</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making legal assistance accessible, affordable, and effective for every Indian citizen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Lawyers</h3>
              <p className="text-gray-600">
                Our team consists of experienced lawyers specializing in various fields of law.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Solutions</h3>
              <p className="text-gray-600">
                We understand the importance of time in legal matters and ensure prompt responses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidentiality</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All client information is kept strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our clients about how Legal-Sahayak has helped them navigate complex legal challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              View More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Legal Assistance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our expert lawyers today and take the first step towards resolving your legal issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/book-consultation" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;