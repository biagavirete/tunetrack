import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Home from './pages/Home';

const App = () => (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/">TuneTrack</Link>
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
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </Router>
);

export default App;
