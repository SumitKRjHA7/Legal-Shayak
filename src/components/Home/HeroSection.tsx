import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Legal backdrop"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">Simplifying Legal Assistance</span>
          <span className="block text-amber-400">for Every Indian Citizen</span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-blue-100 md:max-w-3xl">
          Legal-Sahayak provides accessible legal help for all your needs - from free consultations and document drafting to court representation and RTI filing assistance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/book-consultation"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
          >
            Book a Free Consultation
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-white">1000+</div>
            <div className="text-sm text-blue-100">Cases Resolved</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-blue-100">Expert Lawyers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-blue-100">Client Satisfaction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-blue-100">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;