import React from "react";

function Team() {
  return (
    <section className="container py-5 px-2 px-md-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 mx-auto">
          <h4 className="text-center mb-5">People</h4>
          <div className="row gx-4 gy-5 align-items-center">
            <div className="col-12 col-md-6 d-flex flex-column align-items-center">
              <img
                className="team-img rounded-circle mt-3"
                src="media/images/nithinKamath.jpg"
                alt="Nithin Kamath"
              />
              <div className="text-center">
                <p className="team-name mb-1">Nithin Kamath</p>
                <p className="team-title text-secondary">Founder, CEO</p>
              </div>
            </div>
            <div className="col-12 col-md-6 py-4">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>Playing basketball is his zen.</p>
              <p>
                Connect on{' '}
                <a href="#" className="text-decoration-none">Homepage</a>{' '}/{' '}
                <a href="#" className="text-decoration-none">TradingQnA</a>{' '}/{' '}
                <a href="#" className="text-decoration-none">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
