import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';

export default function FeatureSection() {
  return (
    <div>
      <Box
        sx={{
          mt: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          color="#b5b5b5"
          variant="subtitle1"
          sx={{ fontWeight: "bold",mb:1 }}
        >
          Features
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          How Can We Help?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "60vh",
          alignItems: "center",
        }}
      >
        <Grid container spacing={8} sx={{ paddingX: 10 }}>
          <Grid item lg={4}>
            <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                border: 2,
                height: "40vh",
                boxShadow: 3,
                borderRadius: 5,
                borderColor: "#ebeded",
                pl:7,
                pr:7
              }}
            >
              <SearchRoundedIcon color="secondary" sx={{ fontSize: 100,mt:5, mb:2}} />
              <Typography variant="h4" gutterBottom="true" sx={{ fontWeight: "bold" }}>
                Easy To Find
              </Typography>
              <Typography align="justify" variant="body1" color="#545454" sx={{fontWeight:'bold'}}>
                Here you can find your residences easily because we have worked with hundreds of homeowners with quality and affordable prices.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                border: 2,
                height: "40vh",
                boxShadow: 3,
                borderRadius: 5,
                borderColor: "#ebeded",
                pl:7,
                pr:7
              }}
            >
              <PaidRoundedIcon color="secondary" sx={{ fontSize: 100, mt:5, mb:2 }} />
              <Typography variant="h4" gutterBottom="true" sx={{ fontWeight: "bold" }}>
                Affordable Prices
              </Typography>
              <Typography  align="justify" variant="body1" color="#545454" sx={{fontWeight:'bold'}}>
                Home prices that we work with are more affordable than other places, with great location and better quality than others.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                border: 2,
                height: "40vh",
                boxShadow: 3,
                borderRadius: 5,
                borderColor: "#ebeded",
                pl:7,
                pr:7
              }}
            >
              <AccessTimeFilledRoundedIcon color="secondary" sx={{ fontSize: 100, mt:5, mb:2 }} />
              <Typography variant="h4" gutterBottom="true" sx={{ fontWeight: "bold" }}>
                Quickly Process
              </Typography>
              <Typography  align="justify" variant="body1" color="#545454" sx={{fontWeight:'bold'}}>
                With a quick and easy process, you don't have to wait a long time to inhabit your dream home immediatey with your loved ones.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

