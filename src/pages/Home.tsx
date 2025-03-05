import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.scss';
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect, useState } from 'react';
import {
    loginUrl,
    redirectUri,
    spotifyClientId,
    spotifyClientSecret,
} from '../spotifyConstants';

const spotify = new SpotifyWebApi();

const Home = () => {
    const [spotifyToken, setSpotifyToken] = useState('');

    const getTokenFromUrl = () => {
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial: { [key: string]: string }, item) => {
                let parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);
                return initial;
            }, {});
    };

    useEffect(() => {
        const urlString = window.location.search;
        const urlSearch = new URLSearchParams(urlString);
        const code = urlSearch.get('code');
        const authParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:
                    'Basic ' +
                    Buffer.from(
                        spotifyClientId + ':' + spotifyClientSecret
                    ).toString('base64'),
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                redirect_uri: redirectUri,
                code: code || '',
            }),
        };

        fetch('https://accounts.spotify.com/api/token', authParams)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                setSpotifyToken(data.access_token);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        const token = getTokenFromUrl().access_token;
        console.log('token', token);
        if (token) {
            setSpotifyToken(token);
            spotify.setAccessToken(token);
            spotify.getMe().then((user) => {
                console.log('user:', user);
            });
        }
    }, []);

    console.log('spotifyToken', spotifyToken);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo-react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <a href={loginUrl}>Login with Spotify</a>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export default Home;
