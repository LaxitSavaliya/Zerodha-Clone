import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  link,
  linkText,
}) {
  return (
    <div className="container px-5 py-5 mb-5">
      <div className="row align-items-center gx-5">
        <div className="col-12 col-md-6 p-lg-5 p-md-0">
          <h4 className="mb-4 ps-lg-5 ps-sm-0">{productName}</h4>
          <p className="lh-lg mb-4 px-lg-5 px-sm-0">{productDescription}</p>
          <div className="mb-5">
            <a className="text-decoration-none me-5 ps-lg-5 ps-sm-0" href={link}>
              {linkText}
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid mx-auto d-block"
            src={imageURL}
            alt={productName}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
