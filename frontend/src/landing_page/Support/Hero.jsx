import React from "react";

function Hero() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row px-4 pt-5 pb-3 align-items-center">
          <div className="col-8 col-lg-10 col-md-8 text-md-start mb-3 mb-md-0">
            <h1 className="pt-sm-4 pt-md-0 pt-lg-0">Support Portal</h1>
          </div>
          <div className="col-4 col-lg-2 col-md-4 text-center text-md-end">
            <button type="button" className="btn btn-primary w-100">
              <i className="fa fa-life-ring me-2" aria-hidden="true"></i>
              My ticket
            </button>
          </div>
        </div>
        <div className="input-group pb-5 px-4">
          <span className="input-group-text bg-white border-0" id="visible-addon">
            <i className="fa fa-search fs-5" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 p-3"
            placeholder="Eg: how do i activate F&O..."
            aria-label="Search"
            aria-describedby="visible-addon"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
