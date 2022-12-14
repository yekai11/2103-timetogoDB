import {
  Typography, 
  Autocomplete, 
  Button, 
  Slide, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  FormLabel, 
  FormControl, 
  FormControlLabel,
  RadioGroup, 
  Radio, 
  TextField,
  Modal,
  Box,
} from "@mui/material";
import React from "react";
import { useState } from 'react';
// pictures
import hdb2 from "../../assets/hdb2.jpg";
// icons
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
  
const createListingAPI = "http://localhost:5000/seller/addListing"; // not sure how this works for this page 

const testFlatTypeData = [ // copy of the filter options
  { label: "1 ROOM" },
  { label: "2 ROOM" },
  { label: "3 ROOM" },
  { label: "4 ROOM" },
  { label: "5 ROOM" },
  { label: "EXECUTIVE" },
  { label: "MULTI-GENERATION" },
]; 

const testStoreyData = [ // copy of the filter options
  { label: "1st Floor - 3rd Floor" },
  { label: "4th Floor - 6th Floor" },
  { label: "7th Floor - 9th Floor" },
  { label: "10th Floor - 12th Floor" },
  { label: "13th Floor - 15th Floor" },
  { label: "16th Floor - 18th Floor" },
  { label: "19th Floor - 21st Floor" },
  { label: "22nd Floor - 24th Floor" },
  { label: "25th Floor - 27th Floor" },
  { label: "28th Floor - 30th Floor" },
  { label: "31st Floor - 33rd Floor" },
  { label: "34th Floor - 36th Floor" },
  { label: "37th Floor - 39th Floor" },
  { label: "40th Floor - 42nd Floor" },
  { label: "43rd Floor - 45th Floor" },
  { label: "46th Floor - 48th Floor" },
  { label: "49th Floor - 51st Floor" },
]; 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateListing() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [area, setArea] = useState("");
  const [Postal, setPostal] = useState("");
  const [Street, setStreet] = useState("");
  const [Block, setBlock] = useState("");
  const [FlatType, setFlatType] = useState("");
  const [StoreyRange, setStoreyRange] = useState("");
  const [FloorSize, setFloorSize] = useState("");
  const [ListingType, setListingType] = useState("");
  const [Price, setPrice] = useState("");

  // this whole chunk of codes to handle change in values on the forms 
  const [accountID, setAccountID] = React.useState(
    window.localStorage.getItem("accountID")
  );
  
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  }

  const handlePostalChange = (event) => {
    setPostal(event.target.value);
  }

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  }

  const handleBlockChange = (event) => {
    setBlock(event.target.value);
  }

  const handleFlatTypeChange = (event) => {
    setFlatType(event.target.value);
  }

  const handleStoreyRangeChange = (event) => {
    setStoreyRange(event.target.value);
  }

  const handleFloorSizeChange = (event) => {
    setFloorSize(event.target.value);
  }

  const handleListingTypeChange = (event) => {
    setListingType(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }
// end form handling

  /* submit handler */
  const handleSubmit = () => {
    // console.log({
    //   accountID: accountID,
    //   area: area,
    //   Postal: Postal,
    //   Street: Street,
    //   Block: Block,
    //   FlatType: FlatType,
    //   StoreyRange: StoreyRange,
    //   FloorSize: FloorSize,
    //   ListingType: ListingType,
    //   Price: Price,
    // });
    fetch(createListingAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        accountID: accountID,
        area: area,
        postal_code: Postal,
        street: Street,
        block: Block,
        num_of_rooms: FlatType,
        storey_range: StoreyRange,
        floor_area_sqm: FloorSize,
        listing_type: ListingType,
        price: Price,
      }),
    }).then((result) => {
      handleOpen();
      console.log("In result");
      console.log(result.status); // this is how u access the status code
    });
  };
  // end submit handler

  return (
    <div className="App">
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        style={{ padding: "45px", margin: "auto", fontWeight: 600 }}
      >
        Create a New Listing
      </Typography>

      <Grid>
        <Card
          style={{
            maxWidth: 1200,
            margin: "auto",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          }}
        >
          <CardContent>
            <CardMedia component="img" height="300" src={hdb2} />
            <Typography gutterBottom variant="h5" style={{ padding: "35px" }}>
              <LooksOneIcon color="primary" fontSize="large"></LooksOneIcon> Where is 
              your house located?
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and your house will be listed!
            </Typography>

            {/* first section of options */}
            <Grid container spacing={1}>
              {/* area  */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter Area"
                  label="Area"
                  variant="outlined"
                  fullWidth
                  required
                  defaultValue={area}
                  onChange={handleAreaChange}
                />
              </Grid>
              {/* postal code */}
              <Grid item xs={12}>
                <TextField
                  onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                  }}                                 
                  type="number"
                  placeholder="Enter Postal Code"
                  label="Postal Code"
                  variant="outlined"
                  onChange={handlePostalChange}
                  defaultValue={Postal}
                  fullWidth
                  required
                />
              </Grid>
              {/* street name */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter Street"
                  label="Street"
                  variant="outlined"
                  onChange={handleStreetChange}
                  defaultValue={Street}
                  fullWidth
                  required
                />
              </Grid>
              {/* block number */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter Block Number"
                  label="Block Number"
                  variant="outlined"
                  onChange={handleBlockChange}
                  defaultValue={Block}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>

            {/* second section of options */}
            <Typography
              gutterBottom
              variant="h5"
              style={{ padding: "35px", margin: "25px" }}
            >
              <LooksTwoIcon color="primary" fontSize="large"></LooksTwoIcon>{" "}
              Tell us more about your house
            </Typography>

            <Grid container spacing={3} sx={{ marginLeft: "24px" }}>
              {/* flat type/number of rooms */}
              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  onSelect={handleFlatTypeChange}
                  defaultValue={FlatType || null}
                  options={testFlatTypeData}
                  sx={{ width: "16vw", ml: 1 }}
                  renderInput={(params) => (
                    <TextField
                      variant="filled"
                      {...params}
                      label="Flat Type"
                      required
                    />
                  )}
                />
              </Grid>
              {/* storey range */}
              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  onSelect={handleStoreyRangeChange}
                  defaultValue={StoreyRange || null}
                  options={testStoreyData}
                  sx={{ width: "16vw", ml: 1 }}
                  renderInput={(params) => (
                    <TextField
                      variant="filled"
                      {...params}
                      label="Storey Range"
                      required
                    />
                  )}
                />
              </Grid>
              {/* flat size/area sq */}
              <Grid item xs={3}>
                <TextField
                  placeholder="Enter Size of Flat"
                  label="Enter the area in sqm"
                  variant="outlined"
                  required
                  defaultValue={FloorSize}
                  onChange={handleFloorSizeChange}
                />
              </Grid>
            </Grid>

            {/* third section of options */}
            <Typography
              gutterBottom
              variant="h5"
              style={{ padding: "35px", margin: "25px" }}
            >
              <Looks3Icon color="primary" fontSize="large"></Looks3Icon> Some
              final details..
            </Typography>
            {/* listing type selection */}
            <Grid container spacing={3} columns={6} sx={{ marginLeft: "24px" }}>
              <Grid item xs={3}>
                <FormControl>
                  <FormLabel id="radio-buttons-group-label">
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ color: "black" }}
                    >
                      Listing Type
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleListingTypeChange}
                    defaultValue={ListingType || null}
                  >
                    <FormControlLabel
                      value="resale"
                      control={<Radio required={true} />}
                      label="Resale"
                      required
                    />
                    <FormControlLabel
                      value="rental"
                      control={<Radio required={true} />}
                      label="Rental"
                      required
                    />
                  </RadioGroup>
                  <br></br>
                  <br></br>
                </FormControl>
              </Grid>
              {/* price */}
              <Grid item xs={2}>
                <br></br>
                <TextField
                  type="number"
                  placeholder="Enter Price"
                  label="Price"
                  variant="outlined"
                  onChange={handlePriceChange}
                  defaultValue={Price}
                  required
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <br></br>
      <br></br>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Listing created!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, paddingBottom: "10px" }}>
            Your listing has been successfully created. Click the button below to view it!
          </Typography>
          <Button variant="contained" 
            href="/manageListing"
            sx={{ width: "60%", height: "40%", mt: 1, mb: 1}}>
            View your Listings
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

