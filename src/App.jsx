import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import NavigationBar from './components/NavigationBar';
import FloatButton from './components/FloatButton';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <>
      <FloatButton />
      <div className="app-container">
        <NavigationBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/details/:idPokemon" element={<DetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
      <Analytics />
    </>
  );
}
