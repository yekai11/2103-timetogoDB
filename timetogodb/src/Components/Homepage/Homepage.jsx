import React from "react";
import SearchComponent from "./SearchSection";
import ListingSection from "./Listing/ListingSection";
import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";

export default function Homepage() {
  return (
    <div>
      <SearchComponent />
      <ListingSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
}
