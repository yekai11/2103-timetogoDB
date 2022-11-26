import {
  Typography,
  Box,
  //Link,
  Button,
  Slide,
} from "@mui/material";
import React from "react";
// pictures
import a_hdb from "../../assets/aesthetic_hdb.jpg";
//import hdb_homepage from "../../assets/hdb_homepage.jpg";
import building from "../../assets/building.jpg";
// various icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LayersIcon from '@mui/icons-material/Layers';
// these are bootstrap card configurations
import {Card} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import {Grid} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ListingSection() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const cardInfo = [
    {
      area: "Ang Mo Kio",
      street: "Ang Mo Kio Street 62",
      room: "2-Room",
      areaSize: "300 sq ft",
      price: "2000",
    },
    {
      area: "Bedok",
      street: "Bedok North Street 3",
      room: "3-Room",
      areaSize: "400 sq ft",
      price: "3000",
    },
    {
      area: "Bishan",
      street: "Bishan Street 11",
      room: "4-Room",
      areaSize: "700 sq ft",
      price: "3800",
    },
    {
      area: "Bukit Batok",
      street: "Bukit Batok Rd",
      room: "4-Room",
      areaSize: "600 sq ft",
      price: "4000",
    },
    {
      area: "Bukit Merah",
      street: "Jalan Bukit Merah",
      room: "5-Room",
      areaSize: "900 sq ft",
      price: "5000",
    },
    {
      area: "Bukit Panjang",
      street: "Pending Rd",
      room: "5-Room",
      areaSize: "900 sq ft",
      price: "6000",
    }
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="ListCard">
      <Card.Img variant="top" src={a_hdb} />
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
                    sx={{ mt: 1, fontSize: 28, paddingBottom: 1, fontWeight: 500, color: "#242424" }}
                  > {card.area} {/* assume area from DB here */}
                  </Typography>
                </Box>
          </Card.Title> 
            <hr></hr>
            <Card.Text>{card.street}</Card.Text> {/* assume street address from DB */}
            <hr style={{margin: 0}}></hr>
        </Card.Body>

        <ListGroup horizontal className="flex-fill border-0">
            <ListGroup.Item className="flex-fill border-0">
                <ApartmentIcon color="primary" fontSize="large" />
              {card.room} {/* assume no of rooms from DB */}
            </ListGroup.Item>
            <ListGroup.Item className="flex-fill border-0">
                <LayersIcon color="primary" fontSize="large" />
              {card.areaSize} {/* assume area of flat from DB */}
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
            ${card.price}/month
          </Typography>
        </Card.Text>

        <Card.Body className="ListButton">
          <Button 
              onclick={handleClickOpen}
              startIcon={<FavoriteIcon sx={{ color: "#d32f2f" }} />}
              variant="contained"
              > Indicate Interest
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
            height: "55%",
            width: "100%",
            position: "absolute",
            opacity: 0.4,
            objectFit: "cover",
          }}
          src={building}
        ></img>
        <Typography variant="h3" sx={{ fontWeight: 400, paddingLeft: 5 }}>
          Affordable Rental Homes
        </Typography>
      </Box>
      <br></br><br></br>
      <Grid container>
          {cardInfo.map(renderCard)}
      </Grid>
      <br></br><br></br>
    </div>
  );
};
