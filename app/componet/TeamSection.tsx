"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import AOS from "aos";

// Array de membros da equipa
const teamMembers = [
  {
    id: 1,
    name: "Mateus Benedito Chongo",
    position: "Tecnico Aduaneiro",
    description:
      "Responsável pelo despacho aduaneiro, classificação de mercadorias, preparação de documentação e conformidade com a legislação alfandegária, garantindo o correto desembaraço de importações e exportações.",
    image: "/assets/img/person/Mateus.png",
    socialLinks: [
      { platform: "twitter", url: "#", icon: "bi bi-twitter-x" },
      { platform: "facebook", url: "#", icon: "bi bi-facebook" },
      { platform: "instagram", url: "#", icon: "bi bi-instagram" },
      { platform: "linkedin", url: "#", icon: "bi bi-linkedin" },
    ],
  },
  {
    id: 2,
    name: "Liria Amina Artur Matoro",
    position: "Técnica Aduaneira",
    description:
      "Responsável pelo processamento de documentos de importação e exportação, classificação de mercadorias, acompanhamento de processos aduaneiros e conformidade com a legislação alfandegária, garantindo o correto desembaraço de cargas.",
    image: "/assets/img/person/Liria.png",
    socialLinks: [
      { platform: "twitter", url: "#", icon: "bi bi-twitter-x" },
      { platform: "facebook", url: "#", icon: "bi bi-facebook" },
      { platform: "instagram", url: "#", icon: "bi bi-instagram" },
      { platform: "linkedin", url: "#", icon: "bi bi-linkedin" },
    ],
  },
  {
    id: 3,
    name: "Marcia Américo Gomane",
    position: "Assistente Executiva",
    description:
      "Responsável pelo apoio administrativo à gestão, coordenação de agendas, organização de reuniões e comunicação interna e externa, garantindo a eficiência das operações diárias da empresa.",
    image: "/assets/img/person/Marcia.png",
    socialLinks: [
      { platform: "twitter", url: "#", icon: "bi bi-twitter-x" },
      { platform: "facebook", url: "#", icon: "bi bi-facebook" },
      { platform: "instagram", url: "#", icon: "bi bi-instagram" },
      { platform: "linkedin", url: "#", icon: "bi bi-linkedin" },
    ],
  },
  {
    id: 4,
    name: "Felizardo Malemia",
    position: "CEO",
    description:
      "Responsável pela liderança estratégica da empresa, definição de objetivos, supervisão das operações e tomada de decisões importantes para garantir o crescimento sustentável e a excelência nos serviços de despacho e logística.",
    image: "/assets/img/person/Felizardo.png",
    socialLinks: [
      { platform: "twitter", url: "#", icon: "bi bi-twitter-x" },
      { platform: "facebook", url: "#", icon: "bi bi-facebook" },
      { platform: "instagram", url: "#", icon: "bi bi-instagram" },
      { platform: "linkedin", url: "#", icon: "bi bi-linkedin" },
    ],
  },
];

export default function TeamSection() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const initializeSwiper = async () => {
      if (!swiperRef.current) return;

      try {
        // Importação do Swiper
        const Swiper = (await import("swiper")).default;
        const { Autoplay, Pagination, Navigation } = await import(
          "swiper/modules"
        );

        new Swiper(swiperRef.current, {
          modules: [Autoplay, Pagination, Navigation],
          loop: true,
          speed: 800,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          },
        });
      } catch (error) {
        console.error("Erro ao inicializar o Swiper:", error);
      }
    };

    initializeSwiper();
  }, []);

  return (
    <section id="team" className="team section">
      <div className="container section-title">
        <h2>Equipa</h2>
        <p>Conheça os profissionais por trás da Easy Imports Mozambique.</p>
      </div>

      <div className="container">
        <div ref={swiperRef} className="team-slider swiper">
          <div className="swiper-wrapper">
            {teamMembers.map((member) => (
              <div key={member.id} className="swiper-slide">
                <div className="team-card">
                  <div className="team-image">
                    <img
                      src={member.image}
                      className="img-fluid"
                      alt={`${member.name} - ${member.position}`}
                      loading="lazy"
                    />
                    <div className="team-overlay">
                      <div className="social-links">
                        {member.socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            className={`social-link ${social.platform}`}
                            aria-label={`Siga ${member.name} no ${social.platform}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <span className="position">{member.position}</span>
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navegação */}
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev" aria-label="Slide anterior"></div>
          <div className="swiper-button-next" aria-label="Próximo slide"></div>
        </div>
      </div>
    </section>
  );
}
