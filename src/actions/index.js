/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import listPlaylists from '../actions/listPlaylists';
import listSongs from '../actions/listSongs';
import changeSong from '../actions/changeSong';
import play from '../actions/play';

const actions = {
  listSongs,
  listPlaylists,
  changeSong,
  play
};
module.exports = actions;
