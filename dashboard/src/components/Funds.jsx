import React from "react";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Link } from "react-router-dom";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";

const Funds = () => {
  return (
    <>
      <div className="d-flex justify-content-end me-0">
        <p className="mt-2 me-3">Instant, zero-cost fund transfers with UPI</p>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-success px-4 py-0 m-0 rounded"
            style={{ height: "35px" }}
          >
            Success
          </button>
          <button
            type="button"
            className="btn btn-primary px-4 py-0 m-0 rounded"
            style={{ height: "35px" }}
          >
            Primary
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-5">
          <div className="d-flex justify-content-between">
            <p>
              <PieChartIcon /> Equity
            </p>
            <div className="d-flex">
              <p>
                <a href="#" className="text-decoration-none">
                  View statement
                </a>
              </p>
              <p className="ms-3">
                <a href="#" className="text-decoration-none">
                  Help
                </a>
              </p>
            </div>
          </div>
          <div className="border p-4">
            <div className="d-flex justify-content-between pb-2">
              <p>Available margin</p>
              <p className="text-primary">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between pb-2">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between pb-2">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col-6 p-5">
          <div className="d-flex justify-content-between">
            <p>
              <DataSaverOffIcon /> commodity
            </p>
            <div className="d-flex">
              <p>
                <a href="#" className="text-decoration-none">
                  View statement
                </a>
              </p>
              <p className="ms-3">
                <a href="#" className="text-decoration-none">
                  Help
                </a>
              </p>
            </div>
          </div>
          <div className="border p-4">
            <div className="d-flex justify-content-between pb-2">
              <p>Available margin</p>
              <p className="text-primary">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between pb-2">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center mt-3">
        <p>You don't have a commodity account</p>
        <Link className="btn btn-blue">Open Account</Link>
      </div>
    </>
  );
};

export default Funds;
