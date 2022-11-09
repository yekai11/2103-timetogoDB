import { Typography, Box, Link, Grid } from "@mui/material";
import React from "react";
import ListingComponent from "./ListingComponent";
import a_hdb from "../../../assets/aesthetic_hdb.jpg";
import hdb_homepage from "../../../assets/hdb_homepage.jpg";

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
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Popular Residences
            </Typography>
            <Link
              href="/"
              variant="body1"
              sx={{ fontWeight: "bold", color: "black" }}
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
            <ListingComponent
              img={a_hdb}
              location={"Yio Chu Kang"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              price={"3,000"}
            />
            <ListingComponent
              img={hdb_homepage}
              location={"Tampines"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              price={"4,000"}
            />
            <ListingComponent
              img={a_hdb}
              location={"My House"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
              price={"5,000"}
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#666ad1",
            display: "flex",
            height: "40vh",
            width: "100%",
            zIndex: 10,
            position: "absolute",
            translate: "0 250%",
            // border:2,
            // borderColor:'red'
          }}
        >
          {/* <Typography>asdasd</Typography> */}
        </Box>
      </Box>
    </div>
  );
}
