import { LIST_PLAYLISTS } from './const';

function action(parameter) {
  console.log('action list playlists param', parameter)
  return { type: LIST_PLAYLISTS, parameter };
}

module.exports = action;
