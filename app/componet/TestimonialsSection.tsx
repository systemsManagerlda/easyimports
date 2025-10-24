"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import AOS from "aos";

// Depoimentos de clientes da Easy Imports Mozambique
const testimonials = [
  {
    id: 1,
    quote: "A Easy Imports garantiu que todas as nossas mercadorias fossem despachadas sem atrasos e com total conformidade legal. Serviço profissional e confiável!",
    image: "/assets/img/person/2.png",
    name: "João Silva",
    position: "Cliente Corporativo"
  },
  {
    id: 2,
    quote: "Excelente acompanhamento aduaneiro e suporte em cada etapa do processo de importação. Recomendo a Easy Imports para qualquer empresa.",
    image: "/assets/img/person/1.png",
    name: "Maria Fernandes",
    position: "Gestora de Importações"
  },
  {
    id: 3,
    quote: "Profissionais altamente qualificados e atendimento personalizado. Todas as nossas encomendas chegaram dentro do prazo previsto.",
    image: "/assets/img/person/4.png",
    name: "Carlos António",
    position: "Empresário"
  },
  {
    id: 4,
    quote: "Serviço eficiente, transparente e confiável. A Easy Imports facilitou todo o processo logístico da nossa empresa.",
    image: "/assets/img/person/3.png",
    name: "Ana Paula",
    position: "Responsável de Logística"
  },
  {
    id: 5,
    quote: "A equipa da Easy Imports é extremamente profissional e dedicada. Recomendo para qualquer operação de despacho aduaneiro e transporte internacional.",
    image: "/assets/img/person/person-m-13.webp",
    name: "Pedro Lemos",
    position: "Diretor de Compras"
  }
];

export default function TestimonialsSection() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const initializeSwiper = async () => {
      if (!swiperRef.current) return;

      try {
        const Swiper = (await import("swiper")).default;
        const { Autoplay, Pagination } = await import("swiper/modules");

        new Swiper(swiperRef.current, {
          modules: [Autoplay, Pagination],
          loop: true,
          speed: 600,
          autoplay: { delay: 5000 },
          slidesPerView: "auto",
          pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 20 }
          }
        });
      } catch (error) {
        console.error("Erro ao inicializar o Swiper:", error);
      }
    };

    initializeSwiper();
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img 
                    src={testimonial.image} 
                    className="testimonial-img" 
                    alt={testimonial.name}
                    loading="lazy"
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.position}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
