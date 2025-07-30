import React, { useContext, useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";
import GeneralContext from "./GeneralContext";


const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalInvest, setTotalInvest] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = (list) => {
    generalContext.openBuyWindow(list);
  };

  const handleSellClick = (list) => {
    generalContext.openSellWindow(list);
  }

  useEffect(() => {
    axios.get("http://localhost:3002/allholding").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  useEffect(() => {
    const total = allHoldings.reduce((acc, holding) => {
      return acc + holding.avg * holding.qty;
    }, 0);
    setTotalInvest(Number(total.toFixed(2)));
  }, [allHoldings]);

  useEffect(() => {
    const value = allHoldings.reduce((acc, holding) => {
      return acc + holding.price * holding.qty;
    }, 0);
    setCurrentValue(Number(value.toFixed(2)));
  }, [allHoldings]);

  const pl = currentValue - totalInvest;

  const labels = allHoldings.map((subArry) => subArry['name']);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  }

  return (
    <>
      <h3>Holdings ({allHoldings.length})</h3>
      <hr />
      <div className="d-flex justify-content-between px-3">
        <div>
          <h5>{totalInvest}</h5>
          <p>Total investment</p>
        </div>
        <div>
          <h5>{currentValue}</h5>
          <p>Current value</p>
        </div>
        <div>
          <h5 className={pl >= 0 ? 'text-primary' : 'text-danger'}>₹{pl.toFixed(2)} ({pl >= 0 ? "+" : "-"}{((pl * 100) / totalInvest).toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <div>
        <table className="table border">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-primary" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-primary";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                  <td className="d-flex gap-3">
                    <button onClick={() => handleBuyClick(stock)} className="px-2 bg-primary text-light">B</button>
                    <button onClick={() => handleSellClick(stock)} className="px-2 bg-danger text-light">S</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4 d-flex">
          {[
            "#4254f5",
            "#00aaff",
            "#2196f3",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#00bcd4",
            "#4caf50",
            "#8bc34a",
            "#cddc39",
            "#ffc107",
            "#ff9800",
            "#ffeb3b",
          ].map((color, i) => (
            <div
              key={i}
              style={{ height: "20px", backgroundColor: color, flex: 1 }}
            ></div>
          ))}
        </div>

        <div className="d-flex justify-content-between">
          <p className="mt-2">₹15,463.77</p>

          <div className="mt-2">
            <label className="me-3">
              <input type="radio" checked readOnly /> Current value
            </label>
            <label className="me-3">
              <input type="radio" readOnly /> Investment value
            </label>
            <label>
              <input type="radio" readOnly /> P&L
            </label>
          </div>
        </div>

        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;