import React, { useState } from 'react';
import { Menu, Compass, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';
import image from "../assets/image.png";

// ---------- Header ----------
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44]/70 backdrop-blur-md border-b border-[#F0C75E]/30 transition-all duration-300">
    <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-4 cursor-pointer group">
        <Compass
          strokeWidth={1}
          className="w-6 h-6 md:w-8 md:h-8 text-[#F0C75E] group-hover:rotate-45 transition-transform duration-700 ease-out"
        />
        <span className="hidden md:block tracking-[0.2em] text-xs uppercase font-medium text-[#F0C75E]">
          Atlas & Co.
        </span>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <button className="hidden md:block text-xs tracking-[0.2em] hover:text-[#FF8C61] transition-colors duration-300">
          CONTACT US
        </button>
        <button className="p-2 hover:bg-[#F0C75E]/20 rounded-full transition-colors">
          <Menu strokeWidth={1} className="w-6 h-6 text-[#F0C75E]" />
        </button>
      </div>
    </div>
  </header>
);

// ---------- Page Title ----------
const PageTitle = () => (
  <div className="pt-40 pb-20 flex flex-col items-center justify-center text-center px-4 md:px-0">
    <div className="mb-6 opacity-80">
      <div className="w-[2px] h-12 bg-[#F0C75E] mx-auto mb-4 rounded"></div>
      <span className="text-[12px] tracking-[0.3em] uppercase text-white">
        Secure Payment
      </span>
    </div>
    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic tracking-wide mb-8 text-white">
      Checkout
    </h1>
    <div className="w-16 sm:w-24 h-[2px] bg-[#FF8C61]/50 rounded"></div>
  </div>
);

// ---------- Info Section ----------
const InfoSection = () => (
  <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[500px] border-t border-white/20 border-b">
    {/* Left Image */}
    <div className="relative h-[300px] sm:h-[380px] lg:h-auto overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/20 rounded-xl shadow-lg">
      <img
        src={image}
        alt="Luxury Travel Destination"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-20 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 md:gap-3 text-white mb-2 md:mb-4">
          <MapPin strokeWidth={1} size={18} />
          <span className="text-xs tracking-[0.2em] uppercase text-white/80">
            Headquarters
          </span>
        </div>
        <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-white drop-shadow-md">
          Pno C17 Paschim Vihar Kesopura, <br />
          A Block Ajmer road Jaipur
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <Phone strokeWidth={1} size={18} className="text-white" />
          <span className="text-sm md:text-base font-light tracking-wide text-white underline decoration-white/30 group-hover:decoration-white">
            +91 90014 59519 (24/7 Support)
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <Mail strokeWidth={1} size={18} className="text-white" />
          <span className="text-sm md:text-base font-light tracking-wide text-white underline decoration-white/30 group-hover:decoration-white">
            kirtiindianexcrusiontours@gmail.com
          </span>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 pt-4 border-t border-white/20 w-fit">
        <Instagram strokeWidth={1} size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
        <Facebook strokeWidth={1} size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
        <Twitter strokeWidth={1} size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
      </div>
    </div>
  </section>
);

// ---------- Input Field ----------
const InputField = ({ label, name, type = 'text', value, onChange, required = false, placeholder }) => (
  <div className="relative w-full mb-6 sm:mb-8">
    <label className="block text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[#FFD700] mb-1 sm:mb-2">
      {label} {required && <span className="text-[#FF7F50]">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={3}
        className="w-full bg-[#0A1F44]/70 border border-[#FFD700]/50 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-[#F5F5F5] placeholder-[#F5F5F5]/60 focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[#0A1F44]/70 border border-[#FFD700]/50 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-[#F5F5F5] placeholder-[#F5F5F5]/60 focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]"
      />
    )}
  </div>
);

// ---------- Checkout Form ----------
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="py-24 sm:py-32 text-center px-4">
        <div className="inline-block p-4 border border-[#FFD700] rounded-full mb-6">
          <Compass className="w-8 h-8 text-[#FFD700] animate-spin-slow" />
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl italic mb-4 text-[#FFD700]">Request Received</h3>
        <p className="opacity-70 font-light max-w-md mx-auto leading-relaxed text-[#F5F5F5]">
          Thank you, {formData.fullName.split(' ')[0]}.<br />
          Our concierge team will review your details and contact you shortly regarding your itinerary.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 sm:mt-12 text-xs tracking-[0.2em] hover:text-[#FF7F50] transition-colors"
        >
          RETURN TO FORM
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-24 backdrop-blur-sm rounded-xl shadow-xl bg-[#0A1F44]/40 mt-8">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-4 italic text-[#FFD700]">Your Details</h2>
        <p className="text-sm sm:text-base font-light opacity-70 text-[#F5F5F5]">
          Please provide your information to finalize the reservation inquiry.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="e.g. Eleanor Rigby" />
          <InputField label="Company" name="company" value={formData.company} onChange={handleChange} placeholder="Optional" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="name@example.com" />
          <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        </div>

        <InputField label="Message or Order Notes" name="message" type="textarea" value={formData.message} onChange={handleChange} placeholder="Any special requests regarding your stay..." />

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#FFD700] via-[#FF7F50] to-[#FFD700] text-[#0A1F44] font-semibold rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 justify-center"
          >
            {isSubmitting ? (
              <>
                PROCESSING <Loader2 className="animate-spin w-5 h-5" />
              </>
            ) : (
              <>
                PROCEED <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

// ---------- Footer ----------
const Footer = () => (
  <footer className="border-t border-[#FF7F50]/30 py-8 sm:py-12 text-center text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-50 text-[#F5F5F5]">
    <div className="mb-2 sm:mb-4">Atlas & Co. Luxury Travel</div>
    <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
  </footer>
);

// ---------- Contact Page ----------
const ContactPage = () => (
  <div className="bg-gradient-to-br from-blue-950 via-amber-600 to-yellow-500 p-4 sm:p-12 text-white min-h-screen flex flex-col relative overflow-hidden">
    {/* <Header /> */}
    <main className="flex-grow">
      <PageTitle />
      <InfoSection />
      <CheckoutForm />
    </main>
    {/* <Footer /> */}
  </div>
);

export default ContactPage;
