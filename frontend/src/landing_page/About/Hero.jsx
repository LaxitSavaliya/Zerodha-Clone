import React from "react";


function Hero() {
  return (
    <section className="container py-4 px-2 px-md-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 mx-auto">
          <div className="text-center mb-5">
            <h4 className="lh-base py-4">
              We pioneered the discount broking model in India.<br />
              Now, we are breaking ground with our technology.
            </h4>
          </div>
          <hr className="mb-5" />
          <div className="row gx-3 gy-4 lh-lg">
            <div className="col-12 col-md-6 ps-5 mt-5">
              <p>
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
              </p>
              <p>
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
              </p>
              <p>
                Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
              </p>
            </div>
            <div className="col-12 col-md-6 ps-5 mt-5">
              <p>
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
              </p>
              <p>
                <a href="#" className="text-decoration-none">
                  Rainmatter
                </a>
                , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
              </p>
              <p>
                And yet, we are always up to something new every day. Catch up on the latest updates on our{' '}
                <a href="#" className="text-decoration-none">
                  blog
                </a>{' '}
                or see what the media is{' '}
                <a href="#" className="text-decoration-none">
                  saying about
                </a>{' '}
                us or learn more about our business and product{' '}
                <a href="#" className="text-decoration-none">
                  philosophies
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
