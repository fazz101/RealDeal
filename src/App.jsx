import React from 'react';
import { useState } from 'react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const beforeAfterImages = [
    {
      before: '/ryanbefore.jpg',
      after: '/ryanafter.jpg',
      name: 'Ryan'
    },
    {
      before: '/alex1before.jpg',
      after: '/alex1after.jpg',
      name: 'Alex'
    },
    {
      before: '/jordanbefore.jpg',
      after: '/jordanafter.jpg',
      name: 'Jordan'
    },
    {
      before: '/chrisbefore.jpg',
      after: '/chrisafter (1).jpg',
      name: 'Chris'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-black">
        <img
          src="/clinicwall.jpeg"
          alt="R.O.B Hair Restoration Clinic"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">R.O.B Hair Restoration</h1>
            <p className="text-xl">Advanced Hair Transplant Solutions</p>
          </div>
        </div>
      </div>

      {/* Before & After Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Before & After Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={beforeAfterImages[currentImageIndex].before}
            alt="Before"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
          />
          <img
            src={beforeAfterImages[currentImageIndex].after}
            alt="After"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          {beforeAfterImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`px-4 py-2 rounded ${
                currentImageIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {image.name}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-center text-gray-600 mb-6">
                Ready to start your hair restoration journey? Contact us today for a consultation.
              </p>
              <a
                href="https://wa.me/+447888864682"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;