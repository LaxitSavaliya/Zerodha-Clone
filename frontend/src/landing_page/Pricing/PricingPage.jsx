import React from "react";
import Hero from "./Hero";
import Brokerage from './Brokerage'
import PricingTable from "./PricingTable";
import AccountOpeningCharge from "./AccountOpeningCharge";

function PricingPage() {
    return (
        <>
        <Hero/>
        <PricingTable/>
        <Brokerage/>
        <AccountOpeningCharge/>
        </>
    );
}

export default PricingPage;