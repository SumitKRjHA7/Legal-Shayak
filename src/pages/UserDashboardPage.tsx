import { useState } from 'react';
import { FileText, Calendar, MessageSquare, Clock, User, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  
  const appointments = [
    {
      id: 1,
      lawyer: 'Adv. Rahul Sharma',
      specialization: 'Family Law',
      date: '2024-05-15',
      time: '10:00 AM',
      status: 'Upcoming',
      type: 'Online',
    },
    {
      id: 2,
      lawyer: 'Adv. Meera Patel',
      specialization: 'Property Law',
      date: '2024-05-20',
      time: '3:30 PM',
      status: 'Upcoming',
      type: 'In-Person',
    },
    {
      id: 3,
      lawyer: 'Adv. Vikram Malhotra',
      specialization: 'Civil Law',
      date: '2024-04-05',
      time: '11:00 AM',
      status: 'Completed',
      type: 'Phone',
    },
  ];
  
  const documents = [
    {
      id: 1,
      name: 'Rental Agreement.pdf',
      type: 'PDF',
      size: '1.2 MB',
      uploaded: '2024-04-20',
      status: 'Final',
    },
    {
      id: 2,
      name: 'Property Documents.zip',
      type: 'ZIP',
      size: '5.7 MB',
      uploaded: '2024-04-15',
      status: 'Under Review',
    },
    {
      id: 3,
      name: 'Affidavit.docx',
      type: 'DOCX',
      size: '0.8 MB',
      uploaded: '2024-04-10',
      status: 'Draft',
    },
  ];
  
  const cases = [
    {
      id: 1,
      title: 'Property Dispute Resolution',
      number: 'CS-2024-0123',
      lawyer: 'Adv. Meera Patel',
      filed: '2024-03-15',
      status: 'In Progress',
      nextHearing: '2024-05-25',
    },
    {
      id: 2,
      title: 'Tenant Eviction Notice',
      number: 'CS-2024-0145',
      lawyer: 'Adv. Vikram Malhotra',
      filed: '2024-04-05',
      status: 'Documentation',
      nextHearing: 'Not Scheduled',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Dashboard Header */}
        <div className="bg-white shadow rounded-lg mb-8 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
              <p className="text-gray-600">Welcome back, Rahul Kumar</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                to="/book-consultation"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Book Consultation
              </Link>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Lawyer
              </button>
            </div>
          </div>
        </div>
        
        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white shadow rounded-lg">
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-900">Rahul Kumar</h2>
                    <p className="text-sm text-gray-600">rahul.kumar@example.com</p>
                  </div>
                </div>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('appointments')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'appointments' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Calendar className="h-5 w-5 mr-3" />
                      Appointments
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('documents')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'documents' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <FileText className="h-5 w-5 mr-3" />
                      Documents
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('cases')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'cases' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Clock className="h-5 w-5 mr-3" />
                      My Cases
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'settings' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Settings className="h-5 w-5 mr-3" />
                      Account Settings
                    </button>
                  </li>
                </ul>
                <div className="pt-4 mt-4 border-t">
                  <button
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Appointments</h2>
                  <Link 
                    to="/book-consultation"
                    className="text-sm font-medium text-blue-900 hover:text-blue-800 flex items-center"
                  >
                    Schedule New
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                {appointments.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Lawyer
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date & Time
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{appointment.lawyer}</div>
                              <div className="text-sm text-gray-500">{appointment.specialization}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{new Date(appointment.date).toLocaleDateString()}</div>
                              <div className="text-sm text-gray-500">{appointment.time}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{appointment.type}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                appointment.status === 'Upcoming' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {appointment.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {appointment.status === 'Upcoming' && (
                                <div className="flex space-x-2">
                                  <button className="text-blue-900 hover:text-blue-800">
                                    Join
                                  </button>
                                  <button className="text-gray-600 hover:text-gray-900">
                                    Reschedule
                                  </button>
                                  <button className="text-red-600 hover:text-red-800">
                                    Cancel
                                  </button>
                                </div>
                              )}
                              {appointment.status === 'Completed' && (
                                <button className="text-blue-900 hover:text-blue-800">
                                  View Summary
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Appointments Scheduled</h3>
                    <p className="text-gray-500 mb-4">You don't have any appointments scheduled yet.</p>
                    <Link 
                      to="/book-consultation"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Schedule Your First Consultation
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Documents</h2>
                  <button className="text-sm font-medium text-blue-900 hover:text-blue-800 flex items-center">
                    Upload New
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                
                {documents.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Document
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Uploaded
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Size
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {documents.map((document) => (
                          <tr key={document.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                                <div className="text-sm font-medium text-gray-900">{document.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{new Date(document.uploaded).toLocaleDateString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{document.size}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                document.status === 'Final' 
                                  ? 'bg-green-100 text-green-800' 
                                  : document.status === 'Under Review'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {document.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-2">
                                <button className="text-blue-900 hover:text-blue-800">
                                  View
                                </button>
                                <button className="text-blue-900 hover:text-blue-800">
                                  Download
                                </button>
                                {document.status === 'Draft' && (
                                  <button className="text-gray-600 hover:text-gray-900">
                                    Edit
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Documents Found</h3>
                    <p className="text-gray-500 mb-4">You haven't uploaded any documents yet.</p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Upload Your First Document
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Cases Tab */}
            {activeTab === 'cases' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Active Cases</h2>
                </div>
                
                {cases.length > 0 ? (
                  <div className="space-y-6">
                    {cases.map((caseItem) => (
                      <div key={caseItem.id} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{caseItem.title}</h3>
                            <p className="text-sm text-gray-600">Case Number: {caseItem.number}</p>
                          </div>
                          <span className={`mt-2 md:mt-0 px-3 py-1 text-xs font-semibold rounded-full ${
                            caseItem.status === 'In Progress' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {caseItem.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Assigned Lawyer</p>
                            <p className="text-sm font-medium text-gray-900">{caseItem.lawyer}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Filed On</p>
                            <p className="text-sm font-medium text-gray-900">{new Date(caseItem.filed).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Next Hearing</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseItem.nextHearing !== 'Not Scheduled' 
                                ? new Date(caseItem.nextHearing).toLocaleDateString() 
                                : 'Not Scheduled'
                              }
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-3 mt-4">
                          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            View Details
                          </button>
                          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            Contact Lawyer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Cases</h3>
                    <p className="text-gray-500 mb-4">You don't have any active legal cases at the moment.</p>
                    <Link 
                      to="/book-consultation"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Consult a Lawyer
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="Rahul Kumar"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="rahul.kumar@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <input
                          id="address"
                          type="text"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="123 Main St, New Delhi"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          id="currentPassword"
                          type="password"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            id="newPassword"
                            type="password"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            id="confirmPassword"
                            type="password"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="email-notifications"
                          type="checkbox"
                          className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                          Email notifications for appointment reminders
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sms-notifications"
                          type="checkbox"
                          className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="sms-notifications" className="ml-3 text-sm text-gray-700">
                          SMS notifications for appointment reminders
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="case-updates"
                          type="checkbox"
                          className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="case-updates" className="ml-3 text-sm text-gray-700">
                          Email notifications for case updates
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="document-updates"
                          type="checkbox"
                          className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="document-updates" className="ml-3 text-sm text-gray-700">
                          Email notifications when documents are updated
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Cancel
                    </button>
                    <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;