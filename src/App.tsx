import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from 'react-router-dom';
import Favorites from './pages/Favorites/index.tsx';
import Search from './pages/Search/index.tsx';
import Home from './pages/Home/index.tsx';
import LandingPage from './pages/LandingPage/index.tsx';
import './global.scss';
import Sidebar from './components/Sidebar/index.tsx';

const SidebarLayout = () => (
    <>
        <Sidebar />
        <Outlet />
    </>
);

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<SidebarLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
        </Routes>
    </Router>
);

export default App;
