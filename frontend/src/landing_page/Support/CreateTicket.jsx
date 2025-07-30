import * as React from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function CreateTicket({ objArr }) {
  const [open, setOpen] = React.useState(false);

  const getIcon = (IconName) => {
    switch (IconName) {
      case "AddCircleOutlineIcon":
        return <AddCircleOutlineIcon className="text-primary" />;
      case "AccountCircleIcon":
        return <AccountCircleIcon className="text-primary" />;
      case "EqualizerIcon":
        return <EqualizerIcon className="text-primary" />;
      case "CurrencyRupeeIcon":
        return <CurrencyRupeeIcon className="text-primary" />;
      case "DonutSmallIcon":
        return <DonutSmallIcon className="text-primary" />;
      case "MonetizationOnIcon":
        return <MonetizationOnIcon className="text-primary" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="d-flex border rounded shadow-sm flex-wrap align-items-center"
        style={{ cursor: "pointer", marginTop: "24px" }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#F0F0FA", height: 55, width: 60 }}
        >
          {getIcon(objArr.logo)}
        </div>
        <div
          className="d-flex ms-3 align-items-center fw-semibold flex-grow-1"
          style={{ minWidth: 0 }}
        >
          <span className="text-truncate" style={{ maxWidth: "100%" }}>
            {objArr.heading}
          </span>
        </div>
        <div className="d-flex align-items-center ms-auto me-3">
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>
      </div>
      <Collapse in={open} timeout="auto">
        <div className="border border-top-0 rounded-bottom px-3 px-md-5 pt-3 bg-white">
          <ul className="mb-0 ps-3">
            {objArr.linkText.map((text, idx) =>
              text ? (
                <li key={idx} className="text-primary mb-3">
                  <a href={objArr.links[idx]} className="text-decoration-none">
                    {text}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </Collapse>
    </>
  );
}

export default CreateTicket;
