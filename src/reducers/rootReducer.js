/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { LIST_PLAYLISTS, VIEW_PLAYLIST } from '../actions/const';

const initialState = {
  playlists: [],
  playlistId: 0
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  console.log('reducer action param', action.parameter)
  console.log('reducer state', state)

  switch (action.type) {
    case LIST_PLAYLISTS:
      return {
        playlists: action.parameter.playlists
      }
    case VIEW_PLAYLIST:
      let nextState = Object.assign({
        playlists: action.parameter.playlists,
        playlistId: action.parameter.id
      }, state);
      return nextState;
    default:
      return state;
  }
}

module.exports = reducer;
