import React from "react";
import {
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
} from "@mui/material";
import hdb_login from "../assets/hdb_login.jpg";
import WeekendIcon from "@mui/icons-material/Weekend";

export default function LoginPage() {
  return (
    <div>
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
              href="/"
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
              sx={{ width: "80%", mb: 5 }}
            />
            <TextField
              color="primary"
              label="Password"
              variant="standard"
              sx={{ width: "80%" }}
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
