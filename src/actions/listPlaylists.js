import { LIST_PLAYLISTS } from './const';

function action(playlists) {
  console.log('action list playlists param', playlists)
  return { type: LIST_PLAYLISTS, playlists };
}

module.exports = action;
