import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";

const CustomTourPage = ({ formData, setFormData, status, onSubmit }) => (
  <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center py-12">
    <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Left: Image/Info */}
      <div className="md:w-1/3 bg-blue-950 p-12 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Plan Your Dream Trip</h2>
          <p className="text-blue-200 font-sans mb-8">
            Tell us your preferences and our travel experts will craft a personalized itinerary just for you within 24 hours.
          </p>
          <div className="flex items-center gap-3 text-amber-500 font-bold font-sans text-sm uppercase tracking-wider">
            <ShieldCheck size={20} /> Zero Spam Policy
          </div>
        </div>
        <div className="relative z-10 mt-12">
           <div className="text-xs text-blue-400 uppercase tracking-widest mb-2">Need help?</div>
           <div className="text-2xl font-bold">+91 98765 43210</div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="md:w-2/3 p-12">
        {status === 'success' ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
            <p className="text-gray-600">Our team is reviewing your details. Expect a call or email shortly.</p>
            <button onClick={() => window.location.reload()} className="mt-8 text-amber-600 font-bold underline">Start New Request</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  required
                  type="text"   
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-amber-500 outline-none transition-colors bg-transparent" 
                  placeholder="Jane Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-amber-500 outline-none transition-colors bg-transparent" 
                  placeholder="jane@example.com" 
                />
              </div>
              <div>
  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
    Phone Number
  </label>
  <input
    required
    type="tel"
    value={formData.phone}
    onChange={e => setFormData({ ...formData, phone: e.target.value })}
    className="w-full border-b-2 border-gray-200 py-2 focus:border-amber-500 outline-none transition-colors bg-transparent"
    placeholder="+91 98765 43210"
  />
</div>
<div>
 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
    Budget
  </label>
<input
  type="number"
  value={formData.budget}
  onChange={e => setFormData({ ...formData, budget: e.target.value })}
  className="w-full border-b-2 border-gray-200 py-2 focus:border-amber-500 outline-none bg-transparent"
  placeholder="50000"
/>
</div>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Travelers</label>
                <input 
                  type="number" 
                  value={formData.pax}
                  onChange={e => setFormData({...formData, pax: e.target.value})}
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-amber-500 outline-none transition-colors bg-transparent" 
                  placeholder="2 Adults, 1 Child" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Approx. Days</label>
                <select 
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-amber-500 outline-none transition-colors bg-transparent"
                  value={formData.days}
                  onChange={e => setFormData({...formData, days: e.target.value})}
                >
                  <option>5-7 Days</option>
                  <option>8-10 Days</option>
                  <option>10-14 Days</option>
                  <option>2 Weeks+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tell us about your plans</label>
              <textarea 
                rows="4" 
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full border rounded-lg border-gray-200 p-4 focus:border-amber-500 outline-none transition-colors bg-gray-50" 
                placeholder="I want to visit the Taj Mahal and also see some Tigers. We prefer luxury hotels..."
              ></textarea>
            </div>

            <button 
              disabled={status === 'submitting'}
              className="w-full bg-amber-500 text-white font-bold py-4 rounded-sm hover:bg-amber-600 transition shadow-lg uppercase tracking-widest flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
              {!status === 'submitting' && <ArrowRight size={20} />}
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
);

export default CustomTourPage;
