"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-background">
        <img
          src="/assets/img/bg/ship-7733596_1920.jpg"
          alt="Easy Imports Background"
          data-aos-duration="1000"
        />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="hero-badge">Soluções Inovadoras</span>
              <h1>Optimize Suas Operações Aduaneiras com a Easy Imports</h1>
              <p>
                Oferecemos serviços confiáveis de importação, exportação e
                logística, garantindo processos ágeis, seguros e personalizados
                para o crescimento do seu negócio.
              </p>

              <div className="hero-actions">
                <a href="#services" className="btn-primary">
                  Conheça Nossos Serviços
                </a>
                {/* <a href="#" className="btn-secondary glightbox">
                  <i className="bi bi-play-circle"></i>
                  <span>Assista à Demonstração</span>
                </a> */}
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Processos Concluídos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfação do Cliente</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Suporte Disponível</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="row g-3">
                <div className="col-6">
                  <div className="feature-card">
                    <i className="bi bi-shield-check"></i>
                    <span>Seguro & Confiável</span>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-people"></i>
                    <span>Equipe Especializada</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="feature-card">
                    <i className="bi bi-speedometer2"></i>
                    <span>Alta Performance</span>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-award"></i>
                    <span>Reconhecimento & Prêmios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
