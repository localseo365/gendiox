import React from 'react';
import { ClipboardCheck, Sparkles, Recycle, SprayCan, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProcessSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Inspección inicial y presupuesto gratuito',
      description: 'Realizamos una visita al espacio afectado para evaluar el alcance del trabajo necesario. Analizamos cuidadosamente el estado de la vivienda y escuchamos tus necesidades para ofrecerte un presupuesto personalizado sin compromiso.',
      info: 'Nuestra inspección inicial nos permite comprender las necesidades específicas de cada cliente y garantizar una solución adaptada.'
    },
    {
      icon: Sparkles,
      title: 'Limpieza exhaustiva y desinfección',
      description: 'Nuestro equipo profesional lleva a cabo una limpieza integral, eliminando todos los objetos acumulados, suciedad y residuos que puedan estar presentes. Utilizamos técnicas avanzadas y productos ecológicos para garantizar la máxima higiene.',
      info: 'La limpieza profesional de GENDIOX elimina cualquier rastro de suciedad, bacterias y hongos, devolviendo un entorno seguro y saludable a tu vivienda.'
    },
    {
      icon: Recycle,
      title: 'Gestión de residuos y reciclaje',
      description: 'Nos ocupamos de la retirada, clasificación y disposición correcta de todos los residuos. Trabajamos con empresas autorizadas para garantizar un proceso de reciclaje responsable y en cumplimiento con las normativas medioambientales.',
      info: 'En GENDIOX, cuidamos del medio ambiente mientras recuperamos tu hogar. Todos los residuos son gestionados de manera sostenible.'
    },
    {
      icon: SprayCan,
      title: 'Eliminación de olores y desinfección final',
      description: 'Tras completar la limpieza y gestión de residuos, realizamos una desinfección profunda para eliminar bacterias, virus y malos olores persistentes. Aplicamos productos de última generación que garantizan un espacio completamente desinfectado y habitable.',
      info: 'Nuestra desinfección final asegura un hogar libre de contaminantes, listo para volver a ser utilizado.'
    },
    {
      icon: Home,
      title: 'Entrega final del espacio',
      description: 'Una vez finalizado todo el proceso, te entregamos un hogar en perfectas condiciones. Nuestro objetivo es devolver un espacio renovado, habitable y con un ambiente completamente limpio y saludable.',
      info: 'La entrega final es el resultado de nuestro compromiso con la calidad y la satisfacción del cliente.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo transformamos tu espacio afectado por el síndrome de Diógenes?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En GENDIOX, hemos diseñado un proceso de trabajo eficiente, discreto y profesional para garantizar resultados impecables. Nos encargamos de cada detalle, desde la inspección inicial hasta la entrega de un espacio limpio, seguro y habitable.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Paso {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-orange-500 font-semibold">{step.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            En GENDIOX, hacemos posible la transformación de viviendas afectadas por el síndrome de Diógenes con empatía, profesionalidad y resultados garantizados.
          </p>
          <Link
            to="/contacto"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
          >
            Solicita tu evaluación gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}