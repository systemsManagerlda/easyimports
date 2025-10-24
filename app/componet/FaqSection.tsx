"use client";
import { useEffect, useState } from "react";
import AOS from "aos";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function FaqSection() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      id: 1,
      question: "Quais são os serviços oferecidos pela Easy Imports Mozambique?",
      answer: "Oferecemos serviços completos de despacho aduaneiro, transporte e logística, garantindo que suas mercadorias cheguem no prazo e com total conformidade legal.",
      isOpen: true
    },
    {
      id: 2,
      question: "Como posso acompanhar a minha encomenda?",
      answer: "Fornecemos um sistema de rastreamento e atualização constante do estado das mercadorias, para que você possa acompanhar cada etapa do processo.",
      isOpen: false
    },
    {
      id: 3,
      question: "Quais são os documentos necessários para o despacho aduaneiro?",
      answer: "Os documentos variam conforme o tipo de mercadoria, mas geralmente incluem faturas comerciais, lista de embalagem, certificado de origem e documentos de transporte.",
      isOpen: false
    },
    {
      id: 4,
      question: "Quanto tempo demora o processo de despacho?",
      answer: "O tempo depende da complexidade e do tipo de mercadoria, mas nossa equipa garante que todo o processo seja realizado de forma rápida e eficiente.",
      isOpen: false
    },
    {
      id: 5,
      question: "Como posso entrar em contacto com a Easy Imports?",
      answer: "Pode contactar-nos pelo email <strong>info.easyimportsmoz@malemiagroup.co.mz</strong> ou pelo telefone <strong>+258 86 840 8600</strong>. Estamos à disposição para esclarecer todas as suas dúvidas.",
      isOpen: false
    }
  ]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleFaq = (id: number) => {
    setFaqItems(prevItems => 
      prevItems.map(item => ({
        ...item,
        isOpen: item.id === id ? !item.isOpen : false
      }))
    );
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Perguntas Frequentes</h2>
        <p>Esclareça as dúvidas mais comuns sobre nossos serviços de despacho e logística</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-wrapper">
              {faqItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`faq-item ${item.isOpen ? 'faq-active' : ''}`}
                >
                  <div 
                    className="faq-header"
                    onClick={() => toggleFaq(item.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="faq-icon">
                      <i className="bi bi-question-circle"></i>
                    </div>
                    <h4 dangerouslySetInnerHTML={{ __html: item.question }} />
                    <div className="faq-toggle">
                      <i className="bi bi-plus" style={{ display: item.isOpen ? 'none' : 'block' }}></i>
                      <i className="bi bi-dash" style={{ display: item.isOpen ? 'block' : 'none' }}></i>
                    </div>
                  </div>
                  <div 
                    className="faq-content"
                    style={{ 
                      display: item.isOpen ? 'block' : 'none',
                      maxHeight: item.isOpen ? '1000px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div className="content-inner">
                      <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
