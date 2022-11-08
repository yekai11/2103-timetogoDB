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
            color:'primary'
          }}
        >
          <img
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
                options={testLocationData}
                defaultValue="Yio Chu Kang"
                sx={{ width: "30vw", ml: 1 }}
                renderInput={(params) => (
                  <TextField variant="filled" {...params} label="Location" />
                )}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "space-between",
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
                  defaultValue="Homeless"
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
                defaultValue="Rental"
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
  
  const testLocationData = [
    { label: "Yio Chu Kang" },
    { label: "Ang Mo Kio" },
    { label: "Bukit Panjang" },
    { label: "Tampines" },
    { label: "Yishun" },
    { label: "Boon Lay" },
  ];
  
  const testFlatTypeData = [
    { label: "2-Room" },
    { label: "3-Room" },
    { label: "4-Room" },
    { label: "5-Room" },
    { label: "Homeless" },
  ];
  
  const testLookingForData = [{ label: "Resale" }, { label: "Rental" }];
  