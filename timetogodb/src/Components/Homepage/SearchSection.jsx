import {
  Typography,
  Box,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import building from "../../assets/building.jpg";
import { styled, lighten, darken } from "@mui/system";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  textAlign: "left",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function SearchSection() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "55vh",
          color: "primary",
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
        <Typography
          sx={{
            mb: 2,
            zIndex: 0,
            fontWeight: 500,
            color: "#2f302f",
            padding: "15px",
          }}
          variant="h3"
        >
          Find your dream home today
        </Typography>
        <Box
          boxShadow={2}
          borderRadius={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            padding: 2,
            backgroundColor: "rgba(255, 255, 255,.9);",
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              mb: 2,
              zIndex: 0,
              fontWeight: 500,
              color: "#2f302f",
              padding: "10px",
            }}
            variant="h4"
          >
            Looking to Rent a home?
          </Typography>
          <Button variant="contained" 
            href="/rental"
            sx={{ width: "50%", height: "40px", mt: 1, mb: 1 }}>
            Click here!
          </Button>
          <Typography
            sx={{
              mb: 2,
              zIndex: 0,
              fontWeight: 500,
              color: "#2f302f",
              padding: "10px",
            }}
            variant="h4"
          >
            or buy a Resale flat?
          </Typography>
          <Button variant="contained" 
            href="/resale"
            sx={{ width: "50%", height: "40px", mt: 1, mb: 1 }}>
            Click here!
          </Button>
        </Box>
      </Box>
    </div>
  );
}
