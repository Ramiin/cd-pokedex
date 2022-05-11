import logo from "./utils/img/logo.png";

import { Route, Routes, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./utils/css/Global.css";
import "./utils/css/Global.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <div className="app-container">
        <NavigationBar />
        <Routes>
            <Route exact path="/" element={<LandingPage />}>
                {/* <Route path="home" element={<Home />} > */}
                
            </Route>
          </Routes>
        <div className="hero">
          <h1>Holaaaa</h1>
        </div>
      </div>
    </>
  );
}

export default App;
