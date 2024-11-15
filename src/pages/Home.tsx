import React from 'react';
import { Shield, Clock, Recycle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://cms.pm/uploads/files/extractacleaning.seesite.biz_--_67786581.jpg")',
          }}
          role="img"
          aria-label="Servicio de limpieza profesional"
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expertos en limpieza y desinfección por
            <span className="block text-orange-500">Síndrome de Diógenes en Barcelona</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Servicio profesional 24/7 en Barcelona y alrededores. Recuperamos espacios con sensibilidad y eficacia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Solicitar Presupuesto Gratuito
            </Link>
            <a
              href="tel:690220944"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir GENDIOX?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos especializamos en casos complejos de limpieza y desinfección, ofreciendo un servicio integral y profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Certificados',
                description: 'Personal cualificado y productos homologados',
              },
              {
                icon: Clock,
                title: '24/7 Disponibles',
                description: 'Servicio de emergencias las 24 horas',
              },
              {
                icon: Recycle,
                title: 'Gestión de Residuos',
                description: 'Reciclaje y eliminación responsable',
              },
              {
                icon: Award,
                title: 'Garantía Total',
                description: 'Satisfacción garantizada en cada servicio',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform"
              >
                <feature.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            ¿Necesita ayuda con un caso de Síndrome de Diógenes?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacte con nosotros para una evaluación gratuita y confidencial.
            Respuesta inmediata 24/7.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contacto"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contactar Ahora
            </Link>
            <a
              href="tel:690220944"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              690 22 09 44
            </a>
          </div>
        </div>
      </section>
    </>
  );
}