import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import DifferentlyAbledPage from './pages/services/DifferentlyAbledPage';
import EldersPage from './pages/services/EldersPage';
import OrphansPage from './pages/services/OrphansPage';
import VolunteersPage from './pages/services/VolunteersPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/differently-abled" element={<DifferentlyAbledPage />} />
        <Route path="/services/elders" element={<EldersPage />} />
        <Route path="/services/orphans" element={<OrphansPage />} />
        <Route path="/services/volunteers" element={<VolunteersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;