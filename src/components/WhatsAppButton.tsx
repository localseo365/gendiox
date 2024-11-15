import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/5ah5to"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-30 flex items-center gap-2"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}