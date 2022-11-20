import {
  Typography,
  Box,
  Link,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";
import ListingComponent from "./ListingComponent";
import a_hdb from "../../../assets/aesthetic_hdb.jpg";
import hdb_homepage from "../../../assets/hdb_homepage.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ListingSection() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              href="/"
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
            <ListingComponent
              img={a_hdb}
              indiateInterest={handleClickOpen}
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

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
