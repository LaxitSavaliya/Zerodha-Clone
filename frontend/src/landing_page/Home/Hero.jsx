
import React from "react";

function Hero() {
  return (
    <section className="container py-4 mt-5 mb-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-12 col-lg-8 mx-auto">
          <img
            src="media/images/homeHero.png"
            alt="Zerodha platform hero graphic"
            loading="lazy"
            className="img-fluid mb-5 mx-auto w-100 w-md-100"
            style={{ objectFit: "contain" }}
          />
          <h1 className="fs-3 mb-2">Invest in everything</h1>
          <p className="fs-5 mb-4 pb-2 pt-1 text-secondary">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary px-4 mx-auto d-block fs-5 fw-semibold mb-4" style={{ maxWidth: 220 }}>
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
