import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="#"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
