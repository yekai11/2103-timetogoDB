import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";

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
          sx={{ fontWeight: 600, mb: 1 }}
        >
          Features
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
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
        <Grid container spacing={6} sx={{ paddingX: 10 }}>
          <Grid item lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: 2,
                height: "40vh",
                boxShadow: 3,
                borderRadius: 5,
                borderColor: "#ebeded",
                pl: 7,
                pr: 7,
                pb: 2,
              }}
            >
              <SearchRoundedIcon
                color="secondary"
                sx={{ fontSize: { sm: 25, md: 50, lg: 100 }, mt: 5, mb: 2 }}
              />
              <Typography
                variant="h4"
                gutterBottom="true"
                sx={{ fontWeight: 600, fontSize: { sm: 25, md: 30, lg: 35 } }}
              >
                Easy To Find
              </Typography>
              <Typography
                align="justify"
                variant="body1"
                color="#545454"
                sx={{ fontWeight: 400, overflow: "hidden" }}
              >
                Here you can find your residences easily because we have worked
                with hundreds of homeowners with quality and affordable prices.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: 2,
                height: "40vh",
                boxShadow: 3,
                borderRadius: 5,
                borderColor: "#ebeded",
                pl: 7,
                pr: 7,
                pb: 2,
              }}
            >
              <PaidRoundedIcon
                color="secondary"
                sx={{ fontSize: { sm: 25, md: 50, lg: 100 }, mt: 5, mb: 2 }}
              />
              <Typography
                variant="h4"
                gutterBottom="true"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    sm: 25,
                    md: 30,
                    lg: 35,
                  },
                }}
              >
                Affordable Prices
              </Typography>
              <Typography
                align="justify"
                variant="body1"
                color="#545454"
                sx={{
                  fontWeight: 400,
                  overflow: "hidden",
                }}
              >
                Home prices that we work with are more affordable than other
                places, with great location and better quality than others.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: 2,
                height: "40vh",
                boxShadow: 3,
                borderRadius: 5,
                borderColor: "#ebeded",
                pl: 7,
                pr: 7,
                pb: 2,
              }}
            >
              <AccessTimeFilledRoundedIcon
                color="secondary"
                sx={{ fontSize: { sm: 25, md: 50, lg: 100 }, mt: 5, mb: 2 }}
              />
              <Typography
                variant="h4"
                gutterBottom="true"
                sx={{ fontWeight: 600, fontSize: { sm: 25, md: 30, lg: 35 } }}
              >
                Quickly Process
              </Typography>
              <Typography
                align="justify"
                variant="body1"
                color="#545454"
                sx={{ fontWeight: 400, overflow: "hidden" }}
              >
                With a quick and easy process, you don't have to wait a long
                time to inhabit your dream home immediatey with your loved ones.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
