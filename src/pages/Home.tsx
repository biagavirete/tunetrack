import Logo from '../assets/Logo.svg';
import Hero from '../assets/Hero.svg';
import '../styles/Home.scss';
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect, useState } from 'react';
import {
    loginUrl,
    spotifyClientId,
    spotifyClientSecret,
} from '../constants/spotifyConstants.ts';
import { User } from '../types/user.ts';

const spotify = new SpotifyWebApi();

const Home = () => {
    const [spotifyToken, setSpotifyToken] = useState('');
    const [userInfo, setUserInfo] = useState<User | null>(null);

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

    const logout = () => {
        setSpotifyToken('');
    };

    useEffect(() => {
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
                grant_type: 'client_credentials',
            }),
        };

        fetch('https://accounts.spotify.com/api/token', authParams)
            .then((response) => response.json())
            .then((data) => {
                setSpotifyToken(data.access_token);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        const token = getTokenFromUrl().access_token;
        if (token) {
            setSpotifyToken(token);
            spotify.setAccessToken(token);
            spotify.getMe().then((user) => {
                const mappedUser: User = {
                    id: user.id,
                    display_name: user.display_name,
                    followers: {
                        href: user.followers?.href || null,
                        total: user.followers?.total || 0,
                    },
                    images: user.images,
                };
                setUserInfo(mappedUser);
            });
        }
    }, []);

    if (spotifyToken) {
        return (
            <div>
                <h1>You are logged in:</h1>
                <div className="user">
                    <h2>User: {userInfo?.display_name}</h2>
                    <img
                        src={userInfo?.images?.[0].url}
                        alt={userInfo?.display_name}
                    />
                    <a
                        //href="https://accounts.spotify.com"
                        onClick={() => logout()}
                    >
                        Logout?
                    </a>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="main">
                <div className="title">
                    <img src={Logo} className="logo" alt="TuneTrack" />
                    <h1>TuneTrack</h1>
                    <p>
                        Discover, track, and favorite your top artists while
                        staying in sync with your Spotify playlist - all in one
                        place.
                    </p>
                    <a href={loginUrl}>Login with Spotify</a>
                </div>
                <div className="hero">
                    <img src={Hero} alt="Hero" />
                </div>
            </div>
        </>
    );
};

export default Home;
