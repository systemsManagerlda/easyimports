"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import AOS from "aos";

export default function CallToAction() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section id="call-to-action" className="call-to-action section light-background">

        <div className="container">

          <div className="cta-wrapper">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>

            <div className="row g-0">
              <div className="col-lg-7">
                <div className="cta-content p-5">
                  <span className="badge-custom">Oferta Premium</span>
                  <h2 className="mt-4 mb-4">Simplifique o Seu Despacho e Logística Conosco</h2>
                  <p className="mb-4">A Easy Imports Mozambique oferece soluções eficientes de despacho aduaneiro e logística, garantindo que suas mercadorias cheguem no prazo e com total conformidade legal.</p>

                  <div className="row benefits-row mb-5">
                    <div className="col-md-6">
                      <div className="benefit-item">
                        <div className="icon-box">
                          <i className="bi bi-lightning-charge-fill"></i>
                        </div>
                        <div className="benefit-content">
                          <h5>Processo Ágil</h5>
                          <p>Despacho aduaneiro rápido e eficiente, sem atrasos nas suas importações e exportações.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefit-item">
                        <div className="icon-box">
                          <i className="bi bi-shield-check"></i>
                        </div>
                        <div className="benefit-content">
                          <h5>Segurança Total</h5>
                          <p>Garantimos conformidade com a legislação aduaneira e segurança no transporte das suas mercadorias.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <a href="#contact" className="btn btn-primary">Entre em Contacto</a>
                    <a href="#services" className="btn btn-outline">Saiba Mais</a>
                    <div className="guarantee-badge">
                      <i className="bi bi-patch-check-fill"></i>
                      <span>Serviço Confiável</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="cta-image-container">
                  <img src="assets/img/illustration/globo.png" alt="Ilustração de Logística" className="img-fluid main-image" />
                  <div className="floating-element element-1">
                    <i className="bi bi-star-fill"></i>
                    <span>4.9 Avaliação</span>
                  </div>
                  <div className="floating-element element-2">
                    <i className="bi bi-people-fill"></i>
                    <span>10k+ Clientes Satisfeitos</span>
                  </div>
                  <div className="pattern-dots"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
