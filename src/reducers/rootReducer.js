/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { LIST_PLAYLISTS, VIEW_PLAYLIST } from '../actions/const';

const initialState = {
  playlist: [],
  playlistId: null,
  songs: []
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  console.log('reducer action param', action)
  console.log('reducer state', state)

  switch (action.type) {
    case LIST_PLAYLISTS:
      console.log('action.playlist', action.playlist)
      let playlistsNextState = Object.assign({}, state, {
        playlist: action.playlist
      })
      return playlistsNextState;
    case VIEW_PLAYLIST:
      let nextState = Object.assign({}, state, {
        playlistId: action.playlistId,
        songs: action.songs
      });
      return nextState;
    default:
      return state;
  }
}

module.exports = reducer;
