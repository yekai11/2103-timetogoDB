import { Typography, Box, Button, Snackbar, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function ListingComponent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Box
        sx={{
          width: "70%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <img
          src={props.img}
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
            <LocationOnIcon
              color="primary"
              fontSize="large"
              sx={{ paddingTop: 3 }}
            />
            <Typography
              variant="h4"
              align="left "
              sx={{ mt: 3, fontWeight: 500, color: "#242424" }}
            >
              {props.location}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="justify"
              sx={{ fontWeight: 400 }}
            >
              {props.desc}
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
              ${props.price}
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
          <Button
            onclick={handleClick}
            startIcon={<FavoriteIcon sx={{ color: "#d32f2f" }} />}
            variant="contained"
          >
            Indicate Interest
          </Button>
        </Box>
      </Box>
    </div>
  );
}
