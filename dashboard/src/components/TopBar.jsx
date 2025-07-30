import React from "react";
import Menu from "./Menu";
import { watchlist } from "../data/data";

const TopBar = () => (
  <div className="border-bottom">
    <div className="row px-3">
      <div className="col-4 d-flex justify-content-between pt-3">
        {watchlist.slice(0, 2).map((item, idx) => (
          <div key={item.name} className="d-flex fw-semibold" style={{ fontSize: "13px" }}>
            <p className="ps-3">{item.name}</p>
            <p
              className="ps-2"
              style={{ color: item.isDown ? "red" : "green" }}
            >
              {item.price}
            </p>
            <p className="ps-2">
              {((parseFloat(item.percent) * item.price) / 100).toFixed(2)}
            </p>
            <p className="ps-2">({item.percent})</p>
          </div>
        ))}
      </div>
      <div className="col-8 py-1 border-start">
        <Menu />
      </div>
    </div>
  </div>
);

export default TopBar;
