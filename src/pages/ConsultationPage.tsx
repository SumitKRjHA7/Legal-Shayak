import { useState } from 'react';
import { format } from 'date-fns';
import { ArrowRight, Calendar, Clock, FileText, Phone, Video, UserCircle, MapPin } from 'lucide-react';

const ConsultationPage = () => {
  const [consultationType, setConsultationType] = useState<string>('online');
  const [lawCategory, setLawCategory] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  const lawCategories = [
    { id: 'criminal', name: 'Criminal Law' },
    { id: 'civil', name: 'Civil Law' },
    { id: 'family', name: 'Family Law' },
    { id: 'property', name: 'Property Law' },
    { id: 'corporate', name: 'Corporate Law' },
    { id: 'constitutional', name: 'Constitutional Law' },
    { id: 'labor', name: 'Labor Law' },
    { id: 'tax', name: 'Tax Law' },
  ];
  
  // Generate dates for the next 7 days
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      value: format(date, 'yyyy-MM-dd'),
      display: format(date, 'EEE, MMM d'),
    };
  });
  
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ];
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle form submission (API call, etc.)
    // For this demo, we'll just show a success message
    nextStep();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-6">Book a Consultation</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule a meeting with our expert lawyers to discuss your legal needs and get personalized assistance.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <span className="text-sm mt-2 text-gray-600">Service Details</span>
              </div>
              <div className={`flex-grow border-t ${currentStep >= 2 ? 'border-blue-900' : 'border-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <span className="text-sm mt-2 text-gray-600">Personal Details</span>
              </div>
              <div className={`flex-grow border-t ${currentStep >= 3 ? 'border-blue-900' : 'border-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </div>
                <span className="text-sm mt-2 text-gray-600">Confirmation</span>
              </div>
            </div>
          </div>

          {/* Step 1: Service Details */}
          {currentStep === 1 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-3">Consultation Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                      consultationType === 'online' ? 'border-blue-900 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setConsultationType('online')}
                  >
                    <div className="flex flex-col items-center">
                      <Video className={`h-8 w-8 mb-2 ${consultationType === 'online' ? 'text-blue-900' : 'text-gray-400'}`} />
                      <span className={`font-medium ${consultationType === 'online' ? 'text-blue-900' : 'text-gray-800'}`}>
                        Online
                      </span>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                      consultationType === 'phone' ? 'border-blue-900 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setConsultationType('phone')}
                  >
                    <div className="flex flex-col items-center">
                      <Phone className={`h-8 w-8 mb-2 ${consultationType === 'phone' ? 'text-blue-900' : 'text-gray-400'}`} />
                      <span className={`font-medium ${consultationType === 'phone' ? 'text-blue-900' : 'text-gray-800'}`}>
                        Phone
                      </span>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                      consultationType === 'inperson' ? 'border-blue-900 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setConsultationType('inperson')}
                  >
                    <div className="flex flex-col items-center">
                      <MapPin className={`h-8 w-8 mb-2 ${consultationType === 'inperson' ? 'text-blue-900' : 'text-gray-400'}`} />
                      <span className={`font-medium ${consultationType === 'inperson' ? 'text-blue-900' : 'text-gray-800'}`}>
                        In-Person
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="lawCategory" className="block text-gray-700 text-sm font-bold mb-2">
                  Legal Category
                </label>
                <select
                  id="lawCategory"
                  value={lawCategory}
                  onChange={(e) => setLawCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  {lawCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {availableDates.map((date) => (
                    <div
                      key={date.value}
                      className={`border rounded-lg p-3 cursor-pointer text-center transition-colors duration-200 ${
                        selectedDate === date.value ? 'border-blue-900 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedDate(date.value)}
                    >
                      <Calendar className={`h-5 w-5 mx-auto mb-1 ${selectedDate === date.value ? 'text-blue-900' : 'text-gray-400'}`} />
                      <span className={`text-sm ${selectedDate === date.value ? 'text-blue-900 font-medium' : 'text-gray-800'}`}>
                        {date.display}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <div
                      key={time}
                      className={`border rounded-lg p-3 cursor-pointer text-center transition-colors duration-200 ${
                        selectedTime === time ? 'border-blue-900 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock className={`h-5 w-5 mx-auto mb-1 ${selectedTime === time ? 'text-blue-900' : 'text-gray-400'}`} />
                      <span className={`text-sm ${selectedTime === time ? 'text-blue-900 font-medium' : 'text-gray-800'}`}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="issueDescription" className="block text-gray-700 text-sm font-bold mb-2">
                  Briefly describe your legal issue
                </label>
                <textarea
                  id="issueDescription"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Please provide details about your legal concern..."
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                {consultationType === 'inperson' && (
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                      Address
                    </label>
                    <textarea
                      id="address"
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="documents" className="block text-gray-700 text-sm font-bold mb-2">
                    Upload Any Relevant Documents (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <FileText className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-900 hover:text-blue-800"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-900 border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">
                        I agree to the <a href="#" className="text-blue-900 hover:underline">terms and conditions</a> and <a href="#" className="text-blue-900 hover:underline">privacy policy</a>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
                <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation Scheduled!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your consultation has been successfully scheduled. We've sent a confirmation email with all the details.
              </p>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-900 mr-3" />
                  <span className="text-gray-800">
                    <strong>Date:</strong> {selectedDate ? format(new Date(selectedDate), 'EEEE, MMMM d, yyyy') : 'Not selected'}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-900 mr-3" />
                  <span className="text-gray-800">
                    <strong>Time:</strong> {selectedTime ? `${selectedTime} IST` : 'Not selected'}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  {consultationType === 'online' ? (
                    <Video className="h-6 w-6 text-blue-900 mr-3" />
                  ) : consultationType === 'phone' ? (
                    <Phone className="h-6 w-6 text-blue-900 mr-3" />
                  ) : (
                    <MapPin className="h-6 w-6 text-blue-900 mr-3" />
                  )}
                  <span className="text-gray-800">
                    <strong>Type:</strong> {consultationType === 'online' ? 'Online Video' : consultationType === 'phone' ? 'Phone Call' : 'In-Person'}
                  </span>
                </div>
                <div className="flex items-center">
                  <UserCircle className="h-6 w-6 text-blue-900 mr-3" />
                  <span className="text-gray-800">
                    <strong>Lawyer Category:</strong> {lawCategory ? lawCategories.find(cat => cat.id === lawCategory)?.name : 'Not selected'}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                If you need to reschedule or have any questions, please contact us at{' '}
                <a href="tel:+919876543210" className="text-blue-900 font-medium">+91 98765 43210</a> or{' '}
                <a href="mailto:support@legalsahayak.in" className="text-blue-900 font-medium">support@legalsahayak.in</a>.
              </p>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Return to Home
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;