import React from "react";
import middleimage from "../assets/Jaipurfortblue.jpg"

const RajasthanHelpSection = () => {
  return (
    <section>
      {/* FULL WIDTH IMAGE */}
      <div className="w-full ">
        <img
          src={middleimage}
          alt="Rajasthan Tour"
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 bg-gray-70">

        <h2 className="text-center text-4xl font-bold text-blue-950 font-semibold tracking-widest mb-14">
          HOW WE CAN HELP WITH YOUR TOUR
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT TEXT */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              We believe that luxury travel is about more than opulent hotels.
              It’s about new experiences, stepping off the usual tourist
              circuit to embrace something more rewarding. We specialise in
              private tailor-made tours of Rajasthan (some might call us a
              ‘boutique tour operator’), which are perfect for cultural journeys,
              honeymoons and wildlife adventure.
            </p>

            <p>
              Our guests are mostly private individuals who have always dreamt
              of travelling to India but who realise the amount of planning
              required. They recognise that their time is their most precious
              asset and that they want to entrust it to experts with a
              well-proven track record.
            </p>


            <p>
              Personal service is at the heart of what we do. Indian Excursions,
              which has grown a reputation for its attention to detail and
              friendly approach, wouldn’t be the same otherwise.
            </p>
          </div>

          {/* RIGHT QUOTE */}
          <div className="flex items-start">
            <p className="italic text-2xl leading-relaxed text-gray-800">
              We are truly passionate about and inspired by Rajasthan. This will
              become obvious as soon as you contact us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RajasthanHelpSection;
