import React from "react";
import SearchComponent from "./SearchSection";
import ListingComponent from "./Listing/ListingSection";


export default function Homepage() {
  return (
    <div>
      <SearchComponent/>
      <ListingComponent/>
    </div>
  );
}
