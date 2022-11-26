import React from "react";
import CreateListing from "./seller/CreateListing";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";

export default function NewListingPage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <CreateListing />
        <FooterSection />
    </div>
}








