const PackageDetailPage = ({ tour, navigateTo }) => {
  const [activeDay, setActiveDay] = useState(null);

  if (!tour) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <div className="pt-24 min-h-screen">
      {/* Banner */}
      <div className="h-[50vh] relative">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <div>
             <span className="text-amber-400 font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2 block">{tour.duration}</span>
             <h1 className="text-5xl font-bold text-white mb-6 max-w-4xl">{tour.title}</h1>
             <button onClick={() => navigateTo('custom-tour')} className="bg-amber-500 text-white px-8 py-3 rounded-sm font-bold uppercase font-sans hover:bg-amber-600 transition">
               Book This Tour
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Tour Overview</h2>
          <p className="text-gray-600 font-sans text-lg leading-relaxed mb-12">
            {tour.description} This itinerary is designed to give you a leisurely pace while covering the most iconic sights. 
            Accommodations are in 4-star and 5-star heritage properties.
          </p>

          <h3 className="text-2xl font-bold text-blue-950 mb-8">Itinerary</h3>
          <div className="space-y-4">
            {tour.itinerary.map((day, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setActiveDay(activeDay === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-sans text-sm">
                      {day.day}
                    </span>
                    <span className="font-bold text-blue-950 text-lg">{day.title}</span>
                  </div>
                  {activeDay === idx ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {activeDay === idx && (
                  <div className="p-6 bg-white border-t border-gray-100 text-gray-600 font-sans leading-relaxed animate-fade-in-down">
                    {day.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Pricing Card */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500 sticky top-28">
            <div className="text-center pb-6 border-b border-gray-100 mb-6">
              <span className="text-gray-500 font-sans text-sm">Starting From</span>
              <div className="text-4xl font-bold text-blue-950 mt-2">{tour.price}</div>
              <span className="text-xs text-gray-400 font-sans">per person on twin sharing</span>
            </div>

            <ul className="space-y-4 mb-8 font-sans text-sm text-gray-600">
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> Private AC Vehicle</li>
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> English Speaking Guide</li>
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> Breakfast Daily</li>
               <li className="flex items-center gap-3"><CheckCircle size={16} className="text-green-500" /> All Entrance Fees</li>
            </ul>

            <button 
              onClick={() => navigateTo('custom-tour')} 
              className="w-full bg-blue-950 text-white py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-blue-900 transition mb-4"
            >
              Enquire Now
            </button>
            <p className="text-center text-xs text-gray-400">No payment required today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};