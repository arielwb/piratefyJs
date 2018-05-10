import { LIST_PLAYLISTS } from './const';

function action(playlist) {
  console.log('action list playlists param', playlist)
  return { type: LIST_PLAYLISTS, playlist };
}

module.exports = action;
