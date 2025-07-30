import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ list }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(list.price);
  const { closeWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    closeWindow();
  };

  const handleBuyClick = () => {
    if (stockQuantity < 1 || stockPrice <= 0) return;
    
    axios.post("http://localhost:3002/neworder", {
      name: list.name,
      qty: stockQuantity,
      price: stockPrice,
      currPrice: list.price,
      mode: "BUY",
    });
    closeWindow();
  };

  useEffect(() => {
    setStockPrice(list.price || 0);
    setStockQuantity(1);
  }, [list]);

  const marginRequired = (stockQuantity * stockPrice).toFixed(2);

  return (
    <div className="container buy-modal" id="buy-window">
      <div className="header" draggable="true">
        <h3>
          Buy Order <span>({list.name})</span>
        </h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              placeholder="0"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              placeholder="0.00"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <Link
            to="#"
            className="btn btn-primary me-3"
            onClick={handleBuyClick}
          >
            Buy
          </Link>
          <Link to="#" className="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
