import { VIEW_PLAYLIST } from './const';

function action(parameter) {
  return { type: VIEW_PLAYLIST, parameter };
}

module.exports = action;
