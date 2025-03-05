import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import Favorites from './pages/Favorites.tsx';
import LandingPage from './pages/LandingPage.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LandingPage />}>
            <Route path="/callback" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
        </Route>
    )
);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
}
