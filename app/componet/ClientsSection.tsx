"use client";
import { useEffect } from "react";
import AOS from "aos";

const clients = [
  "clients-1.webp", 
  "clients-2.webp", 
  "clients-3.webp",
  "clients-4.webp",
  "clients-5.webp",
  "clients-6.webp"
];

export default function ClientsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="clients" className="clients section">
      <div>
        <div className="clients-slider">
          <div className="slider-track">
            {/* Duplicar os clientes para criar efeito de loop infinito */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo">
                <img
                  src={`/assets/img/clients/${client}`}
                  className="img-fluid"
                  alt={`Client ${(index % clients.length) + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          .clients-slider {
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          
          .slider-track {
            display: flex;
            animation: scroll 20s linear infinite;
            width: max-content;
          }
          
          .client-logo {
            flex-shrink: 0;
            padding: 0 20px;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @media (max-width: 640px) {
            .client-logo {
              padding: 0 10px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}