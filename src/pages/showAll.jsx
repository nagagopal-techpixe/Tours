import tour1 from "../assets/Gallery/tour1.jpeg";
import tour2 from "../assets/Gallery/tour2.jpeg";
import tour3 from "../assets/Gallery/tour3.jpeg";
import tour4 from "../assets/Gallery/tour4.jpeg";
import tour5 from "../assets/Gallery/tour5.jpeg";
import tour6 from "../assets/Gallery/tour6.jpeg";
import tour7 from "../assets/Gallery/tour7.jpeg";
import tour8 from "../assets/Gallery/tour8.jpeg";
import tour9 from "../assets/Gallery/tour9.jpeg";
import tour10 from "../assets/Gallery/tour10.jpeg";
import tour11 from "../assets/Gallery/tour11.jpeg";
import tour12 from "../assets/Gallery/tour12.jpeg";     
import tour13 from "../assets/Gallery/tour13.jpeg";
import tour14 from "../assets/Gallery/tour14.jpeg";
import tour15 from "../assets/Gallery/tour15.jpeg"; 
import tour16 from "../assets/Gallery/tour16.jpeg";
import tour17 from "../assets/Gallery/tour17.jpeg";
import tour18 from "../assets/Gallery/tour18.jpeg";
import tour19 from "../assets/Gallery/tour19.jpeg";
import tour20 from "../assets/bg1.jpeg";
import tour21 from "../assets/bg2.jpeg";
import tour22 from "../assets/bg3.jpeg";


const GALLERY_IMAGES = [
  tour21,tour1, tour2, tour3, tour4, tour6,
  tour7, tour8, tour9, tour22, tour11, tour12,
  tour13, tour14, tour20, tour16, tour17, tour18, tour19,tour15 ,tour10
];

const GalleryShowAll = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-blue-950 mb-10">
          Tour Gallery
        </h1>

        {/* Masonry-like Grid */}
      <div className="columns-3 gap-4">
  {GALLERY_IMAGES.map((src, i) => (
 <div className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow h-[280px]">
  <img
    src={src}
    alt={`tour-${i + 1}`}
    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
  />
</div>

  ))}
</div>


      </div>
    </section>
  );
};

export default GalleryShowAll;

// const GalleryShowAll = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h1 className="text-3xl font-bold text-blue-950 mb-10">
//           Tour Gallery
//         </h1>

//         {/* Masonry-like Grid */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
//           {GALLERY_IMAGES.map((src, i) => (
//             <div
//               key={i}
//               className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow"
//             >
//               <img
//                 src={src}
//                 alt={`tour-${i + 1}`}
//                 className="w-full h-auto object-contain object-center transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };