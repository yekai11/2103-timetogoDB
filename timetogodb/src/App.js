import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/HeaderComponent";
import Homepage from "./Components/Homepage/Homepage";
import RentalPage from "./Components/RentalPage";
import ResalePage from "./Components/ResalePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
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

let isLoggedIn = true;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} />}></Route>
            <Route path="rental" element={<RentalPage />}></Route>
            <Route path="resale" element={<ResalePage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route> 
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
