import {
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ListingComponent(props) {
  return (
    <div>
      <Box
        sx={{
          width: "70%",
          height: "100%",
          backgroundColor: "white",
          // "&:hover": {
          //   backgroundColor: "#d32f2f",
          // },
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
            <LocationOnIcon color="primary" fontSize="large" sx={{ paddingTop: 3 }} />
            <Typography variant="h4" align="left " sx={{ mt: 3, fontWeight:500, color:'#242424' }}>
              {props.location}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="justify"
              sx={{fontWeight:400}}
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
              sx={{ fontWeight: 500 }}
            >
              ${props.price}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{
                ml: 1,
                fontWeight: 500,
                color: "#878787",
              }}
            >
              /month
            </Typography>
          </Box>
          <Button startIcon={<FavoriteIcon sx={{color:'#d32f2f'}}/>} variant="contained">Indicate Interest</Button>
        </Box>
      </Box>
    </div>
  );
}
