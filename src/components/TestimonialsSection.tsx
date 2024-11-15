import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'María Bosch',
      location: 'Barcelona',
      text: 'Mi hermano tenía acumulado un gran volumen de objetos y basura en casa debido al síndrome de Diógenes. El equipo de GENDIOX actuó rápido y con mucha empatía. No solo dejaron la casa impecable, sino que también eliminaron por completo los olores desagradables. ¡Gracias por devolvernos el hogar!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80',
      title: 'Un cambio radical en nuestra casa familiar'
    },
    {
      name: 'Carles Fernández',
      location: 'Hospitalet de Llobregat',
      text: 'Contacté a GENDIOX porque necesitaba limpiar un piso que estaba en condiciones extremas. Desde el primer momento fueron claros, amables y transparentes con el proceso. En menos de dos días, el espacio quedó como nuevo. Sin duda los recomiendo.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
      title: 'Servicio profesional y discreto'
    },
    {
      name: 'Anna Boix',
      location: 'Badalona',
      text: 'No sabía qué hacer con el piso de mi padre tras años de acumulación. Los profesionales de GENDIOX no solo solucionaron el problema, sino que lo hicieron de forma rápida y eficiente. El precio fue justo y el resultado espectacular. ¡Gracias por todo!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=150&h=150&q=80',
      title: 'Resultados más allá de nuestras expectativas'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonios destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las experiencias reales de nuestros clientes satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - Cliente satisfecho`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 mb-4"
                  width="96"
                  height="96"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-gray-900 font-bold text-lg text-center">{testimonial.title}</h3>
              </div>
              <Quote className="h-8 w-8 text-orange-500 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="mt-4 border-t pt-4 text-center">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}