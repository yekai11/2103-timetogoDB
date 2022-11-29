import { Typography, Box, Link, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import a_hdb from "../../../assets/aesthetic_hdb.jpg";
import hdb_homepage from "../../../assets/hdb_homepage.jpg";
import LocationIcon from "@mui/icons-material/LocationOn";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function ListingSection() {
  return (
    <div>
      <Box
        sx={{
          background:
            "linear-gradient(rgba(255,255,255,1) 50%, rgba(102,106,209,1) 50%)",
          height: "110vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "100%",
          }}
        >
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
            <Typography variant="h3" sx={{ fontWeight: 400 }}>
              Popular Homes
            </Typography>
            <Link
              // href=""
              variant="body1"
              sx={{ fontWeight: 500, color: "black" }}
            >
              See All
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2,
              height: "70%",
              width: "100%",
            }}
          >
            {/*First card */}
            <Box
              sx={{
                width: "25%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <img
                src={a_hdb}
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
                  <LocationIcon
                    color="primary"
                    sx={{ paddingTop: 3, fontSize: 60 }}
                  />
                  <Typography
                    variant="h4"
                    align="left "
                    sx={{ mt: 3, fontWeight: 500, color: "#242424" }}
                  >
                    Yio Chu Kang
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Beautiful Resale home....
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
                    $3,000
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
                <Button href='resale'variant="contained">
                  See More
                </Button>
              </Box>
            </Box>

            {/*Second card */}
            <Box
              sx={{
                width: "25%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <img
                src={hdb_homepage}
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
                  <LocationIcon
                    color="primary"
                    sx={{ paddingTop: 3, fontSize: 60 }}
                  />
                  <Typography
                    variant="h4"
                    align="left "
                    sx={{ mt: 3, fontWeight: 500, color: "#242424" }}
                  >
                    Tampines
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Beautiful rental home...
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
                    $4,000
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
                <Button href='/rental'variant="contained">
                  See more
                </Button>
              </Box>
            </Box>

            {/*Third card */}
            <Box
              sx={{
                width: "25%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <img
                src={a_hdb}
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
                  <LocationIcon
                    color="primary"
                    sx={{ paddingTop: 3, fontSize: 60 }}
                  />
                  <Typography
                    variant="h4"
                    align="left "
                    sx={{ mt: 3, fontWeight: 500, color: "#242424" }}
                  >
                    Jurong West
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Beautiful rental home...
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
                    $5,000
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
                <Button href ='rental' variant="contained">
                  See more
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#666ad1",
            display: "flex",
            flexDirection: "row",
            height: "40vh",
            width: "100%",
            zIndex: 10,
            position: "absolute",
            translate: "0 270%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mb: 10,
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography
                color="white"
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Daniel Wang
              </Typography>
              <Typography
                color="#363434"
                variant="subtitle1"
                sx={{ fontWeight: 600 }}
              >
                CEO Find-A-Home
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "50%",
              }}
            >
              <FormatQuoteIcon color="primary" fontSize="large" />
              <Typography
                color="#f0f0f0"
                variant="h4"
                sx={{ mt: 2, ml: 1, textAlign: "left", fontWeight: 700 }}
              >
                Here you can find your dream house easily and efficiently, with
                a wide range of choices that will meet your needs.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
