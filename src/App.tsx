import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import LandingPage from './pages/LandingPage';

const App = () => (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/">TuneTrack</Link>
                </li>
                <li>
                    <Link to="/callback">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/callback" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </Router>
);

export default App;
