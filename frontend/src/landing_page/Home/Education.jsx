
import React from "react";

function Education() {
  return (
    <section className="container py-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-6 mb-lg-4 pb-md-3 text-center">
          <img
            src="media/images/education.svg"
            alt="Zerodha Education"
            className="img-fluid mx-auto w-100"
            loading="lazy"
            style={{ maxWidth: 460 }}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 px-lg-5 mt-lg-5 ms-lg-0 p-lg-0 m-md-0 ps-md-5 pe-md-0 ms-sm-5 p-sm-5">
          <h3 className="mb-lg-4 mb-md-3 ms-sm-4 fw-bold">Free and open market education</h3>
          <p className="mb-lg-3 mb-md-2 ms-sm-4" style={{ fontSize: "16px" }}>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none fw-semibold mb-4 mb-md-0 d-inline-block ms-sm-4" style={{ fontSize: "16px" }}>
            Varsity
          </a>
          <p className="mt-lg-4 mb-lg-3 my-md-3 ms-sm-4" style={{ fontSize: "16px" }}>
            TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none fw-semibold mb-2 d-inline-block ms-sm-4" style={{ fontSize: "16px" }}>
            TradingQ&amp;A
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
