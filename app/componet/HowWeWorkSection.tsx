"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function HowWeWorkSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="how-we-work" className="how-we-work section">
      <div className="container section-title">
        <h2>Como Trabalhamos</h2>
        <p>Conheça nosso processo para garantir serviços de despacho e logística eficientes</p>
      </div>

      <div className="container">
        <div className="steps-grid">

          <div className="step-card">
            <div className="step-icon">
              <i className="bi bi-search"></i>
            </div>
            <div className="step-number">Passo 1</div>
            <h3>Planeamento & Análise</h3>
            <p>Avaliamos sua carga e documentação para garantir conformidade com normas aduaneiras e logísticas.</p>
            <div className="step-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <i className="bi bi-lightbulb"></i>
            </div>
            <div className="step-number">Passo 2</div>
            <h3>Soluções Personalizadas</h3>
            <p>Definimos o melhor plano de transporte e despacho, considerando prazos, custos e segurança.</p>
            <div className="step-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <i className="bi bi-gear"></i>
            </div>
            <div className="step-number">Passo 3</div>
            <h3>Execução & Monitoramento</h3>
            <p>Realizamos o despacho, transporte e acompanhamento da mercadoria em tempo real até o destino final.</p>
            <div className="step-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <div className="step-number">Passo 4</div>
            <h3>Entrega & Suporte</h3>
            <p>Garantimos a entrega dentro do prazo e oferecemos suporte pós-serviço para qualquer necessidade adicional.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
