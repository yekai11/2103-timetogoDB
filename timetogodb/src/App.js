import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/HeaderComponent";
import Homepage from "./Components/Homepage/Homepage";
import RentalPage from "./Components/RentalPage";
import ResalePage from "./Components/ResalePage";
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="rental" element={<RentalPage />}></Route>
            <Route path="resale" element={<ResalePage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
