import { LIST_SONGS } from './const';

function action(songs) {
  console.log('action list songs param', songs)
  return { type: LIST_SONGS, songs };
}

module.exports = action;
