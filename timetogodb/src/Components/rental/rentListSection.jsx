import { Typography, Box, Button, Slide, Grid } from "@mui/material";
import React, { useEffect, useMemo } from "react";
// pictures
import rentalBanner from "../../assets/rentalBanner.jpg";
import rentListIcon from "../../assets/rentListIcon.jpg";
// various icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LayersIcon from "@mui/icons-material/Layers";
// these are bootstrap card configurations
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
// testing multiple page implementation 
import Pagination from '../multiplepage/Pagination';

let PageSize = 30;

const allRentalAPI = "http://localhost:5000/rental/allRental"; //const url for easy changing of api links

// button leads you back to the top after scrolling a certain amount
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ListingSection() {
  const [currentPage, setCurrentPage] = React.useState(0);

  const [cardInfo, setCardInfo] = React.useState([]);

  const handleClickOpen = (listing_id) => {
    window.location.href = `DetailsPage/${listing_id}`;
  };

  /* useEffect to get all listings and display */
  useEffect(() => {
    fetch(allRentalAPI).then((result) => {
      /*
        This is what comes back, it will return a status code 200 if successfully get resale data
        If get resale data error, status code 400 will be returned
        */
      if (result.status === 200) {
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
      }
      if (result.status === 400) {
        // error here
      }
    });
  }, []);

  // slices the data into different pages according to the page limit set
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cardInfo.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="ListCard">
        <Card.Img variant="top" src={rentListIcon} />
        <Card.Body>
          <Card.Title className="align-self-left">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LocationOnIcon color="primary" fontSize="large" />
              <Typography
                variant="h4"
                align="left "
                sx={{
                  mt: 1,
                  fontSize: 25,
                  paddingBottom: 1,
                  fontWeight: 500,
                  color: "#242424",
                }}
              >
                {" "}
                {card.area} {/* assume area from DB here */}
              </Typography>
            </Box>
          </Card.Title>
          <hr></hr>
          <Card.Text>{card.street}</Card.Text>{" "}
          {/* assume street address from DB */}
          <hr style={{ margin: 0 }}></hr>
        </Card.Body>

        <ListGroup horizontal className="flex-fill border-0">
          <ListGroup.Item className="flex-fill border-0">
            <ApartmentIcon color="primary" fontSize="large" />
            {card.num_of_rooms} {/* assume no of rooms from DB */}
          </ListGroup.Item>
          <ListGroup.Item className="flex-fill border-0">
            <LayersIcon color="primary" fontSize="large" />
            {card.floor_area_sqm} sqm {/* assume area of flat from DB */}
          </ListGroup.Item>
        </ListGroup>

        <Card.Text>
          <Typography
            color="primary"
            variant="h6"
            align="left"
            paddingLeft={1}
            sx={{ fontWeight: 500 }}
          >
            ${card.price} /month
          </Typography>
        </Card.Text>

        <Card.Body className="ListButton">
          <Button
            variant="contained"
            size="large"
            onClick={() => handleClickOpen(card.listing_id)}
            sx={{ width: "60%", height: "40%", mt: 1, mb: 1 }}>
            {" "}
            View Details
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div class="ListCardContainer">
      <br></br>
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
            height: "500",
            width: "100%",
            position: "absolute",
            opacity: 0.4,
            objectFit: "cover",
          }}
          src={rentalBanner}
        ></img>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            paddingLeft: 5,
            textShadow: "1px 1px 2px white",
          }}
        >
          Affordable Rental Homes
        </Typography>
      </Box>
      <br></br>
      <br></br>
      <Grid container
        sx={{ paddingRight: "3%" }}
      >
        {currentTableData.map(renderCard)}
      </Grid>
      <br></br>
      <br></br>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={cardInfo.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
