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

const testLocationData = [
  { title: "Ang Mo Kio" },
  { title: "Bedok" },
  { title: "Bishan" },
  { title: "Bukit Batok" },
  { title: "Bukit Merah" },
  { title: "Bukit Panjang" },
  { title: "Bukit Timah" },
  { title: "Central Area" },
  { title: "Choa Chu Kang" },
  { title: "Clementi" },
  { title: "Geylang" },
  { title: "Hougang" },
  { title: "Jurong East" },
  { title: "Jurong West" },
  { title: "Kallang/ Whampoa" },
  { title: "Marine Parade" },
  { title: "Pasir Ris" },
  { title: "Punggol" },
  { title: "Queenstown" },
  { title: "Sembawang" },
  { title: "Sengkang" },
  { title: "Serangoon" },
  { title: "Tampines" },
  { title: "Tengah" },
  { title: "Toa Payoh " },
  { title: "Woodlands" },
  { title: "Yishun " },
];

const testFlatTypeData = [
  { label: "2-Room" },
  { label: "3-Room" },
  { label: "4-Room" },
  { label: "5-Room" },
  { label: "Homeless" },
];

const testLookingForData = [{ label: "Resale" }, { label: "Rental" }];

const options = testLocationData.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    ...option,
  };
});

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  textAlign:"left",
  fontWeight:'bold',
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
          sx={{ mb: 2, zIndex: 0, fontWeight: "bold", color: "#2f302f" }}
          variant="h2"
        >
          Find your dream home today
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "40vw",
            padding: 2,
            backgroundColor: "rgba(255, 255, 255,.9);",
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 2,
              m: 2,
            }}
          >
            <LocationOnIcon color="primary" fontSize="large" />
            <Autocomplete
              disablePortal
              defaultValue={testLocationData[5]}
              options={options.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.title}
              sx={{ width: "29vw", ml: 1 }}
              renderInput={(params) => (
                <TextField variant="filled" {...params} label="Location" />
              )}
              renderGroup={(params) => (
                <li>
                  <GroupHeader>{params.group}</GroupHeader>
                  <GroupItems>{params.children}</GroupItems>
                </li>
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              m: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mr: 2,
              }}
            >
              <ApartmentIcon color="primary" fontSize="large" />
              <Autocomplete
                disablePortal
                options={testFlatTypeData}
                defaultValue={testFlatTypeData[4]}
                sx={{ width: "13vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Flat-Type" />
                )}
              />
            </Box>
            <AssignmentIcon color="primary" fontSize="large" />
            <Autocomplete
              disablePortal
              options={testLookingForData}
              defaultValue={testLookingForData[1]}
              sx={{ width: "13vw", ml: 1 }}
              renderInput={(params) => (
                <TextField variant="filled" {...params} label="Listing Type" />
              )}
            />
          </Box>
          <Button variant="contained" sx={{ width: "20%", mt: 1, mb: 1 }}>
            Search
          </Button>
        </Box>
      </Box>
    </div>
  );
}
