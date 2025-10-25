"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <footer id="footer" className="footer position-relative dark-background">

        <div className="container footer-top">
          <div className="row gy-4">
            {/* Sobre a empresa */}
            <div className="col-lg-5 col-md-12 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <img src="assets/img/logo/EasyLogo.png" alt="Easy Imports Mozambique" />
              </Link>
              <p>
                A Easy Imports Mozambique é uma empresa moçambicana especializada em
                despacho aduaneiro e logística integrada, oferecendo soluções completas
                para facilitar o processo de importação e exportação em todo o país.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            {/* Links úteis */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Links Úteis</h4>
              <ul>
                <li><Link href="/">Início</Link></li>
                <li><Link href="#about">Sobre Nós</Link></li>
                <li><Link href="#services">Serviços</Link></li>
                <li><Link href="#">Termos de Serviço</Link></li>
                <li><Link href="#">Política de Privacidade</Link></li>
              </ul>
            </div>

            {/* Serviços */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Os Nossos Serviços</h4>
              <ul>
                <li><Link href="#services">Despacho Aduaneiro</Link></li>
                <li><Link href="#services">Logística e Transporte</Link></li>
                <li><Link href="#services">Consultoria em Comércio Internacional</Link></li>
                <li><Link href="#services">Gestão de Carga e Contentores</Link></li>
                <li><Link href="#services">Serviços Complementares</Link></li>
              </ul>
            </div>

            {/* Contactos */}
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contacte-nos</h4>
              <p>Bairro do Aeroporto A, Rua do Camões, nº 181</p>
              <p>Maputo, Moçambique</p>
              <p className="mt-4">
                <strong>Telefone:</strong> <span>21 467 387 / +258 86 840 8600</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info.easyimportsmoz@malemiagroup.co.mz</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Easy Imports Mozambique</strong>{" "}
            <span>Todos os direitos reservados</span>
          </p>
          <div className="credits">
            Desenvolvido por{" "}
            <a href="https://www.systemsmanager.co.mz/" target="_blank" rel="noopener noreferrer">
              Systems Manager, Lda
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
