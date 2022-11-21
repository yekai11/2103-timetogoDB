import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
  Input,
  InputAdornment,
  IconButton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import hdb_login from "../assets/hdb_login.jpg";
import WeekendIcon from "@mui/icons-material/Weekend";

const loginAPI = "http://localhost:5000/login"; //const url for easy changing of api links

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    // console.log(JSON.stringify({ email: email, password: values.password }));
    fetch(loginAPI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //insert fields here
        email: email,
        password: values.password,
      }),
    }).then((result) => {
      /*
      This is what comes back, it will return a status code 200 if successfully logged in
      If login error, status code 401 will be returned (dont tell them if its email or password error for security reasons)
      */
      if (result.status === 200) {
        console.log(result);
        result.json().then((response) => {
          // when calling json from result needs to handle another promise response
          window.localStorage.setItem("accountID", response.accountID);
          window.localStorage.setItem("role", response.role);
          window.localStorage.setItem("name", response.name);
          window.localStorage.setItem("username", response.username);
          window.localStorage.setItem("email", response.email);
          window.localStorage.setItem("phonenumber", response.phoneNumber);

          setIsLoading(true);
          window.localStorage.setItem("isLoggedIn", true);
          setTimeout(() => {
            setIsLoading(false);
            window.location.href = "/home";
          }, 3000);
        });
      }
      if (result.status === 401) {
        window.localStorage.setItem("isLoggedIn", false);
      }
    });
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

      <Box
        sx={{
          width: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "45vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: 2,
              ml: 2,
            }}
          >
            <WeekendIcon
              sx={{
                color: "#303f9f",
                fontSize: 45,
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Link
              underline="none"
              sx={{ color: "#303f9f", fontSize: 30, fontWeight: 600 }}
            >
              Find-A-Home
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              height: "95%",
              width: "auto",
              pl: 20,
              pr: 20,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 300, pt: 15 }}>
              Welcome Back!
            </Typography>
            <Box sx={{ width: "90%", wordBreak: "break-word" }}>
              <Typography
                sx={{
                  fontWeight: 300,
                  mt: 2,
                  pb: 5,
                  fontSize: { sm: 10, md: 15, lg: 20 },
                }}
              >
                Quickly login to find a house and spend more money.
              </Typography>
            </Box>

            <TextField
              color="primary"
              label="Email"
              variant="standard"
              value={email}
              onChange={handleEmailChange}
              sx={{ width: "80%", mb: 5 }}
            />
            <Input
              id="password"
              placeholder="Password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handlePasswordChange("password")}
              sx={{ width: "80%" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
                mt: 3,
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <Link sx={{ color: "black" }} href="">
                Forget Password
              </Link>
            </Box>
            <Button
              variant="contained"
              sx={{ width: "80%", mt: 3, height: "5vh" }}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Login
            </Button>
            <Typography sx={{ mt: 5 }}>
              Don't have an account?
              <Link href="/register" sx={{ ml: 1 }}>
                Sign up for free
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "55vw",
            height: "100vh",
          }}
        >
          <img
            alt="banner"
            style={{
              height: "100%",
              width: "100%",
              opacity: 0.8,
              zIndex: -1,
              objectFit: "cover",
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
              margin: 5,
            }}
            src={hdb_login}
          />
        </Box>
      </Box>
    </div>
  );
}
