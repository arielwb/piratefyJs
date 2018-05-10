import { LIST_SONGS } from './const';

function action(songs) {
  return { type: LIST_SONGS, songs };
}

module.exports = action;
