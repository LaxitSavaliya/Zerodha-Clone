
import React from "react";

function OpenAccount() {
  return (
    <section className="container py-5 mb-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="fs-2 fw-bold mb-3">Open a Zerodha account</h3>
          <p className="mb-4 pb-2 pt-1 text-secondary" style={{ fontSize: "16px" }}>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O trades.
          </p>
          <button
            className="btn btn-primary px-4 mx-auto d-block fs-5 fw-semibold mb-4"
            aria-label="Sign up for a free Zerodha account"
            style={{ maxWidth: 220 }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
