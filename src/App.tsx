import { Clock, MapPin, Calendar, MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const destinations = [
    {
      id: 1,
      title: "Paris 1889",
      subtitle: "La Belle Époque",
      description: "Witness the unveiling of the Eiffel Tower and experience the grandeur of the World's Fair",
      price: "€12,500",
      image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
      year: "1889",
      duration: "7 Days"
    },
    {
      id: 2,
      title: "Cretaceous Period",
      subtitle: "67 Million Years Ago",
      description: "Journey to a prehistoric world where mighty dinosaurs roam and nature reigns supreme",
      price: "€28,900",
      image: "https://images.pexels.com/photos/3714898/pexels-photo-3714898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      year: "67M BCE",
      duration: "4 Days"
    },
    {
      id: 3,
      title: "Florence 1504",
      subtitle: "Renaissance Glory",
      description: "Meet the masters of the Renaissance and witness the birth of modern art and science",
      price: "€15,750",
      image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      year: "1504",
      duration: "6 Days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">TimeTravel Agency</span>
            </div>
            <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-32">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Journey Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Time & History
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience the luxury of time travel with our exclusive, curated journeys to history's most magnificent moments
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/50">
                Explore Destinations
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-amber-400/50">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">500+</div>
              <div className="text-gray-300 mt-2">Temporal Destinations</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">10K+</div>
              <div className="text-gray-300 mt-2">Time Travelers</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">100%</div>
              <div className="text-gray-300 mt-2">Safe Return Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-400">
            Handpicked journeys to the most extraordinary moments in time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-amber-400/40 hover:border-amber-400/80 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-amber-500 text-gray-900 font-bold rounded-full">
                  {destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {destination.title}
                  </h3>
                  <p className="text-amber-400 text-sm font-semibold">
                    {destination.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-amber-400/20">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{destination.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-bold rounded-full transition-all duration-300 transform group-hover:scale-105">
                  Reserve Journey
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-amber-400/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold text-white">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400">
              Your gateway to history's most magnificent moments
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 TimeTravel Agency. All rights reserved across all timelines.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="mb-4 w-80 md:w-96 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-400/30 overflow-hidden animate-slide-up">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">Time Travel Assistant</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-900 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-80 p-4 overflow-y-auto space-y-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gray-900" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm text-white">
                    Welcome to TimeTravel Agency! How can I assist you with your journey through time today?
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-amber-400/20">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about our destinations..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
                <button className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                  <Send className="w-4 h-4 text-gray-900" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50 transition-all duration-300 transform hover:scale-110"
        >
          {chatOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <MessageCircle className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
