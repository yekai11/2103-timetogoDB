import {
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ListingComponent(props) {
  return (
    <div>
      <Box
        sx={{
          width: "70%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <img
          src={props.img}
          alt="popular residences"
          style={{ width: "100%", height: "55%", objectFit: "cover" }}
        ></img>
        <Box    
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "40%",
            paddingLeft: 3,
            paddingRight: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <LocationOnIcon fontSize="large" sx={{ paddingTop: 3 }} />
            <Typography variant="h4" align="left " sx={{ mt: 3 }}>
              {props.location}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="justify"
            >
              {props.desc}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              color="primary"
              variant="h6"
              align="left"
              sx={{ fontWeight: "bold" }}
            >
              ${props.price}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{
                ml: 1,
                fontWeight: "bold",
                color: "#878787",
              }}
            >
              /month
            </Typography>
          </Box>
          <Button variant="contained">Buy Now</Button>
        </Box>
      </Box>
    </div>
  );
}
