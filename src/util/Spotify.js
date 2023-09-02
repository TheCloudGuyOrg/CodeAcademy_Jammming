const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });
const SESSION_SECRET = process.env.SESSION_SECRET;

console.log(SESSION_SECRET)

// const jsonResponse = [
//     {
//       artist: 'Rutimental',
//       album: '2023 Essential Mix',
//       name: 'Rutimental 2023 Essential Mix',
//       id: '1',
//       uri: 'www.spotify.com/rutimental'
//     },
//     {
//       artist: 'Chase and Status',
//       album: '2021 Essential Mix',
//       name: 'Chase and Status 2021 Essential Mix',
//       id: '2',
//       uri: 'www.spotify.com/chaseandstatus'
//     },
//     {
//       artist: 'Subfocus',
//       album: '2022 Essential Mix',
//       name: 'Subfocus 2022 Essential Mix',
//       id: '3',
//       uri: 'www.spotify.com/subfocus'
//     }
//   ]

// const Spotify = {
//     search(term) {
//         return jsonResponse.map(track => ({
//             id: track.id,
//             name: track.name,
//             artist: track.artist,
//             album: track.album,
//             uri: track.uri
//         }))
//     }
//   }

//   export default Spotify;