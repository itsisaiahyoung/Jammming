const api_key = '6590fe2868394d06bfc5b54591fbf7ec';
const HostUrl = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${api_key}&response_type=token&scope=playlist-modify-public&redirect_uri=${HostUrl}`;
            window.location = accessUrl;
        }
    },
    
    
    search(term) {
        const accessToken = Spotify.getAccessToken();
    
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}&limit=4`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {    
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name, // Use 'artists' instead of 'artist'
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    savePlaylist(name, trackUris) {
        if(!name || !trackUris.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;
        
        return fetch('https://api.spotify.com/v1/me', {headers: headers})
        .then(response => response.json())
        .then(jsonResponse => {
            userId = jsonResponse.id;
            
        })

    }
    
};

export default Spotify;