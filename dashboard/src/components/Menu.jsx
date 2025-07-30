import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState([
    { text: "Dashboard", link: "/", co: true },
    { text: "Orders", link: "/orders", co: false },
    { text: "Holdings", link: "/holdings", co: false },
    { text: "Positions", link: "/positions", co: false },
    { text: "Funds", link: "/funds", co: false },
    { text: "Apps", link: "/apps", co: false },
  ]);

  const handleMenuClick = (ix) => {
    setSelectedMenu(
      selectedMenu.map((sel, ind) =>
        ind === ix ? { ...sel, co: true } : { ...sel, co: false }
      )
    );
  };

  return (
    <div className="row align-items-center py-1">
      <div className="col-10 d-flex justify-content-between align-items-center">
        <img src="logo.png" style={{ width: "30px" }} alt="logo" />
        <div className="d-flex">
          {selectedMenu.map((head, i) => (
            <p className="ps-4 m-0" key={i} style={{fontSize: '15px'}}>
              <Link
                to={head.link}
                className={`text-decoration-none hove ${
                  head.co ? "text-primary" : "text-secondary"
                }`}
                onClick={() => handleMenuClick(i)}
              >
                {head.text}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className="col-2">
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <p
            className="ms-3 border rounded-circle bg-primary text-white d-flex align-items-center justify-content-center m-0 p-3"
            style={{ width: "25px", height: "25px", fontSize: "11px" }}
          >
            D
          </p>

          <p className="ps-2 m-0" style={{ fontSize: "14px" }}>
            Demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
