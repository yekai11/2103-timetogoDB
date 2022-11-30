import { Typography, Box, Button, Slide, Grid } from "@mui/material";
import React, { useEffect, useMemo } from "react";
// pictures
import listingHeader from "../assets/listingHeader.jpg";
// various icons
import DateRangeIcon from '@mui/icons-material/DateRange';
import HeightIcon from "@mui/icons-material/Height";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LayersIcon from "@mui/icons-material/Layers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// these are bootstrap card configurations
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import { useParams } from "react-router-dom";

// button leads you back to the top after scrolling a certain amount
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsSection() {
  const [currentPage, setCurrentPage] = React.useState(0);

  const [card, setCardInfo] = React.useState([]);

  const { listing_id } = useParams();

  const account_id = window.localStorage.getItem("accountID");
  console.log(account_id);
  const handleClickOpen = () => {
    fetch(`http://localhost:5000/interest/addInterest`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account_id: account_id,
        listing_id: listing_id,
      }),
    }).then((result) => {});
  };

  const [accountID, setAccountID] = React.useState(
    window.localStorage.getItem("accountID")
  );

  /* useEffect to get all listings and display */
  useEffect(() => {
    fetch(`http://localhost:5000/listing/getListing/${listing_id}`).then(
      (result) => {
        result.json().then((response) => {
          /*this response is where the json is stored at.
          its a huge array of objects like CardInfo example below
          Need to setup DB to know what is sent back
          */
          console.log(response);
          setCardInfo(response);
          setCurrentPage(1);
        });
      }
    );
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          height: "10%",
          alignItems: "center",
          mt: 2,
        }}
      >
        <img
          alt="banner"
          style={{
            zIndex: -1,
            height: "80%",
            width: "100%",
            position: "absolute",
            objectFit: "cover",
            opacity: 0.8,
          }}
          src={listingHeader}
        ></img>
        <Typography
          variant="h3"
          color="common.white"
          sx={{
            fontWeight: 600,
            paddingLeft: 10,
            textShadow: "2px 2px 2px black",
            paddingTop: "200px",
          }}
        >
          {card.area}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          height: "10%",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography
          variant="h4"
          color="common.white"
          sx={{
            fontWeight: 600,
            paddingLeft: 10,
            textShadow: "2px 2px 2px black",
          }}
        >
          {card.block}, {card.street}, {card.postal_code},
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          height: "10%",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography
          variant="h4"
          color="common.white"
          sx={{
            fontWeight: 600,
            paddingLeft: 10,
            textShadow: "2px 2px 2px black",
          }}
        >
          ${card.price}
        </Typography>
      </Box>
      <br></br>
      <br></br>
      <Grid container sx={{ paddingTop: "6%" }}>
        <Card style={{ width: "90%" }} className="ListCard">
          {/*key={index}*/}
          <Card.Body>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListGroup horizontal className="flex-fill border-0">
                <ListGroup.Item className="flex-fill border-0">
                  <FormatListBulletedIcon color="primary" fontSize="large" />
                  Listing Type: {card.listing_type}
                </ListGroup.Item>
                <ListGroup.Item className="flex-fill border-0">
                  <HeightIcon color="primary" fontSize="large" />
                  Storey Range: {card.storey_range}
                </ListGroup.Item>
              </ListGroup>
            </Box>
          </Card.Body>

          <Card.Body>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListGroup horizontal className="flex-fill border-0">
                <ListGroup.Item className="flex-fill border-0">
                  <ApartmentIcon color="primary" fontSize="large" />
                  Flat Type: {card.num_of_rooms}
                </ListGroup.Item>
                <ListGroup.Item className="flex-fill border-0">
                  <LayersIcon color="primary" fontSize="large" />
                  Floor Area Size: {card.floor_area_sqm} sqm
                </ListGroup.Item>
              </ListGroup>
            </Box>
          </Card.Body>

          <Card.Body>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListGroup horizontal className="flex-fill border-0">
                <ListGroup.Item className="flex-fill border-0">
                  <DateRangeIcon color="primary" fontSize="large" />
                  Datetime of Listing: {card.date_of_listing}
                </ListGroup.Item>
              </ListGroup>
            </Box>
          </Card.Body>

          <Card.Body className="ListButton">
            <Button onClick={handleClickOpen} variant="contained" size="large">
              <FavoriteIcon color="secondary" fontSize="large"/>
              Add Interest
            </Button>
          </Card.Body>
        </Card>
      </Grid>
    </div>
  );
}
