import React from 'react';

export default function Legal() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Aviso Legal</h1>
          <p className="text-xl max-w-2xl">
            Información legal sobre GENDIOX
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Información Legal</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informamos que:
            </p>
            <ul>
              <li>Denominación social: GENDIOX S.L.</li>
              <li>NIF: B12345678</li>
              <li>Domicilio social: Barcelona</li>
              <li>Email: info@gendiox.pages.dev</li>
              <li>Teléfono: 690 22 09 44</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web gendiox.pages.dev, del que es titular GENDIOX S.L.
            </p>

            <h2>3. Propiedad Intelectual</h2>
            <p>
              Los derechos de propiedad intelectual de este sitio web, su código fuente, diseño, estructuras de navegación y los distintos elementos en él contenidos son titularidad de GENDIOX S.L.
            </p>

            <h2>4. Condiciones de Uso</h2>
            <p>
              La utilización del sitio web atribuye la condición de usuario y supone la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2>5. Responsabilidades</h2>
            <p>
              GENDIOX S.L. no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualesquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.
            </p>

            <h2>6. Legislación Aplicable</h2>
            <p>
              El presente Aviso Legal se rige por la legislación española vigente.
            </p>

            <h2>7. Resolución de Conflictos</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}