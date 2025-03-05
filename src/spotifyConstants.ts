export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const redirectUri = 'http://localhost:5173/callback';

export const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

export const spotifyClientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-top-read',
    'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${spotifyClientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
