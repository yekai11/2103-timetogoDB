import React from "react";
import SearchComponent from "./resale/resaleFilter";
import ListingSection from "./resale/resaleListSection";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";
// still in progress
export default function ResalePage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <ListingSection />
        <FooterSection />
    </div>
}








