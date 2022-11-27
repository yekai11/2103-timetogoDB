import {
  Typography,
  Box,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import React from "react";

/* icons for the filter options */
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HeightIcon from '@mui/icons-material/Height';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LayersIcon from '@mui/icons-material/Layers';
import { styled, lighten, darken } from "@mui/system";

const filterResaleAPI = "http://localhost:5000/resale/filterResale"; //const url for easy changing of api links 

/* values here should be taken from DB */ const testLocationData = [ // no need to convert
  { title: "All of Singapore" },
  { title: "ANG MO KIO" },
  { title: "BEDOK" },
  { title: "BISHAN" },
  { title: "BUKIT BATOK" },
  { title: "BUKIT MERAH" },
  { title: "BUKIT PANJANG" },
  { title: "BUKIT TIMAH" },
  { title: "CENTRAL AREA" },
  { title: "CHOA CHU KANG" },
  { title: "CLEMENTI" },
  { title: "GEYLANG" },
  { title: "HOUGANG" },
  { title: "JURONG EAST" },
  { title: "JURONG WEST" },
  { title: "KALLANG" },
  { title: "MARINE PARADE" },
  { title: "PASIR RIS" },
  { title: "PUNGGOL" },
  { title: "QUEENSTOWN" },
  { title: "SEMBAWANG" },
  { title: "SENGKANG" },
  { title: "SERANGOON" },
  { title: "TAMPINES" },
  { title: "TOA PAYOH" },
  { title: "WOODLANDS " },
  { title: "YISHUN" },
]; 

/* values here should be taken from DB */ const testFlatTypeData = [ // no need to convert
  { label: "All types" },
  { label: "1 ROOM" },
  { label: "2 ROOM" },
  { label: "3 ROOM" },
  { label: "4 ROOM" },
  { label: "5 ROOM" },
  { label: "EXECUTIVE" },
  { label: "MULTI-GENERATION" },
]; 

/* values here should be taken from DB */ const testPriceData = [// Conversion to range needed
  { label: "All prices" },
  { label: "$200k & below" },
  { label: "$201k - $300k" },
  { label: "$301k - $400k" },
  { label: "$401k - $500k" },
  { label: "$501k - $600k" },
  { label: "$601k & Above" },
]; 

/* values here should be taken from DB */ const testStoreyData = [ // conversion to range needed
  { label: "All Floors" },
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

/* values here should be taken from DB */ const testAreaData = [ // conversion to range needed
  { label: "All sizes" },
  { label: "30 to 50 sq m" },
  { label: "60 to 80 sq m" },
  { label: "90 to 110 sq m" },
  { label: "110 to 130 sq m" },
  { label: "140 sq m & Above" },
];

/* Filter submit handler */
const handleResaleFilter = () => {
  fetch(filterResaleAPI, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      // //insert fields here
      // area: ,
      // num_of_rooms: ,
      // price: ,
      // storey_range: ,
      // floor_area_sqm: ,
    }),
  }).then((result) => {
    /*
    This is what comes back, it will return a status code 200 if account successfully created
    If validation error, status code 400 will be returned
    If email already registered, status code 409 will be returned 
    */
    console.log("In result");
    console.log(result.status); // this is how u access the status code
  });
};

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
          //height: "55vh",
          color: "primary",
        }}
      >
      <br></br>
      <br></br>
        <Box boxShadow={2} borderRadius={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            //height: "100vw",
            padding: 2,
            backgroundColor: "rgba(255, 255, 255,.9);",
            borderRadius: 5,
          }}
        >
        <Typography
          variant="h4"
          align="left "
          sx={{ mt: 3, fontWeight: 500, color: "#242424" }}
        >  Filter & Sort
        </Typography>
        <hr  style={{
          color: '#000000',
          backgroundColor: '#000000',
          width: 100,
          borderColor : '#000000'
        }}/>

        {/* 1st filter option */}
          <Box
            sx={{
              display: "flex", flexDirection: "row", alignItems: "center",
              paddingTop: 2, m: 2,
            }}
          >
            <LocationOnIcon color="primary" fontSize="large" />
            <Autocomplete
              disablePortal
              defaultValue={testLocationData[0]}
              options={options.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.title}
              sx={{ width: "16vw", ml: 1 }}
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

        {/* 2nd filter option */}
          <Box
            sx={{
              display: "flex", flexDirection: "row",
              alignItems: "center", m: 2, paddingLeft: 2
            }}
          > 
            <Box
              sx={{
                display: "flex", flexDirection: "row",
                alignItems: "center", mr: 2,
              }}
            >
              <ApartmentIcon color="primary" fontSize="large" />
              <Autocomplete
                disablePortal
                options={testFlatTypeData}
                defaultValue={testFlatTypeData[0]}
                sx={{ width: "16vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Flat Type" />
                )}
              />
            </Box>
          </Box>

        {/* 3rd filter option */}
            <Box
            sx={{
              display: "flex", flexDirection: "row",
              alignItems: "center", m: 2, paddingLeft: 2
            }}
          > 
            <Box
              sx={{
                display: "flex", flexDirection: "row",
                alignItems: "center", mr: 2,
              }}
            >
              <PriceChangeIcon color="primary" fontSize="large" />
              <Autocomplete
                disablePortal
                options={testPriceData}
                defaultValue={testPriceData[0]}
                sx={{ width: "16vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Price Range" />
                )}
              />
            </Box>
          </Box>

        {/* 4th filter option */}
            <Box
            sx={{
              display: "flex", flexDirection: "row",
              alignItems: "center", m: 2, paddingLeft: 2
            }}
          > 
            <Box
              sx={{
                display: "flex", flexDirection: "row",
                alignItems: "center", mr: 2,
              }}
            >
              <HeightIcon color="primary" fontSize="large" />
              <Autocomplete
                disablePortal
                options={testStoreyData}
                defaultValue={testStoreyData[0]}
                sx={{ width: "16vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Storey Range" />
                )}
              />
            </Box>
          </Box>

{/* 5th filter option */}
          <Box
            sx={{
              display: "flex", flexDirection: "row",
              alignItems: "center", m: 2, paddingLeft: 2
            }}
          > 
            <Box
              sx={{
                display: "flex", flexDirection: "row",
                alignItems: "center", mr: 2,
              }}
            >
              <LayersIcon color="primary" fontSize="large" />
              <Autocomplete
                disablePortal
                options={testAreaData}
                defaultValue={testAreaData[0]}
                sx={{ width: "16vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Area Size" />
                )}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{ width: "50%", mt: 1, mb: 1 }}
            onClick={handleResaleFilter}
          >
            Apply
          </Button>
        </Box>
      </Box>
      <br></br><br></br>
    </div>
  );
}
