import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar border-bottom bg-white sticky-top px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center position-relative py-2">
        <Link className="" to='/' aria-label="Zerodha Home">
          <img
            className="img-fluid"
            alt="Zerodha Logo"
            style={{ maxWidth: "150px" }}
            src="media/images/logo.svg"
          />
        </Link>
        <div className="">
          <ul className="d-none d-lg-flex list-unstyled gap-5 m-0">
            <li className="">
              <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" aria-current="page" to='/signup'>
                Signup
              </Link>
            </li>
            <li className="">
              <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/about'>
                About
              </Link>
            </li>
            <li className="">
              <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/product'>
                Product
              </Link>
            </li>
            <li className="">
              <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/pricing'>
                Pricing
              </Link>
            </li>
            <li className="">
              <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/support'>
                Support
              </Link>
            </li>
            <li onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: 'pointer' }}>
              <i class="fa fa-bars fs-5" aria-hidden="true"></i>

              {showDropdown && (
                <div
                  className="position-absolute top-100 end-0 mt-2 bg-white shadow rounded"
                  style={{
                    width: "90vw",
                    maxWidth: "700px",
                    zIndex: 1000,
                  }}
                >
                  <div className="d-flex justify-content-between mb-4 px-4 py-3">
                    <div className="text-center">
                      <img src="media\images\logo.png" alt="Kite" width="36" className="mb-3 pb-1 pt-2" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Kite</p>
                      <small style={{ fontSize: '12px' }} className="text-muted">Trading platform</small>
                    </div>
                    <div className="text-center">
                      <img src="media/images/consol.png" alt="Console" width="30" className="mb-3 pt-1 pb-1" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Console</p>
                      <small style={{ fontSize: '12px' }} className="text-muted">Backoffice</small>
                    </div>
                    <div className="text-center">
                      <img src="media/images/kite-connect.png" alt="Kite Connect" width="28" className="mb-3 pb-1" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Kite Connect</p>
                      <small style={{ fontSize: '12px' }} className="text-muted">Trading APIs</small>
                    </div>
                    <div className="text-center">
                      <img src="media/images/coins.png" alt="Coin" width="30" className="mb-3 pb-1" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Coin</p>
                      <small style={{ fontSize: '12px' }} className="text-muted">Mutual funds</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 px-5 bg-light">
                    <div>
                      <p className="fw-bold">Utilities</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Calculators</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Brokerage calculator</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Margin calculator</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">SIP calculator</p>
                    </div>
                    <div>
                      <p className="fw-bold">Updates</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Z-Connect blog</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Circulars / Bulletin</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">IPOs</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Markets</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px' }} className="fw-bold">Education</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Varsity</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Trading Q&A</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>

          <ul className="d-flex d-lg-none list-unstyled m-0">
            <li onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: 'pointer' }}>
              <i className="fa fa-bars fs-5" aria-hidden="true"></i>

              {showDropdown && (
                <div
                  className="position-absolute top-100 end-0 mt-2 bg-white shadow rounded"
                  style={{ width: "90vw", maxWidth: "700px", zIndex: 1000 }}
                >
                  <div className="row px-4 py-3">
                    <div className="col-6 d-flex flex-column gap-3">
                      <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" aria-current="page" to='/signup'>
                        Signup
                      </Link>
                      <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/product'>
                        Product
                      </Link>
                      <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/support'>
                        Support
                      </Link>
                    </div>
                    <div className="col-6 d-flex flex-column gap-3">
                      <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/about'>
                        About
                      </Link>
                      <Link style={{ fontSize: '15px' }} className="text-decoration-none text-dark" to='/pricing'>
                        Pricing
                      </Link>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-4 px-4 py-3">
                    <div className="text-center">
                      <img src="media/images/logo.png" alt="Kite" width="36" className="mb-3 pb-2 pt-2" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Kite</p>
                      <small style={{ fontSize: '12px' }} className="text-muted d-none d-md-block">Trading platform</small>
                    </div>
                    <div className="text-center">
                      <img src="media/images/consol.png" alt="Console" width="30" className="mb-3 pt-1 pb-1" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Console</p>
                      <small style={{ fontSize: '12px' }} className="text-muted d-none d-md-block">Backoffice</small>
                    </div>
                    <div className="text-center">
                      <img src="media/images/kite-connect.png" alt="Kite Connect" width="28" className="mb-3 pb-1" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Kite Connect</p>
                      <small style={{ fontSize: '12px' }} className="text-muted d-none d-md-block">Trading APIs</small>
                    </div>
                    <div className="text-center">
                      <img src="media/images/coins.png" alt="Coin" width="30" className="mb-3 pb-1" />
                      <p style={{ fontSize: '14px' }} className="mb-0 fw-semibold">Coin</p>
                      <small style={{ fontSize: '12px' }} className="text-muted d-none d-md-block">Mutual funds</small>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between py-4 px-5 bg-light">
                    <div>
                      <p className="fw-bold">Utilities</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Calculators</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Brokerage calculator</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Margin calculator</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">SIP calculator</p>
                    </div>
                    <div>
                      <p className="fw-bold">Updates</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Z-Connect blog</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Circulars / Bulletin</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">IPOs</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Markets</p>
                    </div>
                    <div className="d-none d-md-block">
                      <p className="fw-bold">Education</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Varsity</p>
                      <p style={{ fontSize: '14px' }} className="mb-2">Trading Q&A</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
