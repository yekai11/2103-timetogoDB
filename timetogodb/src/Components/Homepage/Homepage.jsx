import React from "react";
import SearchComponent from "./SearchSection";
import ListingSection from "./Listing/ListingSection";
import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import ScrollComponent from "./ScrollComponent";
import Header from "../Header/HeaderComponent";

export default function Homepage() {
  return (
    <div>
      <Header />
      <ScrollComponent showBelow={250} />
      <SearchComponent />
      <ListingSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
}
