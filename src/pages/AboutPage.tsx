import { Award, Scale, Users, Landmark, BarChart, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-6">About Legal-Sahayak</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're on a mission to make legal assistance accessible and affordable for every Indian citizen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Legal-Sahayak was founded in 2023 with a simple yet powerful vision: to bridge the gap between complex legal systems and the common citizens of India.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We recognized that many Indians struggle to navigate the legal landscape due to its complexity, language barriers, and the intimidating nature of the legal process. This often leads to justice being inaccessible for those who need it most.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our team of dedicated legal professionals came together to create a platform that simplifies legal assistance and makes it accessible to everyone, regardless of their background or resources.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Legal professionals meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Landmark className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, affordable, and high-quality legal assistance to all citizens of India, ensuring that justice is not a privilege but a right that everyone can exercise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Scale className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A society where legal awareness is widespread, where citizens are empowered to understand and exercise their rights, and where access to justice is equitable and universal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Legal-Sahayak, our work is guided by a set of core values that define who we are and how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe in breaking down barriers to legal assistance, making our services available to everyone regardless of location, language, or financial status.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to maintaining the highest standards of legal expertise and professional service in everything we do.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <BarChart className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We operate with complete transparency, ensuring our clients understand every step of the legal process and the costs involved.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Clock className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsiveness</h3>
              <p className="text-gray-600">
                We recognize that time is often critical in legal matters, and we are committed to responding promptly to our clients' needs.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Scale className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards in all our dealings, maintaining confidentiality and acting in the best interests of our clients.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <Landmark className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We aim to empower our clients through education and awareness, enabling them to make informed decisions about their legal matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead Legal-Sahayak in our mission to provide accessible legal assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="/sumit.jpg" // Replace with actual image path
                alt="Sumit Kumar Jha" 
                className="h-40 w-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Sumit Kumar Jha</h3>
              <p className="text-blue-900 mb-2">Co-Founder and CEO</p>
              <p className="text-gray-600 mb-4">
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="/abhinav.jpg" // Replace with actual image path
                alt="Abhinav Anand" 
                className="h-40 w-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Abhinav Anand</h3>
              <p className="text-blue-900 mb-2">Co-Founder and CFO</p>
              <p className="text-gray-600 mb-4">
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="/lekhraj.jpg" // Replace with actual image path
                alt="Lekhraj Sorout" 
                className="h-40 w-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Lekhraj Sorout</h3>
              <p className="text-blue-900 mb-2">Co-Founder and CTO</p>
              <p className="text-gray-600 mb-4">
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;