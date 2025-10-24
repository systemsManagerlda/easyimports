"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="about section">

      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <h2>Transformando Ideias em Resultados Desde 2015</h2>
              <p className="lead">
                Somos uma equipa dedicada a soluções de importação, exportação e logística, oferecendo serviços eficientes e confiáveis para empresas em todo o mundo.
              </p>
              <p>
                Nossa trajetória começou com a visão de conectar processos aduaneiros complexos a soluções práticas e inovadoras. Hoje, somos parceiros de empresas que desejam otimizar operações e reduzir riscos.
              </p>
              <p>
                Através de parcerias estratégicas e soluções personalizadas, ajudamos dezenas de organizações a alcançar seus objetivos enquanto construímos relações baseadas em confiança, transparência e resultados consistentes.
              </p>

              <div className="stats-container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="stat-item">
                      <div className="number">8+</div>
                      <div className="label">Anos de Experiência</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-item">
                      <div className="number">450+</div>
                      <div className="label">Processos Aduaneiros Concluídos</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-item">
                      <div className="number">15</div>
                      <div className="label">Membros na Equipa</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-wrapper">
                <a href="#services" className="btn btn-primary">Descubra Nossos Serviços</a>
                <a href="#team" className="btn btn-outline">Conheça a Equipa</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-wrapper">
              <img src="/assets/img/about/DM6091.jpg" alt="Sobre a Easy Imports" className="img-fluid main-image" />
              <div className="floating-card">
                <div className="card-content">
                  <i className="bi bi-award"></i>
                  <div className="text">
                    <h5>Prémio de Excelência</h5>
                    <span>Inovação em Logística 2023</span>
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
