import SearchIcon from "@mui/icons-material/Search";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Tooltip } from "@mui/material";
import { useState, useContext } from "react";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";

function WatchList() {
  const [enter, setEnter] = useState(null);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = (list) => {
    generalContext.openBuyWindow(list);
  };

  const handleSellClick = (list) => {
    generalContext.openSellWindow(list);
  }

  const labels = watchlist.map((subArry) => subArry['name']);

  const data = {
    labels,
    datasets: [
      {
        label : 'Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      },
    ]
  }

  return (
    <>
      <div className="position-relative w-100 ms-2">
        <SearchIcon className="position-absolute top-50 start-0 translate-middle-y ms-3 fs-5 text-muted" />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="ps-5 pe-5 py-2 shadow-none"
          style={{ width: "98%" }}
        />

        <p
          className="position-absolute top-50 end-0 translate-middle-y me-3 m-0 text-muted"
          style={{ fontSize: "14px" }}
        >
          {watchlist.length}/50
        </p>
      </div>

      {watchlist.map((watch, i) => (
        <div
          key={i}
          onMouseEnter={() => setEnter(i)}
          onMouseLeave={() => setEnter(null)}
          className="ms-2 ps-3 border pt-3"
          style={{ width: "98%" }}
        >
          <div className="d-flex justify-content-between">
            <p
              style={{ fontSize: "14px" }}
              className={`w-50
                  ${
                    ((parseFloat(watch.percent) * watch.price) / 100).toFixed(
                      2
                    ) > 0
                      ? "text-success"
                      : "text-danger"
                  }`}
            >
              {watch.name}
            </p>
            <div style={{ fontSize: "13px" }} className="w-50 text-end d-flex">
              <p className="w-25">
                {((parseFloat(watch.percent) * watch.price) / 100).toFixed(2)}
              </p>
              <p className="w-25">{watch.percent}</p>
              <p
                style={{ width: "15%" }}
                className={`
                  ${
                    ((parseFloat(watch.percent) * watch.price) / 100).toFixed(
                      2
                    ) > 0
                      ? "text-success"
                      : "text-danger"
                  }`}
              >
                {((parseFloat(watch.percent) * watch.price) / 100).toFixed(2) >
                0 ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </p>
              <p className="w-25">{watch.price}</p>
            </div>
            {enter === i ? (
              <div
                className="position-absolute"
                style={{ marginLeft: "240px" }}
              >
                <Tooltip
                  title="Buy (B)"
                  placement="top"
                  onClick={() => handleBuyClick(watch)}
                >
                  <button className="px-3 me-2 bg-primary text-white rounded">
                    B
                  </button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top"
                onClick={() => handleSellClick(watch)}
                >
                  <button className="px-3 me-2 bg-danger  text-white rounded">
                    S
                  </button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement="top">
                  <button className="px-2 me-2 bg-white rounded">
                    <EqualizerIcon className="fs-5" />
                  </button>
                </Tooltip>
                <Tooltip title="More" placement="top">
                  <button className="px-2 bg-white rounded">
                    <MoreHorizIcon className="fs-5" />
                  </button>
                </Tooltip>
              </div>
            ) : null}
          </div>
        </div>
      ))}

      <DoughnutChart data={data}/>
    </>
  );
}

export default WatchList;
