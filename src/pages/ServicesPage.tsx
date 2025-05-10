import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Users, Clock, FilePlus, FileQuestion, Gavel, Scale } from 'lucide-react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const services = [
    {
      id: 'consultation',
      title: 'Free Legal Consultation',
      description: 'Get expert advice from experienced lawyers on your legal concerns and questions. Our free initial consultation helps you understand your legal position and available options.',
      icon: <Users className="h-10 w-10 text-blue-900" />,
      category: 'consultation',
      features: [
        'One-on-one session with an experienced lawyer',
        'Assessment of your legal situation',
        'Guidance on next steps',
        'Available both online and in-person',
        'No-obligation advice',
      ]
    },
    {
      id: 'documents',
      title: 'Legal Document Drafting',
      description: 'Professional assistance with creating legally sound documents including affidavits, agreements, wills, and more. Our lawyers ensure your documents are compliant with all legal requirements.',
      icon: <FileText className="h-10 w-10 text-blue-900" />,
      category: 'documentation',
      features: [
        'Drafting of legal documents',
        'Review of existing documents',
        'Customization to your specific needs',
        'Explanation of terms and conditions',
        'Digital and physical copies provided',
      ]
    },
    {
      id: 'court',
      title: 'Court Case Support',
      description: 'End-to-end support for representation in courts across jurisdictions. Our team of lawyers will handle your case from filing to final resolution, ensuring your interests are protected.',
      icon: <Shield className="h-10 w-10 text-blue-900" />,
      category: 'litigation',
      features: [
        'Case evaluation and strategy development',
        'Court representation',
        'Documentation preparation',
        'Regular case status updates',
        'Post-judgment assistance',
      ]
    },
    {
      id: 'rti',
      title: 'RTI Filing Assistance',
      description: 'Complete support for filing and following up on Right to Information applications. We help you exercise your right to information effectively and efficiently.',
      icon: <FilePlus className="h-10 w-10 text-blue-900" />,
      category: 'governmental',
      features: [
        'RTI application drafting',
        'Submission to appropriate authorities',
        'Follow-up on responses',
        'Assistance with appeals if needed',
        'Documentation of the entire process',
      ]
    },
    {
      id: 'fir',
      title: 'FIR Help',
      description: 'Guidance and support for filing First Information Reports (FIRs) with police stations. We ensure your complaint is properly recorded and followed up on by the authorities.',
      icon: <FileQuestion className="h-10 w-10 text-blue-900" />,
      category: 'criminal',
      features: [
        'Assistance in drafting the complaint',
        'Accompaniment to police station if needed',
        'Follow-up with investigating officers',
        'Advice on next steps after FIR filing',
        'Help with obtaining FIR copy',
      ]
    },
    {
      id: 'women',
      title: 'Legal Aid for Women',
      description: 'Specialized legal assistance for women dealing with domestic violence, divorce, maintenance, and other gender-specific legal issues. Our sensitive approach ensures dignity and justice.',
      icon: <Gavel className="h-10 w-10 text-blue-900" />,
      category: 'specialized',
      features: [
        'Female lawyers available on request',
        'Confidential consultations',
        'Protection order assistance',
        'Representation in family courts',
        'Access to support networks and resources',
      ]
    },
    {
      id: 'seniors',
      title: 'Senior Citizen Legal Support',
      description: 'Dedicated legal services for senior citizens including will creation, property matters, pension issues, and elder abuse cases. We provide compassionate and accessible assistance.',
      icon: <Clock className="h-10 w-10 text-blue-900" />,
      category: 'specialized',
      features: [
        'Home consultations available',
        'Will and estate planning',
        'Pension and benefit claims assistance',
        'Protection against elder abuse',
        'Property dispute resolution',
      ]
    },
    {
      id: 'property',
      title: 'Property & Real Estate Legal Services',
      description: 'Comprehensive legal assistance for property purchases, sales, disputes, rental agreements, and title verification. We safeguard your property investments and rights.',
      icon: <Scale className="h-10 w-10 text-blue-900" />,
      category: 'civil',
      features: [
        'Property document verification',
        'Agreement drafting and review',
        'Title clearance certification',
        'Dispute resolution',
        'Registration assistance',
      ]
    },
  ];
  
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'consultation', name: 'Consultation' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'litigation', name: 'Litigation' },
    { id: 'governmental', name: 'Governmental' },
    { id: 'criminal', name: 'Criminal' },
    { id: 'civil', name: 'Civil' },
    { id: 'specialized', name: 'Specialized' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We offer a comprehensive range of legal services designed to address the diverse needs of Indian citizens. From free consultations to specialized legal aid, we're here to help.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === category.id
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

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="text-md font-medium text-gray-900 mb-2">What we offer:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get the legal help you need quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 z-10 relative">
                <span className="text-xl font-bold text-blue-900">1</span>
              </div>
              <div className="absolute top-8 left-8 w-full border-t border-blue-200 hidden md:block"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Consultation</h3>
              <p className="text-gray-600">
                Schedule a free consultation with our legal experts through our website or phone.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 z-10 relative">
                <span className="text-xl font-bold text-blue-900">2</span>
              </div>
              <div className="absolute top-8 left-8 w-full border-t border-blue-200 hidden md:block"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discuss Your Case</h3>
              <p className="text-gray-600">
                Meet with our lawyer to discuss your legal needs and get expert advice on next steps.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 z-10 relative">
                <span className="text-xl font-bold text-blue-900">3</span>
              </div>
              <div className="absolute top-8 left-8 w-full border-t border-blue-200 hidden md:block"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solution</h3>
              <p className="text-gray-600">
                Receive a tailored plan and quote based on your specific legal requirements.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 z-10 relative">
                <span className="text-xl font-bold text-blue-900">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resolution</h3>
              <p className="text-gray-600">
                We handle your case from start to finish, keeping you informed throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Legal Help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards resolving your legal issues. Schedule a consultation with our expert lawyers today.
          </p>
          <Link 
            to="/book-consultation" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;