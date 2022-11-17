import * as React from "react";
import {
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
  FilledInput,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import register_hdb from "../assets/register_hdb.png";
import WeekendIcon from "@mui/icons-material/Weekend";

const roles = [
  { value: "Buyer", label: "Buyer" },
  { value: "Seller", label: "Seller" },
];

export default function RegisterPage() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
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

  const [role, setRole] = React.useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

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
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              margin: 5,
            }}
            src={register_hdb}
          />
        </Box>

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
              justifyContent: "flex-end",
              flexDirection: "row",
              mt: 2,
              mr: 2,
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
              // border: 2,
              // borderColor: "red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "30vw",
                height: "100%",
                mt: 2,
                // border: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "centery",
                  justifyContent: "flex-start",
                  height: "10%",
                  width: "85%",
                  mt: 2,
                  // border: 2,
                  // borderColor: "yellow",
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 300 }}>
                  Sign Up
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "75%",
                  pt: 1,
                  pb: 2,
                  // border: 2,
                  // borderColor: "green",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <TextField
                    name="Name"
                    color="primary"
                    label="Name"
                    variant="filled"
                    sx={{ width: "25vw" }}
                  />
                </Box>
                <Box>
                  <TextField
                    id="Email"
                    color="primary"
                    label="Email"
                    variant="filled"
                    sx={{ width: "25vw" }}
                  />
                </Box>
                <Box>
                  <FilledInput
                    id="password"
                    placeholder="Password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ width: "25vw" }}
                  />
                </Box>
                <Box>
                  <TextField
                    label="Phone Number"
                    id="phone_number"
                    sx={{ m: 1, width: "25vw" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+65</InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </Box>
                <Box>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Role"
                    variant="filled"
                    value={role}
                    onChange={handleRoleChange}
                    helperText="Buyer: indicate interest;   Seller: post listings"
                    sx={{ width: "25vw", textAlign: "left" }}
                  >
                    {roles.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "left", width: "25vw" }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the"
                    sx={{ ml: 0.5, mr: 1 }}
                  />
                  <Link
                    sx={{ color: "primary", fontSize: 17, mt: 1.1 }}
                    href=""
                  >
                    Terms and Privacy Policy
                  </Link>
                </Box>
                <Button
                  variant="contained"
                  href="/"
                  sx={{
                    width: "25vw",
                    height: "8vh",
                    fontSize: 20,
                    fontWeight: 500,
                    pt: 2,
                  }}
                >
                  Get Started
                </Button>
              </Box>
              <Box>
                <Typography sx={{ mt: 1 }}>
                  Already have an account?
                  <Link href="/login" sx={{ ml: 1 }}>
                    Sign in
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
