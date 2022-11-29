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
  MenuList,
  Tooltip,
  Avatar,
  Link,
} from "@mui/material";
import WeekendIcon from "@mui/icons-material/Weekend";
// import avatar from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar2.jpg";

// const isRoleSeller = window.localStorage.getItem("isRoleSeller");

const role = window.localStorage.getItem("role");

export default function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <WeekendIcon
            sx={{ fontSize: 30, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
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
            <Button
              size="large"
              href="/rental"
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
              RENTAL
            </Button>
            <Button
              size="large"
              href="/resale"
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
              RESALE
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar sx={{ width: 50, height: 50 }} src={avatar2} />
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
              <MenuItem>
                <Link color="black" underline="none" href="/profile">
                  <Typography textAlign="center">My Account</Typography>
                </Link>
              </MenuItem>

              {role === "Seller" && (
                <MenuList>
                  <MenuItem>
                    <Link color="black" underline="none" href="/manageListing">
                      <Typography textAlign="center" sx={{paddingBottom: 1}}>Manage Listing</Typography>
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link color="black" underline="none" href="/newList">
                      <Typography textAlign="center" sx={{paddingBottom: "1px"}}>Create a New Listing</Typography>
                    </Link>
                  </MenuItem>
                </MenuList>
              )}

              {role === "Buyer" && (
                <MenuItem>
                  <Link color="black" underline="none" href="/manageInterest">
                    <Typography textAlign="center">View Interest</Typography>
                  </Link>
                </MenuItem>
              )}

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
