import * as React from "react";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import WeekendIcon from "@mui/icons-material/Weekend";
import "./Header.css";

const pages = ["RESALE", "RENTAL"];

export default function Header() {
  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="auto">
        <Toolbar disableGutters>
          <WeekendIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Find-A-Home
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Find-A-Home
          </Typography>
          <Box
            className="headerItem"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                size="large"
                href="/"
                sx={{
                  my: 3,
                  mx: 4,
                  color: "white",
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize:15,
                  "&:hover": {
                    backgroundColor: "#001970",

                  },
                }}
              >
                {page}
              </Button>
            ))}
            <Link>Rental</Link>
            <Link>Resale</Link>

          </Box>
          <Button size="large" variant="contained" color="secondary">
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
