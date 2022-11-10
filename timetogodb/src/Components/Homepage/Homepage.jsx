import React from "react";
import SearchComponent from "./SearchSection";
import ListingSection from "./Listing/ListingSection";
import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import ScrollComponent from "./ScrollComponent";

export default function Homepage() {
  return (
    <div>
      <ScrollComponent showBelow={250} />
      <SearchComponent />
      <ListingSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
}
