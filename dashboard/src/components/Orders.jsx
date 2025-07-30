import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Orders = () => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/allorder')
      .then((res) => setStocks(res.data))
      .catch((err) => console.error('Error fetching Stocks: ', err));
  }, []);

  return (
    <div className="m-4">
      <h2 className="mb-4">Stock List</h2>
      <table className="table border table-striped">
        <thead>
          <tr>
            <th scope="col">Instrument</th>
            <th scope="col">Qty.</th>
            <th scope="col">Price</th>
            <th scope="col">Mode</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price}</td>
              <td>{stock.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
