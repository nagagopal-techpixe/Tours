import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => (
  <div className="pt-24 min-h-screen bg-white">
    <div className="bg-gray-50 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">Contact Us</h1>
      <p className="text-gray-600">We are available 24/7 to answer your questions.</p>
    </div>
    <div className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
         <h3 className="text-2xl font-bold text-blue-950">Get in Touch</h3>
         <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><MapPin size={24} /></div>
            <div>
              <h4 className="font-bold">Head Office</h4>
              <p className="text-gray-600 font-sans text-sm">Level 4, Heritage Tower, <br/>Connaught Place, New Delhi, 110001</p>
            </div>
         </div>
         <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Phone size={24} /></div>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p className="text-gray-600 font-sans text-sm">+91 98765 43210 (24/7 Support)</p>
            </div>
         </div>
         <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Mail size={24} /></div>
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-gray-600 font-sans text-sm">hello@kirtitours.com</p>
            </div>
         </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-xl overflow-hidden h-80 relative flex items-center justify-center">
        <div className="text-gray-500 font-bold flex flex-col items-center">
          <MapPin size={40} className="mb-2" />
          <span>Google Map Integration</span>
        </div>
      </div>
    </div>
  </div>
);
export default ContactPage;
