import React from "react";
import SearchComponent from "./resale/resaleFilter";
import ListingSection from "./resale/resaleListSection";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";
// still in progress
export default function RentalPage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <div className="row">
            <div className="left-panel box">
                <ListingSection />
            </div>
            <div className="right-panel box">
                <SearchComponent />
            </div>      
        </div>
        <FooterSection />
    </div>
}








