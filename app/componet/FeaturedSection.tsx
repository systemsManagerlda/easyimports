"use client";
import { useEffect } from "react";
import AOS from "aos";

const services = [
  {
    id: 1,
    icon: "bi bi-bar-chart-fill",
    title: "Planeamento Financeiro Aduaneiro",
    description: "Analisamos os custos de importação/exportação e otimizamos sua estratégia para reduzir taxas e prazos.",
    number: "01"
  },
  {
    id: 2,
    icon: "bi bi-graph-up-arrow",
    title: "Consultoria em Expansão de Mercado",
    description: "Apoiamos empresas na entrada de novos mercados, garantindo conformidade regulatória e logística eficiente.",
    number: "02"
  },
  {
    id: 3,
    icon: "bi bi-shield-check",
    title: "Gestão de Riscos e Conformidade",
    description: "Identificamos riscos aduaneiros e criamos soluções para proteger sua carga e operações comerciais.",
    number: "03"
  },
  {
    id: 4,
    icon: "bi bi-lightbulb-fill",
    title: "Inovação e Transformação Digital",
    description: "Implementamos soluções digitais para simplificar processos de despacho e monitoramento de mercadorias.",
    number: "04"
  },
  {
    id: 5,
    icon: "bi bi-people-fill",
    title: "Gestão de Talentos e Treinamento",
    description: "Capacitamos sua equipe em normas aduaneiras, processos logísticos e melhores práticas de importação/exportação.",
    number: "05"
  }
];

export default function FeaturedSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="featured-services" className="featured-services section light-background">
      <div className="container section-title">
        <h2>Serviços em Destaque</h2>
        <p>Oferecemos soluções completas de despacho, logística e consultoria</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="services-content" data-aos-duration="900">
              <span className="subtitle">Serviços Profissionais</span>
              <h2>Elevamos a performance do seu negócio através de soluções estratégicas</h2>
              <p data-aos-duration="800">A Easy Imports oferece suporte completo em importação, exportação e logística, garantindo conformidade e eficiência em todos os processos.</p>
              <div className="mt-4" data-aos-duration="1100">
                <a href="#" className="btn-consultation">
                  <span>Solicitar Consultoria</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="services-image">
              <img 
                src="/assets/img/services/DM6039.jpg" 
                alt="Serviços Easy Imports" 
                className="img-fluid" 
                loading="lazy"
              />
              <div className="shape-circle"></div>
              <div className="shape-accent"></div>
            </div>
          </div>
        </div>

        <div className="row mt-5" data-aos-duration="1000">
          <div className="col-12">
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="icon-box">
                    <i className={service.icon}></i>
                  </div>
                  <a href="#" className="arrow-link">
                    <i className="bi bi-arrow-right"></i>
                  </a>
                  <div className="content">
                    <h4>
                      <a href="#">{service.title}</a>
                    </h4>
                    <p>{service.description}</p>
                    <div className="service-number">{service.number}</div>
                  </div>
                </div>
              ))}
              
              <style jsx>{`
                .services-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                  gap: 20px;
                }
                
                @media (min-width: 768px) {
                  .services-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }
                
                @media (min-width: 992px) {
                  .services-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
