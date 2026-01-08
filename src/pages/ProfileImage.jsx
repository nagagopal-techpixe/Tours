import React from "react";
import bg from "../assets/travel.jpg";
/* -------------------- ICONS -------------------- */
const Trophy = () => (
  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
    🏆
  </div>
);

const Lightbulb = () => (
  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
    💡
  </div>
);

const Gear = () => (
  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
    ⚙️
  </div>
);

/* -------------------- INFO CARD -------------------- */
const InfoCard = ({ icon, title, description, className = "" }) => (
  <div
    className={`bg-white text-black p-6 md:p-8  shadow-lg text-center ${className}`}
  >
    <div className="mb-14 flex justify-center -mt-12">{icon}</div>
    <h3 className="font-bold text-lg md:text-xl mb-2">{title}</h3>
    {/* <h3 className="font-bold text-xl md:text-2xl mb-2">{title}</h3> */}

    <p className="text-gray-600 mb-4 text-md md:text-base">{description}</p>

    <a href="#" className="text-red-500 font-medium text-sm md:text-base  ">
      learn more
    </a>
  </div>
);

/* -------------------- MAIN COMPONENT -------------------- */
export default function ProfileAvatar() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-20 px-6"
      style={{
       backgroundImage: `url(${bg})`,
        //   'url("https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2829&auto=format&fit=crop")',
      }}
    >
   <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 -mt-10">
  <span className="absolute inset-0 -z-10 
    bg-gradient-to-b from-black/60 via-black/40 to-transparent
  "></span>

  <h1 className="text-3xl md:text-4xl font-serif uppercase leading-snug text-white drop-shadow-[0_6px_14px_rgba(0,0,0,1)] mb-10">
    THE EXPERTS IN TAILOR-MADE TOURS OF RAJASTHAN
  </h1>
</div>


      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
        {/* Left Card */}
        <InfoCard
          icon={<Trophy />}
          title="EXCEPTIONAL SERVICE"
          description="We're known for our personalised approach and fine attention to detail. Engaging with our guests is what it's all about for us."
          className="md:h-[360px] md:w-[300px]"
        />

        {/* Middle Card (taller & narrower) */}
        <InfoCard
          icon={<Lightbulb />}
          title="EXPERT KNOWLEDGE"
          description="We personally visit all the destinations and hotels we recommend, to ensure your experience is nothing short of amazing."
          className="md:min-h-[380px] md:w-[320px]"
        />

        {/* Right Card */}
        <InfoCard
          icon={<Gear />}
          title="100% TAILOR-MADE"
          description="All our tours are hand-crafted to suit your ideas, tastes and budget. Together we'll fine-tune your itinerary until it's just right."
          className="md:h-[360px] md:w-[300px]"
        />
      </div>
    </div>
  );
}
