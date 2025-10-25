"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="header fixed-top">

      {/* Topbar */}
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:info.easyimportsmoz@malemiagroup.co.mz">info.easyimportsmoz@malemiagroup.co.mz</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>21 467 387 | +258 86 840 8600</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Branding */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">

          {/* Logo */}
          <Link href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo/EASY IMPORTS - MZ.png" alt="Easy Imports Mozambique" />
            {/* <h1 className="sitename">E.I.M</h1> */}
          </Link>

          {/* Navigation */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="#hero" className="active">Ìnicio</Link></li>
              <li><Link href="#about">Sobre-nós</Link></li>
              <li className="dropdown">
                <a href="#"><span>Serviços</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><Link href="#import-services">Serviços de Importações</Link></li>
                  <li><Link href="#logistics">Logistica</Link></li>
                </ul>
              </li>
              <li><Link href="#contact">Contactos</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

        </div>
      </div>

    </header>
  );
}
