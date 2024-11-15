import React from 'react';
import { Sparkles, Trash2, Shield, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: 'Limpieza exhaustiva y desinfección',
      description: 'Nuestra prioridad es eliminar la suciedad acumulada y desinfectar todas las superficies para erradicar bacterias, hongos y otros agentes nocivos.',
      features: [
        'Eliminación de suciedad extrema en todas las habitaciones',
        'Limpieza de muebles, electrodomésticos y suelos',
        'Desinfección con productos ecológicos y aprobados sanitariamente'
      ]
    },
    {
      icon: Trash2,
      title: 'Retirada y gestión de residuos',
      description: 'Gestionamos todo tipo de objetos acumulados, desde muebles en desuso hasta residuos orgánicos, garantizando una retirada profesional y sostenible.',
      features: [
        'Clasificación y reciclaje según normativas locales',
        'Transporte seguro de desechos',
        'Gestión responsable y documentada'
      ]
    },
    {
      icon: Shield,
      title: 'Desinfección contra bacterias y hongos',
      description: 'Utilizamos técnicas avanzadas y productos específicos para eliminar microorganismos perjudiciales y devolver al espacio un ambiente saludable.',
      features: [
        'Nebulización con desinfectantes de amplio espectro',
        'Tratamiento de superficies',
        'Eliminación de patógenos'
      ]
    },
    {
      icon: Wind,
      title: 'Eliminación de olores persistentes',
      description: 'Los olores fuertes asociados a la acumulación de basura o humedad requieren tratamientos especializados.',
      features: [
        'Uso de ozono para eliminar olores',
        'Aplicación de neutralizadores',
        'Tratamiento de tejidos y superficies'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios profesionales de limpieza y desinfección especializados en casos de Síndrome de Diógenes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            ¿Necesitas transformar un espacio afectado por síndrome de Diógenes?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Solicitar presupuesto gratuito
            </Link>
            <a
              href="https://wa.link/5ah5to"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Contacta ahora por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}