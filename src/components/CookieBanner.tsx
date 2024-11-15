import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setShow(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra{' '}
          <a href="/privacidad" className="text-orange-500 hover:underline">
            política de privacidad
          </a>
          .
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}