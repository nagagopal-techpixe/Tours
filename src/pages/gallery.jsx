import tour1 from "../assets/Gallery/tour1.jpeg";
import tour2 from "../assets/Gallery/tour9.jpeg";
import tour3 from "../assets/Gallery/tour3.jpeg";
import tour4 from "../assets/Gallery/tour4.jpeg";
import tour5 from "../assets/Gallery/tour7.jpeg";
import tour6 from "../assets/Gallery/tour6.jpeg";
import tour14 from "../assets/Gallery/tour14.jpeg";
import tour18 from "../assets/Gallery/tour18.jpeg";
import tour20 from "../assets/bg3.jpeg";


import t1 from "../assets/Gallery/t1.jpg"
import t2 from "../assets/Gallery/t2.jpg"
import t3 from "../assets/Gallery/t3.jpg"
import t4 from "../assets/Gallery/t4.jpg"
import t5 from "../assets/Gallery/t5.jpg"
import t6 from "../assets/Gallery/t6.jpg"
import t7 from "../assets/Jaipurfortblue.jpg"
import t8 from "../assets/Jaipurfortcopy.jpg"
import t9 from "../assets/bg10.jpg"
import t10 from "../assets/Gallery/t8.jpg"
import t11 from "../assets/Gallery/t9.jpg"
import t12 from "../assets/Gallery/t10.jpg"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"
const GALLERY_IMAGES = [
  { src: tour3, title: "Kashmir", height: "h-[220px]", width: "w-[200px]"},
  { src: tour14, title: "Goa Tour", height: "h-[280px]", width: "w-[260px]"},
  { src: tour18, title: "Kerala", height: "h-[240px]", width: "w-[280px]" },
  { src: tour4, title: "Gujarat", height: "h-[230px]" ,width: "w-[260px]"},
  { src: tour5, title: "Andaman", height: "h-[270px]", width: "w-[300px]" },
  { src: tour20, title: "Rajasthan", height: "h-[290px]", width: "w-[280px]" },
];

const FEATURED_IMAGES = [
    { src: t10, title: "Historic View", height: "h-[260px]", shape: "rounded-xl" },
  { src: t11, title: "City Life", height: "h-[300px]", shape: "rounded-2xl" },
  { src: t12, title: "Traditional Art", height: "h-[240px]", shape: "rounded-xl" },
  
  { src: t1, title: "Adventure", height: "h-[300px]", shape: "rounded-3xl" },
  { src: t2, title: "Mountains", height: "h-[220px]", shape: "rounded-xl" },
  { src: t3, title: "Beach", height: "h-[260px]", shape: "rounded-xl" },

  { src: t7, title: "Jaipur Fort", height: "h-[260px]", shape: "rounded-xl" },
  { src: t8, title: "Royal Jaipur", height: "h-[300px]", shape: "rounded-2xl" },
  { src: t9, title: "Landscape", height: "h-[230px]", shape: "rounded-xl" },

  

  { src: t4, title: "Nature", height: "h-[240px]", shape: "rounded-2xl" },
  { src: t5, title: "Culture", height: "h-[280px]", shape: "rounded-xl" },
  { src: t6, title: "Heritage", height: "h-[230px]", shape: "rounded-3xl" },


];



const GallerySection = ({navigateTo}) => {
  const [showAll, setShowAll] = useState(false);
  
//    const navigate = useNavigate();
  return (
  <section className="py-16 bg-white -mt-20">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-blue-950">
          Moments From Our Tours
        </h2>
       <button
  onClick={() => navigateTo("gallery")}
  className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold tracking-wide shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all"
>
  View all →
</button>


      </div>
{/* Featured Top Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {FEATURED_IMAGES.map((img, i) => (
    <div
      key={i}
      className={`relative overflow-hidden shadow-lg ${img.height} ${img.shape}`}
    >
      <img
        src={img.src}
        alt={img.title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  ))}
</div>


      {/* Grid */}
      {/* <div className="grid grid-cols-3 gap-6"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {GALLERY_IMAGES.map((img, i) => (
    <div
      key={i}
      className={`
        relative overflow-hidden rounded-[14px] shadow
      $${img.width} ${img.height}
      `}
    >
      <img
        src={img.src}
        alt={img.title}
        className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
      />
    </div>
  ))}
</div>

{/* Center Button */}
<div className="w-full flex justify-center mt-12">
  <button
    onClick={() => navigateTo("gallery")}
    className="text-blue-950 font-sans font-bold uppercase text-sm tracking-wide 
               border-b-2 border-amber-500 hover:text-amber-600 pb-1 transition-colors"
  >
    View All Our Tours
  </button>
</div>


    </div>
  </section>
);
}
export default GallerySection;
