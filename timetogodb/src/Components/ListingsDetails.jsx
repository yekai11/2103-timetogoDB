import { Typography, Box, Button, Slide, Grid } from "@mui/material";
import React, { useEffect, useMemo } from "react";
// pictures
import listingHeader from "../assets/listingHeader.jpg";
import rentListIcon from "../assets/rentListIcon.jpg";
// various icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LayersIcon from "@mui/icons-material/Layers";
import FavoriteIcon from '@mui/icons-material/Favorite';
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [accountID, setAccountID] = React.useState(
    window.localStorage.getItem("accountID")
  );

  /* useEffect to get all listings and display */
  useEffect(() => {
    fetch(`http://localhost:5000/listing/getListing/${listing_id}`).then((result) => {
      console.log(result);
      result.json().then((response) => {
        /*this response is where the json is stored at.
          its a huge array of objects like CardInfo example below
          Need to setup DB to know what is sent back
          */
        console.log(response);
        setCardInfo(response);
        setCurrentPage(1);
      });
    });
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
            height: "500px",
            width: "100%",
            position: "absolute",
            objectFit: "cover",
          }}
          src={listingHeader}
        ></img>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            paddingLeft: 5,
            textShadow: "1px 1px 2px white",
            paddingTop: "300px",
          }}
        >
          {card.num_of_rooms}
        </Typography>
      </Box>
      <br></br>
      <br></br>
      <Grid container sx={{ paddingTop: "6%" }}>
        <Card style={{ width: "90%" }} className="ListCard">
          {/*key={index}*/}
          <Card.Body>
            <Card.Title className="align-self-left">
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
                    {card.num_of_rooms}
                  </ListGroup.Item>
                  <ListGroup.Item className="flex-fill border-0">
                    <LayersIcon color="primary" fontSize="large" />
                    {card.floor_area_sqm} sqm
                  </ListGroup.Item>
                </ListGroup>
              </Box>
            </Card.Title>
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
                  {card.num_of_rooms}
                </ListGroup.Item>
                <ListGroup.Item className="flex-fill border-0">
                  <LayersIcon color="primary" fontSize="large" />
                  {card.floor_area_sqm} sqm
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
                  {card.num_of_rooms}
                </ListGroup.Item>
                <ListGroup.Item className="flex-fill border-0">
                  <LayersIcon color="primary" fontSize="large" />
                  {card.floor_area_sqm} sqm
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
                  {card.num_of_rooms}
                </ListGroup.Item>
                <ListGroup.Item className="flex-fill border-0">
                  <LayersIcon color="primary" fontSize="large" />
                  {card.floor_area_sqm} sqm
                </ListGroup.Item>
              </ListGroup>
            </Box>
          </Card.Body>

          <Card.Body className="ListButton">
            <Button onclick={handleClickOpen} variant="contained" size="large">
              {" "}
              <FavoriteIcon color="primary" fontSize="large" />
              Add Interest
            </Button>
          </Card.Body>
        </Card>
      </Grid>
    </div>
  );
}
