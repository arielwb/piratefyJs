/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import listPlaylists from '../actions/listPlaylists.js';
import viewPlaylist from '../actions/viewPlaylist.js';
const actions = {
  viewPlaylist,
  listPlaylists
};
module.exports = actions;
