import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">GENDIOX</h3>
            <p className="text-sm">
              Especialistas en limpieza y desinfección para casos de Síndrome de Diógenes en Barcelona
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:690220944" className="hover:text-orange-500">
                  690 22 09 44
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@gendiox.pages.dev" className="hover:text-orange-500">
                  info@gendiox.pages.dev
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Carrer de Bruniquer, 40-54, Gràcia, 08024 Barcelona
                </span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="hover:text-orange-500">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/proceso" className="hover:text-orange-500">
                  Proceso
                </Link>
              </li>
              <li>
                <Link to="/precios" className="hover:text-orange-500">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-orange-500">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} GENDIOX. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link to="/privacidad" className="hover:text-orange-500">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="hover:text-orange-500">
                Política de Cookies
              </Link>
              <a 
                href="https://www.limpiezasindromediogenes.com/aviso-legal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}