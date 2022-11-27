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

  const [dialog, setDialog] = React.useState(false);
  const {render, dialogC, handleCloseDialog} = ListingSection();
  // const handleCloseDialog = () => {
  //   setDialogC(false);
  // };

  return (
    <div>
      <Header />
      <ScrollComponent showBelow={250} />
      <SearchComponent />
      {render}
      <FeatureSection />
      <FooterSection />
      
      <Dialog
          open={dialogC}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialog}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Disagree</Button>
            <Button onClick={handleCloseDialog}>Agree</Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
