
import React from "react";

function Awards() {
  return (
    <section className="container py-5 mb-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-12 col-lg-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/largestBroker.svg"
            className="img-fluid mx-auto"
            alt="Largest Broker Badge"
            loading="lazy"
            style={{ maxWidth: 450 }}
          />
        </div>
        <div className="col-12 mt-3 col-lg-6 ps-sm-5 mt-md-5 pt-sm-5 mt-md-0 col-md-12 p-md-5">
          <h2 className="mb-3">Largest stock broker in India</h2>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row pt-3 mb-4">
            <div className="col-12 col-sm-6">
              <ul className="lh-lg ps-3">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
              <ul className="lh-lg ps-3">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            className="img-fluid w-100 mt-2"
            alt="Press Mentions Logos"
            loading="lazy"
            src="media/images/pressLogos.png"
            style={{ maxHeight: 60, objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Awards;
