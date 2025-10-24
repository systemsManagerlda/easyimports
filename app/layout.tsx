/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Preloader } from "./componet/preloader";

export const metadata: Metadata = {
  title: "Easy Imports Mozambique",
  description:
    "Com foco em eficiência, transparência e confiança, a Easy Imports oferece soluções completas para empresas e particulares que procuram adquirir mercadorias do exterior com segurança e a melhor relação custo-benefício.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons  */}

        {/* Fonts  */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Mukta:wght@200;300;400;500;600;700;800&family=Abel:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS Files  */}
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />

        {/* Main CSS File  */}
        <link href="assets/css/main.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
        {/* Preloader */}
        <Preloader />
        {/* Vendor JS Files */}
        <Script
          src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="assets/vendor/php-email-form/validate.js"
          strategy="afterInteractive"
        />
        <Script src="assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script
          src="assets/vendor/purecounter/purecounter_vanilla.js"
          strategy="afterInteractive"
        />
        <Script
          src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="assets/vendor/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="assets/vendor/glightbox/js/glightbox.min.js"
          strategy="afterInteractive"
        />
        <Script src="assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
