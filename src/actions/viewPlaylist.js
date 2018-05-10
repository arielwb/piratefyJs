import { VIEW_PLAYLIST } from './const';

function action(songs) {
  return { type: VIEW_PLAYLIST, songs };
}

module.exports = action;
