import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import RentalPage from "./Components/RentalPage";
import ResalePage from "./Components/ResalePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import ProfilePage from "./Components/ProfilePage";
import ModifyPage from "./Components/ModifyPage";
import NewListingPage from "./Components/NewListingPage";
import ManageListingPage from "./Components/seller/ManageListingPage";
import { ViewInterestPage } from './Components/ViewInterestPage';
import { indigo, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const OpenSansFont = "'Open Sans', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
      contrastText: "#fafafa",
    },
    secondary: {
      main: red[700],
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: OpenSansFont,
    }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage/> }></Route>
            <Route path="home" element={<Homepage />}></Route>
            <Route path="rental" element={<RentalPage />}></Route>
            <Route path="resale" element={<ResalePage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route> 
            <Route path="profile" element={<ProfilePage />}></Route> 
            <Route path="modifyListing/:listing_id" element={<ModifyPage/>}></Route>
            <Route path="newlist" element={<NewListingPage/>}></Route>            
            <Route path="manageInterest" element={<ViewInterestPage />}></Route> 
            <Route path="manageListing" element={<ManageListingPage />}></Route> 
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
