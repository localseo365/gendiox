import React from 'react';
import ProcessSection from '../components/ProcessSection';

export default function Process() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Nuestro Proceso</h1>
          <p className="text-xl max-w-2xl">
            Descubre cómo transformamos espacios afectados por el síndrome de Diógenes
          </p>
        </div>
      </section>
      <ProcessSection />
    </>
  );
}