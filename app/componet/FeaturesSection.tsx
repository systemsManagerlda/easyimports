"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function FeaturesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="features" className="features section">
      <div className="container">

        <div className="row g-4">
          <div className="col-lg-4">
            <ul className="nav nav-tabs flex-column" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#features-tab-1" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-truck"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Despacho Aduaneiro</h4>
                      <p>Processamento rápido e seguro de mercadorias</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-box-seam"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Transporte Nacional</h4>
                      <p>Entrega eficiente e monitorada das mercadorias</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-globe2"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Logística Internacional</h4>
                      <p>Coordenação de importação e exportação global</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Segurança e Conformidade</h4>
                      <p>Garantia de cumprimento de todas as normas legais</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-5" role="tab">
                  <div className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div className="ms-3">
                      <h4>Consultoria Personalizada</h4>
                      <p>Assessoria estratégica para otimizar processos logísticos</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="tab-content">

              <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Despacho Aduaneiro Simplificado</h3>
                      <p>Nossa equipa realiza todo o processo de liberação de mercadorias, garantindo rapidez e conformidade legal.</p>
                      <p className="highlight">Evite atrasos e problemas com a alfândega com nosso suporte especializado.</p>
                      <ul className="features-list">
                        <li><i className="bi bi-check2-circle"></i> Análise de documentos e conformidade</li>
                        <li><i className="bi bi-check2-circle"></i> Processamento rápido e seguro</li>
                        <li><i className="bi bi-check2-circle"></i> Acompanhamento de cada etapa</li>
                        <li><i className="bi bi-check2-circle"></i> Suporte contínuo ao cliente</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="assets/img/misc/Despacho.png" alt="Despacho Aduaneiro" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Transporte Nacional Confiável</h3>
                      <p>Garantimos entregas rápidas e monitoradas em todo o território nacional.</p>
                      <p className="highlight">Acompanhe suas mercadorias em tempo real e receba notificações de status.</p>
                      <ul className="features-list">
                        <li><i className="bi bi-check2-circle"></i> Frota própria e terceirizada</li>
                        <li><i className="bi bi-check2-circle"></i> Rastreamento contínuo</li>
                        <li><i className="bi bi-check2-circle"></i> Planeamento de rotas eficiente</li>
                        <li><i className="bi bi-check2-circle"></i> Entrega dentro do prazo</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="assets/img/misc/Transporte.496Z.png" alt="Transporte Nacional" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Logística Internacional</h3>
                      <p>Organizamos importações e exportações, cuidando de todos os detalhes para que sua mercadoria chegue corretamente.</p>
                      <p className="highlight">Serviço completo desde o embarque até a entrega final.</p>
                      <ul className="features-list">
                        <li><i className="bi bi-check2-circle"></i> Coordenação de transporte marítimo e aéreo</li>
                        <li><i className="bi bi-check2-circle"></i> Controle de documentação</li>
                        <li><i className="bi bi-check2-circle"></i> Acompanhamento do processo de importação/exportação</li>
                        <li><i className="bi bi-check2-circle"></i> Suporte aduaneiro especializado</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="assets/img/misc/Logistica.542Z.png" alt="Logística Internacional" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Segurança e Conformidade</h3>
                      <p>Garantimos que todas as operações respeitem as normas legais, evitando problemas futuros com a alfândega.</p>
                      <p className="highlight">Auditoria e monitoramento contínuo de processos.</p>
                      <ul className="features-list">
                        <li><i className="bi bi-check2-circle"></i> Revisão de documentos e licenças</li>
                        <li><i className="bi bi-check2-circle"></i> Monitoramento de processos</li>
                        <li><i className="bi bi-check2-circle"></i> Proteção das mercadorias</li>
                        <li><i className="bi bi-check2-circle"></i> Conformidade com normas internacionais</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="assets/img/misc/seguranca.214Z.png" alt="Segurança e Conformidade" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-5" role="tabpanel">
                <div className="content-box">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3>Consultoria Personalizada</h3>
                      <p>Oferecemos aconselhamento estratégico para optimizar processos logísticos e reduzir custos.</p>
                      <p className="highlight">Soluções sob medida para cada cliente.</p>
                      <ul className="features-list">
                        <li><i className="bi bi-check2-circle"></i> Planeamento de logística personalizado</li>
                        <li><i className="bi bi-check2-circle"></i> Análise de processos</li>
                        <li><i className="bi bi-check2-circle"></i> Redução de custos e otimização</li>
                        <li><i className="bi bi-check2-circle"></i> Aconselhamento contínuo</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="image-box">
                        <img src="assets/img/misc/consultoria.222Z.png" alt="Consultoria Personalizada" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
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
