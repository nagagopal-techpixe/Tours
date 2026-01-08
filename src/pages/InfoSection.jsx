import React, { useState, useEffect } from 'react';
import { Menu, Compass, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';

// --- Styles & Animation ---
// Injecting specific fonts and keyframe animations via a style tag for self-containment
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500&display=swap');

    :root {
      --bg-primary: #0a0a0a;
      --text-primary: #f5f5f0;
      --border-light: rgba(245, 245, 240, 0.25);
      --accent-soft: #cbbfa5;
    }

    body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-family: 'Montserrat', sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    .font-editorial {
      font-family: 'Cormorant Garamond', serif;
    }

    /* Smooth Appearance Animations */
    .animate-fade-in-up {
      animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .animate-fade-in {
      animation: fadeIn 1.5s ease-out forwards;
      opacity: 0;
    }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-500 { animation-delay: 0.5s; }

    @keyframes fadeInUp {
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }

    /* Custom Input Styling to remove autofill background colors */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      -webkit-text-fill-color: #f5f5f0;
      -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    /* Underline hover effect for links */
    .hover-underline {
      position: relative;
      text-decoration: none;
    }
    .hover-underline::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -4px;
      left: 0;
      background-color: var(--accent-soft);
      transition: width 0.4s ease;
    }
    .hover-underline:hover::after {
      width: 100%;
    }
  `}</style>
);

// --- Components ---

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#f5f5f0]/10">
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Brand Icon */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <Compass strokeWidth={1} className="w-8 h-8 text-[#cbbfa5] group-hover:rotate-45 transition-transform duration-700 ease-out" />
          <span className="hidden md:block tracking-[0.2em] text-xs uppercase font-medium opacity-80">Atlas & Co.</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-8">
          <button className="hidden md:block text-xs tracking-[0.2em] hover:text-[#cbbfa5] transition-colors duration-300">
            CONTACT US
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu strokeWidth={1} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

const PageTitle = () => (
  <div className="pt-40 pb-20 flex flex-col items-center justify-center text-center animate-fade-in-up">
    <div className="mb-6 opacity-60">
      <div className="w-[1px] h-12 bg-[#cbbfa5] mx-auto mb-4"></div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#cbbfa5]">Secure Payment</span>
    </div>
    <h1 className="font-editorial text-5xl md:text-7xl font-light italic tracking-wide mb-8">
      Checkout
    </h1>
    <div className="w-24 h-[1px] bg-[#f5f5f0]/30"></div>
  </div>
);

const InfoSection = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-t border-[#f5f5f0]/10 border-b">
      {/* Left: Editorial Image */}
      <div className="relative h-[400px] lg:h-auto overflow-hidden group border-b lg:border-b-0 lg:border-r border-[#f5f5f0]/10">
        <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Luxury Travel Destination" 
          className="w-full h-full object-cover grayscale-[30%] opacity-80 transition-all duration-[2s] scale-100 group-hover:scale-105 group-hover:grayscale-0 animate-fade-in"
        />
        <div className="absolute bottom-8 left-8 z-20">
          <p className="font-editorial text-2xl italic">The Alpine Retreat</p>
          <p className="text-xs tracking-widest mt-2 opacity-70 uppercase">Switzerland</p>
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex flex-col justify-center p-12 md:p-20 space-y-12 animate-fade-in-up delay-200">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-[#cbbfa5] mb-4">
            <MapPin strokeWidth={1} size={18} />
            <span className="text-xs tracking-[0.2em] uppercase">Headquarters</span>
          </div>
          <p className="font-editorial text-3xl leading-relaxed">
            1290 Avenue of the Americas<br/>
            New York, NY 10104
          </p>
        </div>

        <div className="space-y-6">
           <div className="flex items-center gap-4 group cursor-pointer">
              <Phone strokeWidth={1} size={18} className="text-[#cbbfa5]" />
              <span className="text-sm font-light tracking-wide hover-underline">+1 (212) 555-0199</span>
           </div>
           <div className="flex items-center gap-4 group cursor-pointer">
              <Mail strokeWidth={1} size={18} className="text-[#cbbfa5]" />
              <span className="text-sm font-light tracking-wide hover-underline">concierge@atlasco.com</span>
           </div>
        </div>

        <div className="flex gap-6 pt-4 border-t border-[#f5f5f0]/10 w-fit">
          <Instagram strokeWidth={1} size={20} className="hover:text-[#cbbfa5] cursor-pointer transition-colors" />
          <Facebook strokeWidth={1} size={20} className="hover:text-[#cbbfa5] cursor-pointer transition-colors" />
          <Twitter strokeWidth={1} size={20} className="hover:text-[#cbbfa5] cursor-pointer transition-colors" />
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, required = false, placeholder }) => (
  <div className="group relative w-full mb-10">
    <label className="block text-[10px] tracking-[0.2em] uppercase opacity-60 mb-3 group-focus-within:text-[#cbbfa5] group-focus-within:opacity-100 transition-all duration-300">
      {label} {required && <span className="text-[#cbbfa5]">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={3}
        className="w-full bg-transparent border-b border-[#f5f5f0]/30 py-2 text-lg font-light focus:outline-none focus:border-[#cbbfa5] transition-colors placeholder-[#f5f5f0]/20 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#f5f5f0]/30 py-2 text-lg font-light focus:outline-none focus:border-[#cbbfa5] transition-colors placeholder-[#f5f5f0]/20"
      />
    )}
  </div>
);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="py-32 text-center animate-fade-in-up">
        <div className="inline-block p-4 border border-[#cbbfa5] rounded-full mb-6">
          <Compass className="w-8 h-8 text-[#cbbfa5] animate-spin-slow" />
        </div>
        <h3 className="font-editorial text-4xl italic mb-4">Request Received</h3>
        <p className="opacity-70 font-light max-w-md mx-auto leading-relaxed">
          Thank you, {formData.fullName.split(' ')[0]}.<br/>
          Our concierge team will review your details and contact you shortly regarding your itinerary.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-12 text-xs tracking-[0.2em] hover:text-[#cbbfa5] transition-colors"
        >
          RETURN TO FORM
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-24 animate-fade-in-up delay-300">
      <div className="mb-16 text-center">
        <h2 className="font-editorial text-4xl mb-4 italic">Your Details</h2>
        <p className="text-sm font-light opacity-60">Please provide your information to finalize the reservation inquiry.</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <InputField 
            label="Full Name" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
            placeholder="e.g. Eleanor Rigby"
          />
          <InputField 
            label="Company" 
            name="company" 
            value={formData.company} 
            onChange={handleChange} 
            placeholder="Optional"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <InputField 
            label="Email Address" 
            name="email" 
            type="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="name@example.com"
          />
          <InputField 
            label="Phone Number" 
            name="phone" 
            type="tel"
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <InputField 
          label="Message or Order Notes" 
          name="message" 
          type="textarea"
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Any special requests regarding your stay..."
        />

        <div className="mt-12 flex flex-col items-center">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="group relative px-12 py-4 bg-transparent border border-[#f5f5f0]/20 hover:border-[#cbbfa5] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#cbbfa5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 flex items-center gap-4 text-xs tracking-[0.25em] group-hover:text-[#0a0a0a] transition-colors duration-500">
              {isSubmitting ? (
                <>
                  PROCESSING <Loader2 className="animate-spin w-4 h-4" />
                </>
              ) : (
                <>
                  PROCEED <ArrowRight size={14} />
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-[#f5f5f0]/10 py-12 text-center text-[10px] tracking-[0.2em] uppercase opacity-40">
    <div className="mb-4">Atlas & Co. Luxury Travel</div>
    <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
  </footer>
);

const Americas = () => {
  return (
    <div className="min-h-screen flex flex-col relative
                    selection:bg-[#cbbfa5] selection:text-[#0a0a0a]
                    bg-gradient-to-br from-blue-950 via-amber-600 to-yellow-500
                    p-12 text-white">
      <GlobalStyles />
      <Header />
      <main className="flex-grow">
        <PageTitle />
        <InfoSection />
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  );
};


export default  Americas;