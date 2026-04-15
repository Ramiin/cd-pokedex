import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./utils/css/Global.css";
import "./utils/css/Global.css";
import LandingPage from "./components/LandingPage";
import PokeCard from "./components/PokeCard";
import Home from "./components/Home";
import Details from "./components/Details";
import FloatButton from "./components/FloatButton";
import About from "./components/About";

function App() {
  return (
    <>
        <FloatButton />
      <div className="app-container">
        <NavigationBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/card" element={<PokeCard />} />
            <Route path="/details/:idPokemon" element={<Details />} />
            <Route path="/about" element={<About />} />

            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
