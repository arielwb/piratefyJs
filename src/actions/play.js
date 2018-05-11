import { PLAY } from './const';

function action(playStatus) {
  console.log('action play param', playStatus)
  return { type: PLAY, playStatus };
}

module.exports = action;
