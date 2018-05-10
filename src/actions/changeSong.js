import { CHANGE_SONG } from './const';

function action(songId) {
  console.log('action CHANGE_SONG param', songId)
  return { type: CHANGE_SONG, songId };
}

module.exports = action;
