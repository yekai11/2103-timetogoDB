import * as React from "react";
import {
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  MenuItem,
  Menu,
  Tooltip,
  Avatar,
} from "@mui/material";
import WeekendIcon from "@mui/icons-material/Weekend";
import avatar from "../../assets/avatar.jpg";

const pages = ["RESALE", "RENTAL"];
const settings = ["My Account", "Logout"];

// const isRoleSeller = window.localStorage.getItem("isRoleSeller");

export default function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () =>{
    window.localStorage.removeItem("isLoggedIn");
    window.location.href = '/';
  }

  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="auto">
        <Toolbar disableGutters>
          <WeekendIcon
            sx={{ fontSize: 30, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
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
            href="/"
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
                  mx: 3,
                  color: "white",
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: 15,
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar sx={{width:50, height:50}}src={avatar}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: 7 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem href='/userprofile'>
                <Typography textAlign="center">My Account</Typography>
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
