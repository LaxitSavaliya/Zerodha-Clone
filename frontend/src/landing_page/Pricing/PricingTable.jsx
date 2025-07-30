import React from "react";

function PricingTable() {
  return (
    <div className="container px-3 px-md-5 pt-5">
      <div className="my-4">
        <ul className="nav nav-underline border-bottom mb-4 flex-wrap">
          <li className="nav-item">
            <a className="nav-link active text-muted fs-5 me-4" href="#">
              Equity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted fs-5 me-4" href="#">
              Currency
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted fs-5" href="#">
              Commodity
            </a>
          </li>
        </ul>

        <div className="table-responsive">
          <table className="table table-striped border align-middle">
            <thead>
              <tr>
                <th></th>
                <th className="fw-light py-3">Equity delivery</th>
                <th className="fw-light py-3">Equity intraday</th>
                <th className="fw-light py-3">F&O - Futures</th>
                <th className="fw-light py-3">F&O - Options</th>
              </tr>
            </thead>
            <tbody className="text-muted" style={{ fontSize: "14px" }}>
              <tr>
                <td className="py-3 ps-3">Brokerage</td>
                <td className="py-3">Zero Brokerage</td>
                <td className="py-3">
                  0.03% or Rs. 20/executed<br />order whichever is lower
                </td>
                <td className="py-3">
                  0.03% or Rs. 20/executed<br />order whichever is lower
                </td>
                <td className="py-3">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="py-3 ps-3">STT/CTT</td>
                <td className="py-3">0.1% on buy & sell</td>
                <td className="py-3">0.025% on the sell side</td>
                <td className="py-3">0.02% on the sell side</td>
                <td className="py-3">
                  <ul className="ps-3 mb-0">
                    <li>0.0125% of intrinsic value on exercised options</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 ps-3">Transaction charges</td>
                <td className="py-3">
                  NSE: 0.00297%<br />BSE: 0.00375%
                </td>
                <td className="py-3">
                  NSE: 0.00297%<br />BSE: 0.00375%
                </td>
                <td className="py-3">
                  NSE: 0.00173%<br />BSE: 0
                </td>
                <td className="py-3">
                  NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td className="py-3 ps-3">GST</td>
                <td className="py-3">
                  18% on (brokerage + SEBI<br />charges + transaction charges)
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI<br />charges + transaction charges)
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI<br />charges + transaction charges)
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI<br />charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td className="py-3 ps-3">SEBI charges</td>
                <td className="py-3">₹10 / crore</td>
                <td className="py-3">₹10 / crore</td>
                <td className="py-3">₹10 / crore</td>
                <td className="py-3">₹10 / crore</td>
              </tr>
              <tr>
                <td className="py-3 ps-3">Stamp charges</td>
                <td className="py-3">0.015% or ₹1500/crore on buy side</td>
                <td className="py-3">0.003% or ₹300/crore on buy side</td>
                <td className="py-3">0.002% or ₹200/crore on buy side</td>
                <td className="py-3">0.003% or ₹300/crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
