import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
<a
  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20tour%20packages"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50"
>
  <MessageCircle size={28} />
</a>

);

export default WhatsAppButton;
