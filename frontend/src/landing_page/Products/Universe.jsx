import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="text-center">
        <p className="fs-5 mb-5 pb-4">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h4 className="pt-5 py-3">The Zerodha Universe</h4>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row p-3 text-center">
        <div className="col-lg-4 col-md-6 col-12 py-5 px-lg-5 px-md-3 px-2">
          <div className="mb-5 pt-1">
            <a>
              <img
                className="img-fluid mx-auto mb-3 d-block"
                style={{ width: "70%" }}
                src="media/images/zerodhaFundhouse.png"
              />
              <p className="text-muted" style={{ fontSize: "12px" }}>
                Our asset management venture
                <br />
                that is creating simple and transparent index
                <br />
                funds to help you save for your goals.
              </p>
            </a>
          </div>
          <div className="pt-3">
            <a>
              <img
                className="img-fluid mx-auto mb-3 d-block"
                style={{ width: "70%" }}
                src="media/images/streakLogo.png"
              />
              <p className="text-muted" style={{ fontSize: "12px" }}>
                Systematic trading platform
                <br />
                that allows you to create and backtest
                <br />
                strategies without coding.
              </p>
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 py-5 px-lg-5 px-md-3 px-2">
          <div className="mb-5 pt-2">
            <a>
              <img
                className="w-75 img-fluid mx-auto mb-4 d-block"
                src="media/images/sensibullLogo.svg"
              />
              <p className="text-muted" style={{ fontSize: "12px" }}>
                Options trading platform that lets you
                <br />
                create strategies, analyze positions, and examine
                <br />
                data points like open interest, FII/DII, and more.
              </p>
            </a>
          </div>
          <div className="pt-4">
            <a>
              <img
                className="w-75 img-fluid mx-auto mb-3 d-block"
                src="media/images/smallcaseLogo.png"
              />
              <p className="pt-1 text-muted" style={{ fontSize: "12px" }}>
                Thematic investing platform
                <br />
                that helps you invest in diversified
                <br />
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-12 pt-4 px-lg-5 px-md-3 px-2">
          <div className="mb-4 pt-4">
            <a>
              <img
                className="img-fluid mx-auto mb-2 d-block"
                style={{ width: "60%" }}
                src="media/images/tijori.svg"
              />
              <p className="text-muted" style={{ fontSize: "12px" }}>
                Investment research platform
                <br />
                that offers detailed insights on stocks,
                <br />
                sectors, supply chains, and more.
              </p>
            </a>
          </div>
          <div className="pt-5">
            <a>
              <img
                className="w-50 img-fluid mx-auto mb-3 d-block"
                src="media/images/dittoLogo.png"
              />
              <p className="pt-1 text-muted" style={{ fontSize: "12px" }}>
                Systematic trading platform
                <br />
                that allows you to create and backtest
                <br />
                strategies without coding.
              </p>
            </a>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary w-auto px-4 mx-auto d-block fs-5 fw-semibold mt-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
