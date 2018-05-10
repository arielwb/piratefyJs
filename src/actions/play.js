import { PLAY } from './const';

function action(status) {
  console.log('action play param', status)
  return { type: PLAY, status };
}

module.exports = action;
