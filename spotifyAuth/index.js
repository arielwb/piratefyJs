
const spotifyAuth = require('./SpotifyAuth');
const express = require('express');
const cookieParser = require('cookie-parser');

const expressApp = express();
console.log(spotifyAuth)
expressApp.use(express.static(__dirname + '/public'))
  .use(cookieParser());

expressApp.get('/login', spotifyAuth.getLogin);
expressApp.get('/callback', spotifyAuth.getCallback);
expressApp.get('/refresh_token', spotifyAuth.getRefreshToken);
expressApp.get('/getPlaylists', spotifyAuth.getPlaylists);
expressApp.get('/getSongs', spotifyAuth.getSongsFromPlaylist);
expressApp.get('/success', spotifyAuth.getSuccess);

console.log('Listening on 8888');
expressApp.listen(8888);