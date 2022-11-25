import {
  Typography,
  Box,
  //Link,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";
import a_hdb from "../../assets/aesthetic_hdb.jpg";
import hdb_homepage from "../../assets/hdb_homepage.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
    <div><br></br>
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
        <Box // outer box
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
              View Resale Homes
            </Typography>
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
            <Box boxShadow={2} borderRadius={4}
              sx={{
                width: "30%",
                height: "85%",
                backgroundColor: "white",
              }}
            >
              <img
                src={a_hdb}
                alt="popular residences"
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, 
                         width: "100%", height: "55%", objectFit: "cover" }}
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
                    sx={{ mt: 3, fontSize: 28, paddingBottom: 1, fontWeight: 500, color: "#242424" }}
                  >
                    Area 
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Block, Street 
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Number of Rooms
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
                    Price Here 
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
                  onclick={handleClickOpen}
                  startIcon={<FavoriteIcon sx={{ color: "#d32f2f" }} />}
                  variant="contained"
                >
                  Indicate Interest
                </Button>
              </Box>
            </Box>

            {/*Second card */}
            <Box boxShadow={2} borderRadius={4}
              sx={{
                width: "30%",
                height: "85%",
                backgroundColor: "white",
              }}
            >
              <img
                src={hdb_homepage}
                alt="popular residences"
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, 
                         width: "100%", height: "55%", objectFit: "cover" }}
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
                    sx={{ mt: 3, fontSize: 28, fontWeight: 500, color: "#242424" }}
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
                    Block, Street 
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Number of Rooms
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
                <Button
                  onclick={handleClickOpen}
                  startIcon={<FavoriteIcon sx={{ color: "#d32f2f" }} />}
                  variant="contained"
                >
                  Indicate Interest
                </Button>
              </Box>
            </Box>

            {/*Third card */}
            <Box boxShadow={2} borderRadius={4}
              sx={{
                width: "30%",
                height: "85%",
                backgroundColor: "white",
              }}
            >
              <img
                src={a_hdb}
                alt="popular residences"
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, 
                         width: "100%", height: "55%", objectFit: "cover" }}
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
                sx={{ mt: 3, fontSize: 28, fontWeight: 500, paddingBottom: 1, color: "#242424" }}
              > Donovan's House
              </Typography>

            </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    Block, Street 
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    align="justify"
                    sx={{ fontWeight: 400 }}
                  >
                    1000 Rooms
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
                    $9999999
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
                  onclick={handleClickOpen}
                  startIcon={<FavoriteIcon sx={{ color: "#d32f2f" }} />}
                  variant="contained"
                >  Indicate Interest
                </Button>
              </Box>
            </Box>
          
          </Box>
          
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
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </div>

    
  );
}
