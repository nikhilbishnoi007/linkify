import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-purple-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
            About Us
          </h1>
          <p className="mt-4 text-purple-700 max-w-2xl mx-auto">
            We build simple, secure and user friendly applications that solve
            real world problems.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              Who We Are
            </h2>
            <p className="text-purple-700 leading-relaxed mb-4">
              We are passionate developers focused on creating clean and
              efficient digital products. Our goal is to deliver applications
              that are easy to use, reliable and secure.
            </p>
            <p className="text-purple-700 leading-relaxed">
              From frontend design to backend logic, we pay attention to every
              detail to ensure a smooth user experience.
            </p>
          </div>

          {/* Card Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              What We Offer
            </h3>

            <ul className="space-y-3 text-purple-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                Modern and responsive UI
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                Secure data handling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                Clean and maintainable code
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                Scalable architecture
              </li>
            </ul>
          </div>

        </div>

       

      </div>
    </div>
  );
};

export default About;
