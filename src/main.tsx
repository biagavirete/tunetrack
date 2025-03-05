import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Search from './pages/Search.tsx';
import Favorites from './pages/Favorites.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
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
