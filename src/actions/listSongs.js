import { LIST_SONGS } from './const';

function action(currentPlaylist) {
  console.log('action list currentPlaylist param', currentPlaylist)
  return { type: LIST_SONGS, currentPlaylist };
}

module.exports = action;
