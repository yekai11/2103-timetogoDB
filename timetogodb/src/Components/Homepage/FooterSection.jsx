import React from "react";
import { Typography, Box, Link } from "@mui/material";
import WeekendIcon from "@mui/icons-material/Weekend";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterSection() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "auto",
          height: "40vh",
          backgroundColor: "#303f9f",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30vw",
            height: "30vh",
            // border: 2,
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
            }}
          >
            <WeekendIcon sx={{ fontSize: 50, color: "white", mr: 1, mt: 1 }} />
            <Typography
              color="white "
              variant="h4"
              sx={{ fontWeight: "bold", textDecoration: "none", mt: 1.5 }}
            >
              Find-A-Home
            </Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#c2c2c2" }}
            >
              ICT2103 is the best mod ever yay. Time for an A+
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // border: 2,
            // borderColor: "blue",
            width: "30vw",
            height: "30vh",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mt: 2, color: "white" }}
          >
            Menu
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
            <Link href="/" sx={{ color: "#c2c2c2", fontSize: 17 }}>
              Home
            </Link>
            <Link href="/resale" sx={{ color: "#c2c2c2", fontSize: 17, mt: 3 }}>
              Resale
            </Link>
            <Link href="/rental" sx={{ color: "#c2c2c2", fontSize: 17, mt: 3 }}>
              Rental
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "yellow",
            width: "30vw",
            height: "30vh",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mt: 2, color: "white" }}
          >
            Stay Connected With Us
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="">
              <FacebookIcon sx={{ color: "#c2c2c2", fontSize: 50, mr: 2 }} />
            </Link>
            <Link href="">
              <InstagramIcon sx={{ color: "#c2c2c2", fontSize: 50, mr: 2 }} />
            </Link>
            <Link href="">
              <TwitterIcon sx={{ color: "#c2c2c2", fontSize: 50 }} />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 3, backgroundColor: "#303f9f", pb:2 }}>
        <Typography
          variant="caption1"
          sx={{ color: "#c2c2c2", fontWeight: "bold" }}
        >
          2022 © Find-A-Home
        </Typography>
      </Box>
    </div>
  );
}
