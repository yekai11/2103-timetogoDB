import React from "react";
import PostFilterSidebar from "./rental/rentalFilter";
import ListingSection from "./rental/rentListSection";
import FooterSection from "./Homepage/FooterSection";
import ScrollComponent from "./Homepage/ScrollComponent";
import Header from "./Header/HeaderComponent";

export default function RentalPage(){
    return <div className="content-container">
        <Header />
        <ScrollComponent showBelow={250} />
        <div className="row">
            <div className="left-panel box">
                <ListingSection />
            </div>
            <div className="right-panel box">
                <PostFilterSidebar />
            </div>      
        </div>
        <FooterSection />
    </div>
}








