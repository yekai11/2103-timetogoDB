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
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import Header from "../Components/Header/HeaderComponent";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import ErrorIcon from "@mui/icons-material/Error";

//const url for easy changing of api links
const profileDeleteAPI = "http://localhost:5000/profile/delete";
const profileUpdateAPI = "http://localhost:5000/profile/update";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false); // for loading screen

  const account_name = window.localStorage.getItem("name");

  /* account id */
  const [accountID, setAccountID] = useState(
    window.localStorage.getItem("accountID")
  );

  /* username field */
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );

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
  const [phonenumber, setPhonenumber] = useState(
    window.localStorage.getItem("phonenumber")
  );

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

    // console.log(window.localStorage.getItem("accountID")); // for debugging

    fetch(profileDeleteAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        //insert fields here
        accountID: accountID, // this accountID is taken from login session stored state
      }),
    }).then((result) => {
      /*
      This is what comes back, it will return a status code 200 if account successfully deleted
      If delete error, status code 404 will be returned
      */
      console.log("In result");
      console.log(result.status); // this is how u access the status code
    });
  };

  const handleUpdateAccount = () => {
    fetch(profileUpdateAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        //insert fields here
        accountID: accountID,
        name: name,
        username: username,
        email: email,
        phoneNumber: phonenumber,
      }),
    }).then((result) => {
      /*
      This is what comes back, it will return a status code 200 if account successfully updated
      If update error, status code 400 will be returned
      */
      if (result.status === 200) {
        console.log(result);
        result.json().then((response) => {
          // when calling json from result needs to handle another promise response

          setIsLoading(true); // add loading screen
          setOpenSnackbar(true);

          setTimeout(() => {
            setIsLoading(false); // add loading screen
            setOpenSnackbar(false);
            window.localStorage.setItem("accountID", response.accountID);
            window.localStorage.setItem("name", response.name);
            window.localStorage.setItem("username", response.username);
            window.localStorage.setItem("email", response.email);
            window.localStorage.setItem("phonenumber", response.phoneNumber);
            window.location.reload(); // force refresh
          }, 2000);

          /* Update local storage after account details updated */
        });
      }
      if (result.status === 400) {
        //idk do something
      }
    });
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
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
                src={avatar2}
              />
            </Box>
            <Typography sx={{ fontSize: 25, fontWeight: 300 }}>
              {account_name}
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
                  <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={handleUpdateAccount}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Sucessfully updated snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully updated account!
          </Alert>
        </Snackbar>

        {/*Delete account dialog */}
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
