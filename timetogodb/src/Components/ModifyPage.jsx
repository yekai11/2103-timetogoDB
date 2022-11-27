import React from "react";
import ModifyListing from "./seller/ModifyListings";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";

export default function SellerPage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <ModifyListing />
        <FooterSection />
    </div>
}








