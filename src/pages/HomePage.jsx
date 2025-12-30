// ./pages/HomePage.jsx
import React from 'react';
import  useTours   from '../data/tours.js'; // if you put mock data in a separate file
import { TESTIMONIALS } from '../data/testimonials.js'; // if you put mock data in a separate file

import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const HomePage = ({ navigateTo }) => {
     const { TOURS, loading, error } = useTours();
  
    if (loading) return <p>Loading tours...</p>;
    if (error) return <p>Error: {error}</p>;
  return(

  <div>
    {/* Hero Section */}
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-blue-950">
        <img 
          src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&q=80&w=1920" 
          alt="Taj Mahal India" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block border border-amber-500/50 text-amber-400 px-4 py-1 rounded-full text-xs font-sans tracking-[0.2em] mb-6 animate-fade-in-up">
          LUXURY TOURS INDIA
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg leading-tight animate-fade-in-up delay-100">
          Discover India the Way <br/>
          <span className="text-amber-500 italic font-light">It’s Meant to Be Experienced</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-sans font-light animate-fade-in-up delay-200">
          Private chauffeurs, heritage palaces, and immersive cultural experiences tailored just for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button 
            onClick={() => navigateTo('custom-tour')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-sm font-sans font-bold uppercase tracking-wider transition-colors shadow-lg"
          >
            Plan My Trip
          </button>
          <button 
            onClick={() => navigateTo('packages')}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-950 px-8 py-4 rounded-sm font-sans font-bold uppercase tracking-wider transition-colors"
          >
            View Packages
          </button>
        </div>
      </div>
    </div>

    {/* Featured Packages */}
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-sans font-bold text-xs tracking-[0.2em] uppercase">Handpicked Itineraries</span>
          <h2 className="text-4xl font-bold text-blue-950 mt-3 mb-6">Signature Tours</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TOURS.slice(0,3).map((tour) => (
            <div key={tour.id} className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100" onClick={() => navigateTo('package-detail', tour)}>
              <div className="relative h-64 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-blue-950 text-white px-3 py-1 text-xs font-bold font-sans uppercase tracking-wider rounded-sm">
                  {tour.duration}
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-sans font-bold text-amber-600 mb-2 uppercase tracking-wide">{tour.region}</div>
                <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-amber-600 transition-colors">{tour.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 font-sans text-sm">{tour.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 font-sans">
                  <span className="text-gray-500 text-sm">From <span className="text-lg font-bold text-blue-950">{tour.price}</span> / pp</span>
                  <div className="flex items-center gap-1 text-amber-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => navigateTo('packages')} className="text-blue-950 font-sans font-bold uppercase text-sm border-b-2 border-amber-500 hover:text-amber-600 pb-1 transition-colors">
            View All 40+ Packages
          </button>
        </div>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-sans font-bold text-xs tracking-[0.2em] uppercase">The Kirti Difference</span>
            <h2 className="text-4xl font-bold text-blue-950 mt-3 mb-6">Experience India Without The Hassle</h2>
            <p className="text-gray-600 mb-8 font-sans leading-relaxed">
              We understand that traveling to India can be overwhelming. Our mission is to provide a seamless, safe, and luxurious environment so you can focus on the magic of the destination.
            </p>
            <div className="space-y-6">
              {[
                { title: "Personal Chauffeur", desc: "English-speaking drivers in luxury AC vehicles." },
                { title: "Handpicked Hotels", desc: "Heritage palaces and 5-star boutique stays." },
                { title: "24/7 Support", desc: "A dedicated trip manager available on WhatsApp." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 shadow-sm flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-amber-100 rounded-3xl transform translate-x-4 -translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Travel India" 
              className="relative rounded-2xl shadow-2xl z-10 w-full"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="py-24 bg-blue-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold mb-4">Guest Stories</h2>
           <p className="text-blue-200 font-sans">Trusted by travelers from over 50 countries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-blue-900/50 p-8 rounded-xl border border-blue-800 backdrop-blur-sm">
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="italic text-gray-300 mb-6 font-serif text-lg leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <span className="text-xs text-amber-500 font-sans uppercase tracking-wider">{t.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default HomePage;
