import React, { useState, useEffect } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext(null);

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState({});
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const handleOpenBuyWindow = (list) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(list);
  };

  const handleOpenSellWindow = (list) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(list);
  };

  const  handleCloseWindows = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  useEffect(() => {
    document.body.style.overflow = isBuyWindowOpen || isSellWindowOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isBuyWindowOpen, isSellWindowOpen]);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeWindow: handleCloseWindows,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow list={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow list={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
