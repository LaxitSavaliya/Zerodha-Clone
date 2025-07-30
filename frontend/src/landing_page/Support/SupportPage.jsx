import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import Practice from "./Practice";


function SupportPage() {
  const objArr = [
    {
      logo: "AddCircleOutlineIcon",
      heading: "Account Opening",
      links: ["#", "#", "#", "#", "#"],
      linkText: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      logo: "AccountCircleIcon",
      heading: "Your Zerodha Account",
      links: ["#", "#", "#", "#", "#"],
      linkText: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      logo: "EqualizerIcon",
      heading: "Kite",
      links: ["#", "#", "#", "#", "#"],
      linkText: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      logo: "CurrencyRupeeIcon",
      heading: "Funds",
      links: ["#", "#", "#", "#"],
      linkText: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      logo: "DonutSmallIcon",
      heading: "Console",
      links: ["#", "#", "#", "#", "#", "#"],
      linkText: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      logo: "MonetizationOnIcon",
      heading: "Coin",
      links: ["#", "#", "#", "#", "#", "#"],
      linkText: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <>
      <Hero />
      <div className="container py-5">
        <div className="row gx-0 gy-4 justify-content-center">
          <div className="col-12 col-lg-8">
            {objArr.map((obj, idx) => (
              <CreateTicket key={idx} objArr={obj} />
            ))}
          </div>
          <div className="col-12 col-lg-4 mt-5 mt-lg-5 ps-lg-5">
            <Practice />
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
