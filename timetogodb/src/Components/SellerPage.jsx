import React from "react";
import SellerListings from "./seller/SellerListings";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";

export default function SellerPage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <SellerListings />
        <FooterSection />
    </div>
}








