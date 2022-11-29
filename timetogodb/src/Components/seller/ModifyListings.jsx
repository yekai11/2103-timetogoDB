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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
// pictures
import hdb3 from "../../assets/hdb3.jpg";
// icons
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

const handleModifyListingAPI = "http://localhost:5000/seller/updateListing";

const testFlatTypeData = [
  // copy of the filter options
  { label: "1 ROOM" },
  { label: "2 ROOM" },
  { label: "3 ROOM" },
  { label: "4 ROOM" },
  { label: "5 ROOM" },
  { label: "EXECUTIVE" },
  { label: "MULTI-GENERATION" },
];

const testStoreyData = [
  // copy of the filter options
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

export default function ModifyListing() {
  const [area, setArea] = useState("");
  const [Postal, setPostal] = useState("");
  const [Street, setStreet] = useState("");
  const [Block, setBlock] = useState("");
  const [numOfRooms, setNumOfRooms] = useState("");
  const [StoreyRange, setStoreyRange] = useState("");
  const [FloorSize, setFloorSize] = useState("");
  const [ListingType, setListingType] = useState("");
  const [Price, setPrice] = useState("");
  const { account_id } = useParams();

  useEffect(()=>{
    console.log(account_id);
    fetch(`http://localhost:5000/seller/oneListing/${account_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((json_result) =>{
        setArea(json_result[0].area);
        setPostal(json_result[0].postal_code);
        setStreet(json_result[0].street);
        setBlock(json_result[0].block)
        setNumOfRooms(json_result[0].num_of_rooms);
        setStoreyRange(json_result[0].storey_range);
        setFloorSize(json_result[0].floor_area_sqm);
        setListingType(json_result[0].listing_type);
        setPrice(json_result[0].price);
      })
    })
  },[]);

  // this whole chunk of codes to handle change in values on the forms
  const [accountID, setAccountID] = React.useState(
    window.localStorage.getItem("accountID")
  );

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handlePostalChange = (event) => {
    setPostal(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleBlockChange = (event) => {
    setBlock(event.target.value);
  };

  const handleNumOfRooms = (event) => {
    setNumOfRooms(event.target.value);
  };

  const handleStoreyRangeChange = (event) => {
    setStoreyRange(event.target.value);
  };

  const handleFloorSizeChange = (event) => {
    setFloorSize(event.target.value);
  };

  const handleListingTypeChange = (event) => {
    setListingType(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
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
    fetch(handleModifyListingAPI, {
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
        num_of_rooms: numOfRooms,
        storey_range: StoreyRange,
        floor_area_sqm: FloorSize,
        listing_type: ListingType,
        price: Price,
      }),
    }).then((result) => {
      /*
      This is what comes back, it will return a status code 200 if listing successfully updated
      If validation error, status code 400 will be returned
      If email already registered, status code 409 will be returned
      */
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
        Modify your Listing
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
            <CardMedia component="img" height="300" src={hdb3} />
            <Typography gutterBottom variant="h5" style={{ padding: "35px" }}>
              <LooksOneIcon color="primary" fontSize="large"></LooksOneIcon> Are
              you updating your house address?
            </Typography>

            {/* <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and your house will be listed!
            </Typography> */}

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
                  value={area}
                  onChange={handleAreaChange}
                />
              </Grid>
              {/* postal code */}
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="Enter Postal Code"
                  label="Postal Code"
                  variant="outlined"
                  onChange={handlePostalChange}
                  value={Postal}
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
                  value={Street}
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
                  value={Block}
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
              What about these other details?
            </Typography>

            <Grid container spacing={3} sx={{ marginLeft: "24px" }}>
              {/* flat type/number of rooms */}
              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  onSelect={handleNumOfRooms}
                  value={numOfRooms || null}
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
                  value={StoreyRange || null}
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
                  value={FloorSize}
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
              final changes?
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
                    value={ListingType || null}
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
                  value={Price}
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
    </div>
  );
}
