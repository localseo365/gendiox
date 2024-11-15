import React from 'react';

export default function Privacy() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-xl max-w-2xl">
            Información sobre el tratamiento de sus datos personales
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              GENDIOX S.L.<br />
              NIF: B12345678<br />
              Domicilio: Barcelona<br />
              Email: info@gendiox.pages.dev<br />
              Teléfono: 690 22 09 44
            </p>

            <h2>2. Finalidad del Tratamiento</h2>
            <p>
              Sus datos personales serán tratados para:
            </p>
            <ul>
              <li>Gestionar la prestación de servicios solicitados</li>
              <li>Atender consultas y solicitudes</li>
              <li>Enviar presupuestos</li>
              <li>Mantener comunicación relacionada con el servicio</li>
            </ul>

            <h2>3. Base Legal</h2>
            <ul>
              <li>Ejecución de un contrato de servicios</li>
              <li>Consentimiento del interesado</li>
              <li>Interés legítimo</li>
            </ul>

            <h2>4. Conservación de Datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y determinar posibles responsabilidades.
            </p>

            <h2>5. Destinatarios</h2>
            <p>
              Sus datos no serán cedidos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio.
            </p>

            <h2>6. Derechos</h2>
            <p>
              Puede ejercer sus derechos de:
            </p>
            <ul>
              <li>Acceso</li>
              <li>Rectificación</li>
              <li>Supresión</li>
              <li>Limitación</li>
              <li>Portabilidad</li>
              <li>Oposición</li>
            </ul>
            <p>
              Puede ejercer estos derechos enviando un email a info@gendiox.pages.dev
            </p>

            <h2>7. Medidas de Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}