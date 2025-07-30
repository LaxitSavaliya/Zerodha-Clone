
import React from "react";

function Pricing() {
  return (
    <section className="container p-5">
      <div className="row justify-content-center p-lg-5 align-items-center">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h4 className="mb-4 fw-bold">Unbeatable pricing</h4>
          <p className="mb-3" style={{ fontSize: "16px" }}>
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-semibold">
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-12 col-md-7 mt-lg-0 pt-lg-0 mt-md-5 pt-md-4 mt-sm-5">
          <div className="row g-3 justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="Free Account Opening"
                className="img-fluid mb-2"
                style={{ maxWidth: 120 }}
                loading="lazy"
              />
              <p className="text-center" style={{ fontSize: "11px", lineHeight: "1.3" }}>
                Free account<br />opening
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="Free Equity Delivery"
                className="img-fluid mb-2"
                style={{ maxWidth: 120 }}
                loading="lazy"
              />
              <p className="text-center" style={{ fontSize: "11px", lineHeight: "1.3" }}>
                Free equity delivery<br />and direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center">
              <img
                src="media/images/intradayTrades.svg"
                alt="Intraday and F&O"
                className="img-fluid mb-2"
                style={{ maxWidth: 120 }}
                loading="lazy"
              />
              <p className="text-center" style={{ fontSize: "11px", lineHeight: "1.3" }}>
                Intraday and<br />F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
