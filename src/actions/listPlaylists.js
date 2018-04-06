import { LIST_PLAYLISTS } from './const';

function action(parameter) {
  return { type: LIST_PLAYLISTS, parameter };
}

module.exports = action;
