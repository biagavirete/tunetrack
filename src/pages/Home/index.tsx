import './Home.scss';
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect, useState } from 'react';
import {
    spotifyClientId,
    spotifyClientSecret,
} from '../../constants/spotifyConstants.ts';
//import { User } from '../../types/user.ts';

const spotify = new SpotifyWebApi();

const Home = () => {
    const [spotifyToken, setSpotifyToken] = useState('');
    //const [userInfo, setUserInfo] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // This function is used when the login with Spotify is used and then the url is generated with the information
    /*const getTokenFromUrl = () => {
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial: { [key: string]: string }, item) => {
                let parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);
                return initial;
            }, {});
    };}*/

    console.log('token', spotifyToken);

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
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });

        spotify.setAccessToken(spotifyToken);

        /*spotify.getMe().then((user) => {
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
        });*/
    }, []);

    return isLoading ? (
        <div className="content">
            <div className="loading">Loading...</div>
        </div>
    ) : (
        <div className="content">
            <h1>You are logged in: {spotifyToken}</h1>
            {/*<div className="user">
                    <h2>User: {userInfo?.display_name}</h2>
                    <img
                        src={userInfo?.images?.[0].url}
                        alt={userInfo?.display_name}
                    />
                </div>*/}
        </div>
    );
};

export default Home;
