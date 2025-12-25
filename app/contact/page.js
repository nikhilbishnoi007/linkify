import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
            Contact Us
          </h1>
          <p className="mt-4 text-purple-700">
            Click below to connect with us directly.
          </p>
        </div>

       
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">

          
          <div>
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              Email
            </h2>
            <a href="mailto:bishnoinikhil35@gmail.com" className="text-purple-600 hover:underline break-all">
              bishnoinikhil35@gmail.com
            </a>
          </div>

         
          <div>
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              GitHub
            </h2>
            <a href="https://github.com/nikhilbishnoi007" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline break-all">
            https://github.com/nikhilbishnoi007
            </a>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              Why Contact Us
            </h2>
            <p className="text-purple-700 leading-relaxed">
              Share feedback, report issues, or suggest improvements.
              We keep communication simple and respectful of your privacy.
            </p>
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default Contact;
