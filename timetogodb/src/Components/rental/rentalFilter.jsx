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

/* values here should be taken from DB */
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

/* values here should be taken from DB */
const testFlatTypeData = [
  { label: "2-Room" },
  { label: "3-Room" },
  { label: "4-Room" },
  { label: "5-Room" },
  { label: "Homeless" },
];

/* values here should be taken from DB */
const testPriceData = [
  { label: "$1000 & below" },
  { label: "$2000" },
  { label: "$3000" },
  { label: "$4000 & Above" },
  { label: "donovan" },
];

/* values here should be taken from DB */
const testStoreyData = [
  { label: "1st Floor - 4th Floor" },
  { label: "5th Floor - 9th Floor" },
  { label: "10th Floor - 14th Floor" },
  { label: "15th Floor - 19th Floor" },
  { label: "donovan" },
  { label: "20th Floor & Above" },
];

/* values here should be taken from DB */
const testAreaData = [
  { label: "300 to 400 sq ft" },
  { label: "400 to 500 sq ft" },
  { label: "600 to 700 sq ft" },
  { label: "400 to 500 sq ft" },
  { label: "donovan" },
  { label: "900 sq ft & above" },
];

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
<br></br><br></br>
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
              defaultValue={testLocationData[5]}
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
                defaultValue={testFlatTypeData[4]}
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
                defaultValue={testPriceData[4]}
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
                defaultValue={testStoreyData[4]}
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
                defaultValue={testAreaData[4]}
                sx={{ width: "16vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Area Size" />
                )}
              />
            </Box>
          </Box>

          <Button variant="contained" sx={{ width: "50%", mt: 1, mb: 1 }}>
            Apply  
          </Button>
        </Box>
      </Box>
      <br></br><br></br>
    </div>
  );
}
