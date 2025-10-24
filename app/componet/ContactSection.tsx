"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AOS from "aos";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Dados do formulário:", formData);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contacto</h2>
        <p>
          Entre em contacto com a <strong>Easy Imports Mozambique</strong> — a
          sua parceira de confiança em despacho aduaneiro e logística integrada.
        </p>
      </div>

      <div className="container">
        <div className="contact-main-wrapper">
          {/* Mapa */}
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.310607662267!2d32.5731!3d-25.9653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee688d1a8c7a1cb%3A0x5b9c1a548c9e8f3!2sMaputo!5e0!3m2!1spt!2smz!4v1719960600000!5m2!1spt!2smz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Easy Imports Mozambique no Google Maps"
            />
          </div>

          {/* Conteúdo */}
          <div className="contact-content">
            <div className="contact-cards-container">
              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Localização</h4>
                  <p>Bairro do Aeroporto A, Rua do Camões, nº 318, Maputo – Moçambique</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info.easyimportsmoz@malemiagroup.co.mz</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-text">
                  <h4>Telefone</h4>
                  <p>+258 86 840 8600</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 8h00 – 17h00</p>
                </div>
              </div>
            </div>

            {/* Formulário de contacto */}
            <div className="contact-form-container">
              <h3>Envie-nos uma Mensagem</h3>
              <p>
                Estamos prontos para ajudá-lo em todas as etapas do seu processo
                de importação e logística. Preencha o formulário abaixo e a nossa
                equipa entrará em contacto o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="O seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="O seu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="A sua mensagem"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="my-3">
                  <div className="loading">A enviar...</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    A sua mensagem foi enviada com sucesso. Obrigado!
                  </div>
                </div>

                <div className="form-submit">
                  <button type="submit">Enviar Mensagem</button>
                  <div className="social-links">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
