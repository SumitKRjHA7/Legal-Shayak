import { NavLink } from 'react-router-dom';
import { Scale, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-xl font-bold text-white">Legal-Sahayak</span>
            </div>
            <p className="mt-4 text-gray-300">
              Helping people of India get legal assistance to simplify their lives.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Success Stories
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services#consultation" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Free Legal Consultation
                </a>
              </li>
              <li>
                <a href="/services#documents" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Legal Document Drafting
                </a>
              </li>
              <li>
                <a href="/services#court" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Court Case Support
                </a>
              </li>
              <li>
                <a href="/services#rti" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  RTI Filing
                </a>
              </li>
              <li>
                <a href="/services#fir" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  FIR Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
        
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-2" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-2" />
                <span>info@legalsahayak.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Legal-Sahayak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;