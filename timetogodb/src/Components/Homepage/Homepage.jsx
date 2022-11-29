import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import SearchComponent from "./SearchSection";
import ListingSection from "./Listing/ListingSection";
import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import ScrollComponent from "./ScrollComponent";
import Header from "../Header/HeaderComponent";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Homepage() {

  return (
    <div>
      <Header />
      <ScrollComponent showBelow={250} />
      <SearchComponent />
      <ListingSection/>
      <FeatureSection />
      <FooterSection />
    </div>
  );
}
