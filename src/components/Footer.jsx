// components/Footer.jsx
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import logo from "../assets/logoresize3.png";

const Footer = ({ navigateTo }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-amber-800 to-orange-800 text-white pt-16 pb-8 border-t-4 border-amber-500 font-sans relative overflow-hidden">

      {/* Luxury Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/15 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-400/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-500/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-36 h-20 flex items-center justify-center ">
                <img src={logo} alt="Logo" className="w-96 h-20 object-contain" />
              </div>
            </div>

            <p className="text-base text-gray-200 leading-relaxed mb-3 -mt-4">
              Redefining luxury travel in India. We curate personalized journeys that blend heritage, culture, and comfort.
            </p>


            {/* Newsletter Subscription */}
            <div>
             

          <div className="mt-4 flex flex-col items-center text-center">



</div>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white-300 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li onClick={() => navigateTo('about')} className="cursor-pointer transition text-base hover:text-amber-300">About Us</li>
              <li onClick={() => navigateTo('packages')} className="cursor-pointer transition text-base hover:text-amber-300">Tour Packages</li>
              <li onClick={() => navigateTo('plan-your-own-tour')} className="cursor-pointer transition text-base hover:text-amber-300">Plan-your-own-tour</li>
              <li onClick={() => navigateTo('contact')} className="cursor-pointer transition text-base hover:text-amber-300">Contact</li>

              {/* <li className="cursor-pointer transition text-base hover:text-amber-300">Blog</li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white-300 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="cursor-pointer transition text-base hover:text-amber-300">Privacy Policy</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Terms & Conditions</li>
              <li className="cursor-pointer transition text-base hover:text-amber-300">Payment Security</li>
              {/* <li className="cursor-pointer transition text-base hover:text-amber-300">Admin Panel</li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white-300 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>P.No: C7, Jain Vihar, C Block, <br></br>Ajmer road, Jaipur.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 90014 59519</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <span>kirtiindianexcrusiontours@gmail.com</span>
              </li>
              <li> <div className="flex space-x-4 mb-5">
              <a
      href="https://www.instagram.com/kirtiindianexcursiontours?igsh=czJzczVmdmU2dGk4&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram
        size={20}
        className="text-gray-300 hover:text-amber-400 cursor-pointer"
      />
    </a><span>Instagram</span>
            </div></li>
            </ul>
          </div>
        </div>
          <div className="w-full max-w-sm mx-auto flex items-center gap-2 ">

    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      className="w-full px-3 py-2 rounded-lg text-black focus:outline-none"
    />

    <button
      onClick={handleSubscribe}
      className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-3 py-2 rounded-lg"
    >
      Subscribe
      </button>
    </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200">
          <p>© {new Date().getFullYear()} KIRTI Indian Excursion Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Made with Love in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// components/Footer.jsx



// import React from "react";
// import { MapPin, Phone, Mail, Instagram } from "lucide-react";

// const Footer = ({ navigateTo }) => {
//   return (
//     <footer className="bg-black text-gray-400 pt-20 pb-8">
//       <div className="max-w-7xl mx-auto px-6 lg:px-16">

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

//           {/* WHO ARE WE */}
//           <div>
//             <h4 className="text-white font-semibold tracking-widest mb-6 uppercase text-sm">
//               Who Are We?
//             </h4>
//             <p className="text-sm leading-7">
//               Indian Excursion Tours are specialists in curated luxury travel
//               across India. From heritage destinations to immersive cultural
//               journeys, we deliver private, tailor-made experiences with
//               impeccable service and attention to detail.
//             </p>
//           </div>

//           {/* SAY HELLO */}
//            {/* SAY HELLO */}
//           <div>
//             <h3 className="text-white font-semibold tracking-wider mb-6">
//               SAY HELLO!
//             </h3>
//             <p className="text-sm leading-7">
//               +91 90014 59519<br />
//              kirtiindianexcrusiontours@gmail.com <br />
//                Pno:C17, Paschim Vihar, A Block, Ajmer Road, Jaipur <br />
//             </p>

//             <p className="text-sm italic mt-6 text-gray-400">
//               Our regular working hours are weekdays from 10 am – 6 pm IST
//               (+5.5 UTC).
//             </p>
//           </div>

//           {/* A BIT OF INFO */}
//           <div>
//             <h4 className="text-white font-semibold tracking-widest mb-6 uppercase text-sm">
//               A Bit of Info
//             </h4>

//             <ul className="space-y-3 text-sm">
//               <li className="hover:text-white cursor-pointer">
//                 Accredited by IATO
//               </li>
//               <li
//                 onClick={() => navigateTo("about")}
//                 className="hover:text-white cursor-pointer"
//               >
//                 About Us
//               </li>
//               <li className="hover:text-white cursor-pointer">
//                 How to Book
//               </li>
//               <li className="hover:text-white cursor-pointer">
//                 Rajasthan Travel Tips
//               </li>
//               <li className="hover:text-white cursor-pointer">
//                 Terms and Conditions
//               </li>
//               <li
//                 onClick={() => navigateTo("contact")}
//                 className="hover:text-white cursor-pointer"
//               >
//                 Contact Us
//               </li>
//             </ul>
//           </div>

//           {/* TRUSTPILOT */}
//          {/* TRUSTPILOT */}
// <div>
//   <h4 className="text-white font-semibold tracking-widest mb-6 uppercase text-sm">
//     Trustpilot
//   </h4>

//   {/* Stars */}
//   <div className="flex gap-2 mb-3">
//     {[...Array(5)].map((_, i) => (
//       <div
//         key={i}
//         className="w-8 h-8 bg-green-500 flex items-center justify-center text-white"
//       >
//         ★
//       </div>
//     ))}
//   </div>

//   <p className="text-sm text-gray-500 mb-6">
//     TrustScore <span className="text-white font-semibold">4.9</span> |
//     <span className="text-white font-semibold"> 300+ reviews</span>
//   </p>

//   {/* SUBSCRIPTION */}
//   <div className="mt-6">
//     <p className="text-white text-sm font-semibold mb-3">
//       Subscribe to our newsletter
//     </p>

//     <div className="flex gap-2">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="w-full px-3 py-2 text-black text-sm rounded-md focus:outline-none"
//       />
//       <button
//         className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 rounded-md text-sm"
//       >
//         Go
//       </button>
//     </div>
//   </div>

//   {/* SOCIAL */}
//  <div className="flex items-center gap-3 mt-6">
//   <a
//     href="https://www.instagram.com/kirtiindianexcursiontours?igsh=czJzczVmdmU2dGk4&utm_source=qr"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 hover:text-white"
//   >
//     <Instagram size={18} className="cursor-pointer" />
//     <span className="text-sm">Instagram</span>
//   </a>
// </div>

// </div>

//         </div>

//         {/* BOTTOM */}
//         <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
//           © {new Date().getFullYear()} KIRTI Indian Excursion Tours. All rights
//           reserved.
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
