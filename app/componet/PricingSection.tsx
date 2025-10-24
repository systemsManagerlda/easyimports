"use client";
import { useEffect } from "react";
import AOS from "aos";
export default function PricingSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
   <section id="pricing" className="pricing section">

      <div className="container section-title">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="row gy-4 justify-content-center">

          <div className="col-lg-4 col-md-6">
            <div className="pricing-item">
              <div className="pricing-icon">
                <i className="bi bi-star"></i>
              </div>
              <h3>Standard</h3>
              <div className="price">
                <span className="currency">$</span>9<span className="period">/month</span>
              </div>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check2"></i>
                  Vestibulum ante ipsum primis
                </li>
                <li>
                  <i className="bi bi-check2"></i>
                  Fusce vulputate eleifend
                </li>
                <li>
                  <i className="bi bi-check2"></i>
                  Nullam ac tortor vitae
                </li>
              </ul>
              <a href="#" className="btn-pricing">Buy Now</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="pricing-item featured">
              <div className="pricing-badge">Recommended</div>
              <div className="pricing-icon">
                <i className="bi bi-stars"></i>
              </div>
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>29<span className="period">/month</span>
              </div>
              <p className="description">Maecenas tempus tellus eget condimentum rhoncus semper.</p>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check2"></i>
                  Donec quam felis ultricies
                </li>
                <li>
                  <i className="bi bi-check2"></i>
                  Aenean massa imperdiet
                </li>
                <li>
                  <i className="bi bi-check2"></i>
                  Cras dapibus vivamus
                </li>
              </ul>
              <a href="#" className="btn-pricing">Buy Now</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="pricing-item">
              <div className="pricing-icon">
                <i className="bi bi-star-fill"></i>
              </div>
              <h3>Ultimate</h3>
              <div className="price">
                <span className="currency">$</span>49<span className="period">/month</span>
              </div>
              <p className="description">Etiam rhoncus maecenas tempus tellus eget condimentum.</p>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check2"></i>
                  Phasellus viverra nulla
                </li>
                <li>
                  <i className="bi bi-check2"></i>
                  Quisque rutrum aenean
                </li>
                <li>
                  <i className="bi bi-check2"></i>
                  Etiam ultricies nisi vel
                </li>
              </ul>
              <a href="#" className="btn-pricing">Buy Now</a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}