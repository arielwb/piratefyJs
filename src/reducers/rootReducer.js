/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { LIST_PLAYLISTS, VIEW_PLAYLIST } from '../actions/const';

const initialState = {
  playlists: ['initial'],
  playlist: {}
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  console.log('reducer action param', action)

  switch (action.type) {
    case LIST_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload
      };
    case VIEW_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      };
    default:
      return state;
  }
}

module.exports = reducer;
