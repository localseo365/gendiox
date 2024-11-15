import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cómo se realiza la limpieza para el síndrome de Diógenes?',
      a: 'En GENDIOX seguimos un proceso estructurado para garantizar una limpieza y desinfección completa: evaluamos el espacio, retiramos objetos acumulados, realizamos una limpieza profunda y desinfección utilizando productos profesionales ecológicos, y finalmente eliminamos olores persistentes.'
    },
    {
      q: '¿Cuánto tiempo suele tardar el servicio?',
      a: 'El tiempo varía según el tamaño de la vivienda y la cantidad de objetos acumulados. En promedio: viviendas pequeñas 1-2 días, espacios más grandes hasta 4 días. En cada caso, garantizamos un trabajo rápido y eficiente.'
    },
    {
      q: '¿Qué productos utilizáis para la desinfección?',
      a: 'Utilizamos productos de limpieza y desinfección certificados, respetuosos con el medio ambiente y seguros para la salud. Estos eliminan bacterias, virus y hongos, garantizando un espacio libre de contaminantes.'
    },
    {
      q: '¿Qué ocurre con los residuos que retiráis?',
      a: 'Nos encargamos de la gestión completa de los residuos siguiendo la normativa ambiental. Esto incluye clasificación de materiales reciclables, eliminación segura de objetos no recuperables y donación de bienes en buen estado cuando es posible.'
    },
    {
      q: '¿Ofrecéis presupuesto sin compromiso?',
      a: 'Sí, ofrecemos una evaluación inicial gratuita, presencial o virtual, y un presupuesto detallado sin coste ni compromiso. Nuestro objetivo es que tomes una decisión informada.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre la limpieza para síndrome de Diógenes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              ¿Tienes más preguntas? Estamos aquí para ayudarte
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contacto"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Contactar ahora
              </Link>
              <a
                href="https://wa.link/5ah5to"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}