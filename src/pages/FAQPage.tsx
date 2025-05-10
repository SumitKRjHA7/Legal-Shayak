import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  
  const toggleFaq = (id: number) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };
  
  const faqCategories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Our Services' },
    { id: 'process', name: 'Legal Process' },
    { id: 'eligibility', name: 'Eligibility' },
    { id: 'fees', name: 'Fees & Payment' },
  ];
  
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What is Legal-Sahayak?',
      answer: 'Legal-Sahayak is a platform dedicated to providing accessible legal assistance to Indian citizens. We offer services ranging from free consultations and document drafting to court representation and specialized legal aid for vulnerable groups.',
      category: 'general',
    },
    {
      id: 2,
      question: 'How can I book a consultation?',
      answer: 'You can book a consultation through our website by visiting the "Book Consultation" page, or by calling our helpline at +91 98765 43210. We offer online, phone, and in-person consultations based on your preference.',
      category: 'services',
    },
    {
      id: 3,
      question: 'Is the initial consultation really free?',
      answer: 'Yes, we provide a free initial consultation to all our clients. This session helps us understand your legal needs and determine how we can best assist you. There is absolutely no obligation to proceed with paid services after the consultation.',
      category: 'fees',
    },
    {
      id: 4,
      question: 'What documents should I prepare for the consultation?',
      answer: 'It\'s helpful to have any documents related to your legal issue ready for the consultation. This might include contracts, notices, correspondence, identification documents, or any other paperwork relevant to your case. However, you can still proceed with the consultation even without these documents.',
      category: 'process',
    },
    {
      id: 5,
      question: 'Who is eligible for free legal aid?',
      answer: 'In India, free legal aid is available to various categories of people including those below the poverty line, women and children, persons with disabilities, victims of trafficking, industrial workmen, and persons in custody. We can help determine your eligibility during your initial consultation.',
      category: 'eligibility',
    },
    {
      id: 6,
      question: 'What types of legal documents can you help draft?',
      answer: 'Our document drafting services cover a wide range of legal documents including affidavits, agreements (rental, employment, service), wills, power of attorney, legal notices, RTI applications, and various court applications. We ensure all documents are legally sound and properly formatted.',
      category: 'services',
    },
    {
      id: 7,
      question: 'How long does the legal process typically take?',
      answer: 'The duration of legal processes varies greatly depending on the nature and complexity of the case. Some matters like document drafting can be completed in a day or two, while court cases may take months or even years. We provide realistic timelines based on your specific situation during consultation.',
      category: 'process',
    },
    {
      id: 8,
      question: 'What are your fees for various services?',
      answer: 'Our fees vary based on the type and complexity of services required. After the free initial consultation, we provide a transparent fee structure with clear cost estimates before proceeding. We strive to keep our services affordable and also offer flexible payment options for ongoing cases.',
      category: 'fees',
    },
    {
      id: 9,
      question: 'Do you provide services in languages other than English?',
      answer: 'Yes, we have lawyers and legal advisors who can communicate in various Indian languages including Hindi, Bengali, Tamil, Telugu, Malayalam, Kannada, Marathi, Gujarati, and Punjabi. We believe in breaking language barriers to make legal help truly accessible.',
      category: 'general',
    },
    {
      id: 10,
      question: 'How can I file an RTI application?',
      answer: 'We can assist you with drafting and filing RTI applications. The process involves identifying the correct public authority, drafting proper questions, paying a nominal fee (Rs. 10 for central government departments), and submitting the application. We handle the entire process and follow up on responses.',
      category: 'process',
    },
    {
      id: 11,
      question: 'What support do you provide for domestic violence cases?',
      answer: 'We offer comprehensive support for domestic violence cases, including emergency legal advice, help with filing police complaints, obtaining protection orders, and representation in court. We approach these cases with sensitivity and prioritize the safety and well-being of survivors.',
      category: 'services',
    },
    {
      id: 12,
      question: 'Can you help with property disputes?',
      answer: 'Yes, we provide assistance with various property-related issues including title disputes, boundary disputes, tenant-landlord conflicts, inheritance matters, and property documentation. Our property law experts can guide you through negotiations, documentation, or litigation as needed.',
      category: 'services',
    },
    {
      id: 13,
      question: 'What should I do if I need urgent legal help?',
      answer: 'For urgent legal matters, you can call our emergency helpline at +91 98765 43210, which is available 24/7. Depending on the situation, we can provide immediate phone consultation and arrange for expedited in-person meetings or court representations if required.',
      category: 'general',
    },
    {
      id: 14,
      question: 'Do you provide legal awareness workshops for communities?',
      answer: 'Yes, we conduct legal awareness workshops for communities, schools, colleges, and organizations. These sessions cover various aspects of law relevant to the target audience and aim to empower people with knowledge about their rights and legal processes.',
      category: 'services',
    },
    {
      id: 15,
      question: 'How do I know if my case requires court representation?',
      answer: 'During the initial consultation, our lawyers assess your situation to determine whether court representation is necessary or if alternative solutions like negotiation, mediation, or administrative remedies might be more appropriate. We recommend court action only when it\'s the most effective path to resolution.',
      category: 'process',
    },
  ];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about legal assistance and our services.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-6">
              {filteredFaqs.map((faq) => (
                <div 
                  key={faq.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full text-left p-6 focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0">
                        {openFaqs.includes(faq.id) ? (
                          <ChevronUp className="h-5 w-5 text-blue-900" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-blue-900" />
                        )}
                      </span>
                    </div>
                  </button>
                  <div 
                    className={`px-6 pb-6 transition-all duration-300 ${
                      openFaqs.includes(faq.id) ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No FAQs found matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're here to help. Contact us directly or schedule a free consultation to discuss your specific legal needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="/book-consultation" 
              className="inline-flex items-center px-6 py-3 border border-blue-900 text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;