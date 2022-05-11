import logo from "./utils/img/logo.png";

import { Route, Routes, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./utils/css/Global.css";
import "./utils/css/Global.css";
import LandingPage from "./components/LandingPage";
import PokeCard from "./components/PokeCard";

function App() {
  return (
    <>
      <div className="app-container">
        <NavigationBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/card" element={<PokeCard />} />

            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
