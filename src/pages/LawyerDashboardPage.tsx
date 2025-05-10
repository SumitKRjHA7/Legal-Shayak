import { useState } from 'react';
import { Users, Calendar, MessageSquare, Clock, User, Settings, LogOut, ChevronRight, FileText, CheckCircle, XCircle } from 'lucide-react';

const LawyerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('clients');
  
  const clients = [
    {
      id: 1,
      name: 'Rahul Kumar',
      caseType: 'Property Dispute',
      status: 'Active',
      phone: '+91 98765 43210',
      email: 'rahul.kumar@example.com',
      joinedOn: '2024-03-15',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      caseType: 'Divorce Proceedings',
      status: 'Active',
      phone: '+91 98765 43211',
      email: 'priya.sharma@example.com',
      joinedOn: '2024-04-02',
    },
    {
      id: 3,
      name: 'Amit Singh',
      caseType: 'Rental Agreement',
      status: 'Completed',
      phone: '+91 98765 43212',
      email: 'amit.singh@example.com',
      joinedOn: '2024-02-20',
    },
  ];
  
  const appointments = [
    {
      id: 1,
      client: 'Rahul Kumar',
      caseType: 'Property Dispute',
      date: '2024-05-15',
      time: '10:00 AM',
      status: 'Upcoming',
      type: 'Online',
    },
    {
      id: 2,
      client: 'Priya Sharma',
      caseType: 'Divorce Proceedings',
      date: '2024-05-20',
      time: '3:30 PM',
      status: 'Upcoming',
      type: 'In-Person',
    },
    {
      id: 3,
      client: 'Amit Singh',
      caseType: 'Rental Agreement',
      date: '2024-04-05',
      time: '11:00 AM',
      status: 'Completed',
      type: 'Phone',
    },
  ];
  
  const cases = [
    {
      id: 1,
      title: 'Property Dispute Resolution',
      number: 'CS-2024-0123',
      client: 'Rahul Kumar',
      filed: '2024-03-15',
      status: 'In Progress',
      nextHearing: '2024-05-25',
      court: 'Delhi District Court',
    },
    {
      id: 2,
      title: 'Divorce Proceedings',
      number: 'CS-2024-0145',
      client: 'Priya Sharma',
      filed: '2024-04-05',
      status: 'Documentation',
      nextHearing: 'Not Scheduled',
      court: 'Family Court, Delhi',
    },
  ];
  
  const consultationRequests = [
    {
      id: 1,
      client: 'Neha Verma',
      requestType: 'Civil Matter',
      requestedDate: '2024-05-18',
      requestedTime: ['10:00 AM', '11:30 AM', '2:00 PM'],
      message: 'I need legal advice regarding a property inheritance issue. My father passed away recently and there\'s a dispute among siblings.',
      status: 'Pending',
    },
    {
      id: 2,
      client: 'Sanjay Gupta',
      requestType: 'Criminal Defense',
      requestedDate: '2024-05-16',
      requestedTime: ['4:00 PM', '5:30 PM'],
      message: 'I\'ve been falsely accused in a case and need urgent legal representation. Can we discuss the details over a call?',
      status: 'Pending',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Dashboard Header */}
        <div className="bg-white shadow rounded-lg mb-8 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lawyer Dashboard</h1>
              <p className="text-gray-600">Welcome back, Adv. Meera Patel</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <div className="bg-blue-50 px-4 py-2 rounded-md">
                <p className="text-sm text-gray-600">Upcoming Appointments</p>
                <p className="text-xl font-semibold text-blue-900">2</p>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-md">
                <p className="text-sm text-gray-600">Active Cases</p>
                <p className="text-xl font-semibold text-green-700">2</p>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-md">
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-xl font-semibold text-amber-700">2</p>
              </div>
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
                    <h2 className="text-lg font-semibold text-gray-900">Adv. Meera Patel</h2>
                    <p className="text-sm text-gray-600">Property Law Specialist</p>
                  </div>
                </div>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('clients')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'clients' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Users className="h-5 w-5 mr-3" />
                      Clients
                    </button>
                  </li>
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
                      onClick={() => setActiveTab('cases')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'cases' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <FileText className="h-5 w-5 mr-3" />
                      Cases
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('requests')}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeTab === 'requests' 
                          ? 'bg-blue-50 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <MessageSquare className="h-5 w-5 mr-3" />
                      Consultation Requests
                      {consultationRequests.length > 0 && (
                        <span className="ml-auto bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                          {consultationRequests.length}
                        </span>
                      )}
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
                      Profile Settings
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
            {/* Clients Tab */}
            {activeTab === 'clients' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Clients</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                {clients.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Client
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Case Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {clients.map((client) => (
                          <tr key={client.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-600 font-medium">{client.name.charAt(0)}</span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{client.name}</div>
                                  <div className="text-sm text-gray-500">Since {new Date(client.joinedOn).toLocaleDateString()}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{client.caseType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                client.status === 'Active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {client.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{client.phone}</div>
                              <div className="text-sm text-gray-500">{client.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-2">
                                <button className="text-blue-900 hover:text-blue-800">View</button>
                                <button className="text-blue-900 hover:text-blue-800">Message</button>
                                <button className="text-blue-900 hover:text-blue-800">Schedule</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Clients Yet</h3>
                    <p className="text-gray-500">You don't have any clients assigned to you yet.</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Appointments</h2>
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      + Add Appointment
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Calendar
                    </button>
                  </div>
                </div>
                
                {appointments.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Client
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
                              <div className="text-sm font-medium text-gray-900">{appointment.client}</div>
                              <div className="text-sm text-gray-500">{appointment.caseType}</div>
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
                                  View Notes
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
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Schedule an Appointment
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Cases Tab */}
            {activeTab === 'cases' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Active Cases</h2>
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    + New Case
                  </button>
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
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Client</p>
                            <p className="text-sm font-medium text-gray-900">{caseItem.client}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Filed On</p>
                            <p className="text-sm font-medium text-gray-900">{new Date(caseItem.filed).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Court</p>
                            <p className="text-sm font-medium text-gray-900">{caseItem.court}</p>
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
                            Update Case
                          </button>
                          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            Upload Documents
                          </button>
                          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            Add Hearing Date
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Cases</h3>
                    <p className="text-gray-500 mb-4">You don't have any active legal cases at the moment.</p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Create New Case
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Consultation Requests Tab */}
            {activeTab === 'requests' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Consultation Requests</h2>
                </div>
                
                {consultationRequests.length > 0 ? (
                  <div className="space-y-6">
                    {consultationRequests.map((request) => (
                      <div key={request.id} className="border border-yellow-200 bg-yellow-50 rounded-lg p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{request.client}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              <span className="font-medium">Request Type:</span> {request.requestType}
                            </p>
                          </div>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {request.status}
                          </span>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-sm text-gray-700">{request.message}</p>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Requested Date:</span> {new Date(request.requestedDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Preferred Times:</span> {request.requestedTime.join(', ')}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex space-x-3">
                          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Accept Request
                          </button>
                          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
                            <XCircle className="h-5 w-5 mr-2" />
                            Decline
                          </button>
                          <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            Suggest Alternative
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Requests</h3>
                    <p className="text-gray-500">You don't have any consultation requests at the moment.</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900  mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="Adv. Meera Patel"
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
                          defaultValue="meera.patel@legalsahayak.in"
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
                          defaultValue="+91 98765 54321"
                        />
                      </div>
                      <div>
                        <label htmlFor="barNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Bar Registration Number
                        </label>
                        <input
                          id="barNumber"
                          type="text"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="DL/12345/2015"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                          Specialization
                        </label>
                        <input
                          id="specialization"
                          type="text"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="Property Law"
                        />
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Years of Experience
                        </label>
                        <input
                          id="experience"
                          type="number"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="10"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                          Professional Bio
                        </label>
                        <textarea
                          id="bio"
                          rows={4}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          defaultValue="Experienced property law attorney with expertise in real estate transactions, landlord-tenant disputes, and property litigation. Successfully represented clients in over 200 property-related cases."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Availability Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Days Available for Consultation
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                            <div key={day} className="flex items-center">
                              <input
                                id={`day-${day}`}
                                type="checkbox"
                                className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                                defaultChecked={day !== 'Sunday'}
                              />
                              <label htmlFor={`day-${day}`} className="ml-2 text-sm text-gray-700">
                                {day}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Available From
                          </label>
                          <input
                            id="startTime"
                            type="time"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            defaultValue="09:00"
                          />
                        </div>
                        <div>
                          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Available Until
                          </label>
                          <input
                            id="endTime"
                            type="time"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            defaultValue="18:00"
                          />
                        </div>
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

export default LawyerDashboardPage;