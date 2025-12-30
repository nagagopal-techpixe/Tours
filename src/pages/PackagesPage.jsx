import { useState } from "react";
import  useTours   from '../data/tours.js';

const PackagesPage = ({ navigateTo }) => {
   const { TOURS, loading, error } = useTours();
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'North India', 'South India', 'Heritage', 'Nature'];

  const filteredTours = filter === 'All' 
    ? TOURS 
    : TOURS.filter(t => t.region === filter || t.theme === filter);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="bg-blue-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Tour Collections</h1>
        <p className="text-blue-200 max-w-2xl mx-auto font-sans">
          From the snowy peaks of the Himalayas to the backwaters of Kerala, find your perfect Indian journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-sans text-sm font-semibold transition-all ${
                filter === f 
                  ? 'bg-amber-500 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => navigateTo('package-detail', tour)}>
              <div className="h-48 overflow-hidden rounded-t-lg relative">
                 <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white font-sans text-xs font-bold uppercase tracking-wider">{tour.duration}</span>
                 </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-amber-600 text-xs font-bold font-sans uppercase">{tour.region}</span>
                   <span className="text-gray-400 text-xs font-sans">{tour.theme}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-950 mb-2 leading-tight">{tour.title}</h3>
                <p className="text-gray-500 text-sm font-sans line-clamp-2 mb-4">{tour.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                   <span className="text-blue-900 font-bold">{tour.price}</span>
                   <span className="text-xs text-gray-400 font-sans uppercase">Per Person</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
