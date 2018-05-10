/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import listPlaylists from '../actions/listPlaylists.js';
import listSongs from '../actions/listSongs.js';
const actions = {
  listSongs,
  listPlaylists
};
module.exports = actions;
