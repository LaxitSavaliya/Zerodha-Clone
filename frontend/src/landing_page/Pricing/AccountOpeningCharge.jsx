import React from "react";

function AccountOpeningCharge() {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-12">
          <h4 className="mb-4">Charges for account opening</h4>
          <div className="table-responsive mb-5">
            <table className="table table-striped border">
              <thead>
                <tr>
                  <th className="ps-3 fw-medium">Type of account</th>
                  <th className="text-center pe-3 fw-medium">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-3 small">Online account</td>
                  <td className="text-center pe-3 small">FREE</td>
                </tr>
                <tr>
                  <td className="ps-3 small">Offline account</td>
                  <td className="text-center pe-3 small">FREE</td>
                </tr>
                <tr>
                  <td className="ps-3 small">NRI account (offline only)</td>
                  <td className="text-center pe-3 small">₹ 500</td>
                </tr>
                <tr>
                  <td className="ps-3 small">
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td className="text-center pe-3 small">₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="mb-4">Charges for optional value added services</h4>
          <div className="table-responsive">
            <table className="table table-striped border">
              <thead>
                <tr>
                  <th className="ps-3 fw-medium">Service</th>
                  <th className="fw-medium">Billing Frequency</th>
                  <th className="pe-3 fw-medium">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-3 small">Tickertape</td>
                  <td className="small">Monthly / Annual</td>
                  <td className="pe-3 small">Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                  <td className="ps-3 small">Smallcase</td>
                  <td className="small">Per transaction</td>
                  <td className="pe-3 small">Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td className="ps-3 small">Kite Connect</td>
                  <td className="small">Monthly</td>
                  <td className="pe-3 small">Connect: 500 | Historical: 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOpeningCharge;
