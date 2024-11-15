import React from 'react';

export default function Cookies() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>
          <p className="text-xl max-w-2xl">
            Información sobre el uso de cookies en nuestro sitio web
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita.
            </p>

            <h2>Tipos de cookies que utilizamos</h2>
            
            <h3>Cookies técnicas</h3>
            <p>
              Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.
            </p>

            <h3>Cookies analíticas</h3>
            <p>
              Permiten el seguimiento y análisis del comportamiento de los usuarios en nuestro sitio web para mejorar su experiencia.
            </p>

            <h3>Cookies de personalización</h3>
            <p>
              Permiten al usuario acceder al servicio con algunas características predefinidas en función de una serie de criterios.
            </p>

            <h2>¿Cómo gestionar las cookies?</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de internet. En caso de que no permita la instalación de cookies en su navegador es posible que no pueda acceder a algunos de los servicios y que su experiencia en nuestra web pueda resultar menos satisfactoria.
            </p>

            <h2>Consentimiento</h2>
            <p>
              Al navegar y continuar en nuestro sitio web estará consintiendo el uso de las cookies antes enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
            </p>

            <h2>Actualización de la Política de Cookies</h2>
            <p>
              GENDIOX puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}