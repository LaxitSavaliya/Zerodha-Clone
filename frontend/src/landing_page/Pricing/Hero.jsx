import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center my-5 py-5">
        <h3>Charges</h3>
        <p className="fs-5 mt-3 mb-5 text-muted">List of all charges and taxes</p>
      </div>

      <div className="row px-lg-5 px-md-4 px-2 text-center">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 col-12 mb-5 pt-4">
          <img
            className="img-fluid w-75 d-block mx-auto mb-3"
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
          />
          <h3 className="mb-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 col-12 mb-5 pt-4">
          <img
            className="img-fluid w-75 d-block mx-auto mb-3"
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
          />
          <h3 className="mb-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 col-12 mb-5 pt-4">
          <img
            className="img-fluid w-75 d-block mx-auto mb-3"
            src="media/images/pricing0.svg"
            alt="Free direct MF"
          />
          <h3 className="mb-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
