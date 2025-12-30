import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const AboutPage = () => (
  <div className="pt-24 min-h-screen">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-16 items-center">
           <div className="md:w-1/2">
              <span className="text-amber-600 font-sans font-bold text-xs tracking-[0.2em] uppercase">About Kirti Tours</span>
              <h1 className="text-4xl font-bold text-blue-950 mt-4 mb-6">Ambassadors of Indian Hospitality</h1>
              <p className="text-gray-600 leading-relaxed mb-6 font-sans text-lg">
                Founded with a passion for showcasing the real India, KIRTI – Indian Excursion Tours is a premier Destination Management Company. 
                We specialize in crafting bespoke itineraries for discerning travelers from the US, UK, and Europe.
              </p>
              <p className="text-gray-600 leading-relaxed font-sans mb-8">
                We believe travel is not just about seeing places, but feeling them. Our team of local experts ensures you experience the 
                vibrant culture, deep history, and warm hospitality that India is famous for, all without compromising on comfort or safety.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="border-l-4 border-amber-500 pl-4">
                    <div className="text-3xl font-bold text-blue-950">15+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
                 </div>
                 <div className="border-l-4 border-amber-500 pl-4">
                    <div className="text-3xl font-bold text-blue-950">5k+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Happy Travelers</div>
                 </div>
              </div>
           </div>
           <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" className="rounded-lg shadow-2xl relative z-10" alt="Indian Culture" />
           </div>
        </div>
     </div>
  </div>
);
export default AboutPage;
