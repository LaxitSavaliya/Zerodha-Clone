import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  link1,
  linkText1,
  link2,
  linkText2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5 py-5">
      <div className="row align-items-center gx-5">
        <div className="col-12 col-md-6">
          <img className="img-fluid mx-auto d-block" src={imageURL} alt={productName} />
        </div>
        <div className="col-12 col-md-6 p-lg-5 p-md-0">
          <h4 className="mb-4 ps-5">{productName}</h4>
          <p className="lh-lg mb-4 px-5">{productDescription}</p>
          <div className="mb-5">
            {linkText1 !== "" ? (
              <a className="text-decoration-none me-5  ps-5" href={link1}>
                {linkText1}
              </a>
            ) : null}
            {linkText2 !== "" ? (
              <a className="text-decoration-none ps-5" href={link2}>
                {linkText2}
              </a>
            ) : null}
          </div>
          <div>
            <a className="me-4 ps-5" href={googlePlay}>
              <img
                style={{ width: "30%" }}
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                style={{ width: "29%" }}
                src="media/images/appstoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
