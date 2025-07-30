
import React from "react";

function Stats() {
  return (
    <section className="container p-5 mb-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-12 col-lg-5 mb-4 mb-md-0 ps-lg-5">
          <h3 className="mb-4">Trust with confidence</h3>
          <h5 className="text-muted">Customer-first always</h5>
          <p className="mb-4 text-muted">
            1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>
          <h5 className="text-muted">No spam or gimmicks</h5>
          <p className="mb-4 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
            <a href="#" className="text-decoration-none ms-1">Our philosophies.</a>
          </p>
          <h5 className="text-muted">The Zerodha universe</h5>
          <p className="mb-4 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>
          <h5 className="text-muted">Do better with money</h5>
          <p className="mb-4 text-muted">
            With initiatives like <a href="#" className="text-decoration-none">Nudge</a> and <a href="#" className="text-decoration-none">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-12 col-md-12 col-lg-6 pe-md-5 mt-lg-0 pt-lg-0 mt-md-5 text-center">
          <img
            className="img-fluid mb-4 mx-auto"
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem illustration"
            loading="lazy"
            style={{ maxWidth: "100%" }}
          />
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-4">
            <a href="#" className="fw-semibold text-decoration-none">
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="fw-semibold text-decoration-none">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <img
        className="img-fluid mx-auto d-block mt-5"
        src="media/images/pressLogos.png"
        alt="Press mentions logos"
        loading="lazy"
        style={{ maxHeight: 60, objectFit: "contain" }}
      />
    </section>
  );
}

export default Stats;
