// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const redirectUri = 'http://localhost:3000/';
// let accessToken;

// const Spotify = {
//   getAccessToken() {
//     if (accessToken) {
//       return accessToken;
//     }

//     const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//     const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
//     if (accessTokenMatch && expiresInMatch) {
//       accessToken = accessTokenMatch[1];
//       const expiresIn = Number(expiresInMatch[1]);
//       window.setTimeout(() => accessToken = '', expiresIn * 1000);
//       window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
//       return accessToken;
//     } else {
//       const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
//       window.location = accessUrl;
//     }
//   },

//   search(term) {
//     const accessToken = Spotify.getAccessToken();
//     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     }).then(response => {
//       return response.json();
//     }).then(jsonResponse => {
//       if (!jsonResponse.tracks) {
//         return [];
//       }
//       return jsonResponse.tracks.items.map(track => ({
//         id: track.id,
//         name: track.name,
//         artist: track.artists[0].name,
//         album: track.album.name,
//         uri: track.uri
//       }));
//     });
//   },
// }

const jsonResponse = [
  {
    artist: 'Rutimental',
    album: '2023 Essential Mix',
    name: 'Rutimental 2023 Essential Mix',
    id: '1',
    uri: 'www.spotify.com/rutimental'
  },
  {
    artist: 'Chase and Status',
    album: '2021 Essential Mix',
    name: 'Chase and Status 2021 Essential Mix',
    id: '2',
    uri: 'www.spotify.com/chaseandstatus'
  },
  {
    artist: 'Subfocus',
    album: '2022 Essential Mix',
    name: 'Subfocus 2022 Essential Mix',
    id: '3',
    uri: 'www.spotify.com/subfocus'
  }
]

const Spotify = {
  search(term) {
      return jsonResponse.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artist,
          album: track.album,
          uri: track.uri
      }))
  }
}

export default Spotify;