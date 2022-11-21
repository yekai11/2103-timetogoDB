import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Avatar,
  Divider,
  InputAdornment,
  Button,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Header from "../Components/Header/HeaderComponent";
import avatar from "../assets/avatar.jpg";
import ErrorIcon from "@mui/icons-material/Error";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfilePage() {
  /* username field */
  const [username, setUsername] = useState(window.localStorage.getItem("username"));

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  /* name field */
  const [name, setName] = useState(window.localStorage.getItem("name"));

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  /* email field */
  const [email, setEmail] = useState(window.localStorage.getItem("email"));

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  /* phone number field */
  const [phonenumber, setPhonenumber] = useState(window.localStorage.getItem("phonenumber"));

  const handlePhoneNumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

  /* Delete account dialog */
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDeleteAccount = () => {
    setOpenDialog(false);
    /* insert delete account function here */
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "auto",
          height: "100vh",
          //   border: 2,
          //   borderColor: "red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            // border: 2,
            // borderColor: "blue",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h4"
              align="left"
              sx={{ mt: 5, mb: 2, fontWeight: 500 }}
            >
              My Account
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "20%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: 1,
                borderRadius: 50,
                borderColor: "#ebeded",
                padding: 0.5,
                ml: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                }}
                src={avatar}
              />
            </Box>
            <Typography sx={{ fontSize: 25, fontWeight: 300 }}>
              {name}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "60%",
              height: "90%",
              mt: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  mb: 2,
                }}
              >
                <Typography
                  align="left "
                  sx={{ fontSize: 17, fontWeight: 500, mb: 1 }}
                >
                  Username
                </Typography>
                <TextField
                  defaultValue={username}
                  onChange={handleUsernameChange}
                  sx={{ width: "100%" }}
                />
              </Box>

              {/* <Divider fullWidth='true' variant="middle" /> */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  mb: 2,
                }}
              >
                <Typography
                  align="left "
                  sx={{ fontSize: 17, fontWeight: 500, mb: 1 }}
                >
                  Name
                </Typography>
                <TextField
                  defaultValue={name}
                  onChange={handleNameChange}
                  sx={{ width: "100%" }}
                />
              </Box>

              {/* <Divider fullWidth='true' variant="middle" /> */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  mb: 2,
                }}
              >
                <Typography
                  align="left "
                  sx={{ fontSize: 17, fontWeight: 500, mb: 1 }}
                >
                  Email
                </Typography>
                <TextField
                  defaultValue={email}
                  onChange={handleEmailChange}
                  sx={{ width: "100%" }}
                />
              </Box>

              <Box>
                <Divider />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  mb: 2,
                }}
              >
                <Typography
                  align="left "
                  sx={{ fontSize: 17, fontWeight: 500, mb: 1 }}
                >
                  Phone Number
                </Typography>
                <TextField
                  defaultValue={phonenumber}
                  onChange={handlePhoneNumberChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+65</InputAdornment>
                    ),
                  }}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "60%",
                  mt: 5,
                  mb: 5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "65%",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleDialogOpen}
                    sx={{ background: "#d32f2f" }}
                  >
                    Delete Account
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "50%",
                  }}
                >
                  <Button href="/home" variant="outlined">
                    Cancel
                  </Button>
                  <Button variant="contained" sx={{ ml: 2 }}>
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleDialogClose}
          aria-describedby="deleting account"
          fullWidth={"lg"}
        >
          <DialogTitle></DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ textAlign: "center" }}
              id="deleting-account-dialog-description"
            >
              <ErrorIcon color="secondary" sx={{ fontSize: 80 }} />
              <Typography
                sx={{
                  color: "secondary",
                  textAlign: "center",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                }}
              >
                Confirm delete account ?
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleDeleteAccount}>
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDialogClose}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}
