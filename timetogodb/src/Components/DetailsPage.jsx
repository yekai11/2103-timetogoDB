import React from "react";
import DetailsSection from "./ListingsDetails";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";

export default function DetailsPage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <DetailsSection />
        <FooterSection />
    </div>
}








