import { CHANGE_SONG } from './const';

function action(newSong) {
  console.log('action CHANGE_SONG param', newSong)
  return { type: CHANGE_SONG, newSong };
}

module.exports = action;
