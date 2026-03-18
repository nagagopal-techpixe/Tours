import React from "react";
import { CheckCircle } from "lucide-react";

const photos = [
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/IMG_1998-scaled.jpg?resize=560%2C460&ssl=1",
    caption: "Madeleine and Shiv at Nawal Sagar Lake in Bundi, Rajasthan",
  },
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/IMG_2390-scaled.jpg?ssl=1",
    caption: "Shiv climbing Elephant Hill, Narlai",
  },
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/IMG_1982-e1499260109616.jpg?ssl=1",
    caption: "Observing wildlife at Ranthambhore",
  },
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/IMG_17161-scaled.jpg?ssl=1",
    caption: "Madeleine at the Taj Mahal",
  },
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/DSC03607.jpg?ssl=1",
    caption: "Maddie and Shiv with recent guests of Indian Excursions",
  },
   {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2017/04/IMG_4624-scaled.jpg?ssl=1",
    caption: "Madeleine Hann, co-founder at Indian Excursions, with The Serai team during her recent stay",
  },
  {
    src: "	https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/12/IMG_4380-scaled.jpg?ssl=1",
    caption: "Madeleine and Shiv, co-founders, in Jaisalmer",
  },
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2017/02/king-air-c90-charter-flight-luxury-rajasthan-tour.jpg?ssl=1",
    caption: "Madeleine Hann and Captain Nanda outside the King Air C90",
  },
  {
    src: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2017/04/IMG_5079-scaled.jpg?ssl=1",
    caption: "Madeleine and Shiv in the Jeep provided by Lakshman Sagar",
  },
  
];
const founders = [
  {
    name: "Madeleine Hann",
    role: "Co-Founder",
    content:"I take care of our guests before they arrive in India. I'm our Tour Designer and it's my job to create your itinerary. I'm there every step of the way, to ensure that your trip to India runs smoothly.",
    image: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/madeleine-maddie-hann-indian-excursions-co-scaled.jpg?resize=456%2C456&ssl=1",
  },
  {
    name: "Shiv Gurjar",
    role: "Co-Founder",
    content:"I'm in charge of operations, so I take care of you when you arrive in India. It's me who does a lot of the behind-the-scenes tasks, such as communicating with drivers and guides.",
    image: "https://i0.wp.com/www.indianexcursions.co/wp-content/uploads/2015/10/shiv-gurjar-indian-excursions-co.jpg?resize=456%2C456&ssl=1", // add correct image URL
  },
];

const AboutPage = () => (
  <div className="pt-24 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="md:w-1/2">
          <span className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase">
            About Kirti Indian Excursion Tours
          </span>
          <h1 className="text-4xl font-bold text-blue-950 mt-4 mb-6">
            Tailor-Made Luxury Journeys Through India
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
           Kirti Indian Excursion Tour is a boutique luxury tour operator specialising in fully customised, private travel experiences across India, with a particular focus on Rajasthan. Founded in 2025, we design journeys for travellers seeking comfort, authenticity, and exceptional service.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
           From the earliest planning stages to on-ground execution, every detail of your journey is personally handled with care to ensure a seamless and enriching travel experience.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We believe true luxury lies in meaningful experiences — hand-picked hotels, thoughtfully designed routes, and cultural encounters that go beyond standard tourist paths. Each itinerary is refined without limitation until it perfectly reflects your interests and travel style.
          </p>
          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle className="text-amber-500 mt-1" />
              <p className="text-gray-700">Fully bespoke private tours designed around you</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-amber-500 mt-1" />
              <p className="text-gray-700">Personally tested hotels, routes, and experiences</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-amber-500 mt-1" />
              <p className="text-gray-700">Deep local expertise with international standards</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-amber-500 mt-1" />
              <p className="text-gray-700">Dedicated support from planning to departure</p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-3xl font-bold text-blue-950">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Customised Itineraries</div>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN IMAGE */}
        <div className="md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=900"
            alt="Luxury Travel in India"
            className="rounded-lg shadow-2xl relative z-10"
          />
        </div>
      </div>


    </div>
  </div>
);

export default AboutPage;
