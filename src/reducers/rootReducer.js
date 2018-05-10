/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { LIST_PLAYLISTS, LIST_SONGS, PLAY, CHANGE_SONG } from '../actions/const';

const initialState = {
  playlist: [],
  playlistId: null,
  songs: [],
  playStatus: false,
  currentSong: ''
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
  console.log('reducer action', action)
  console.log('reducer state', state)

  switch (action.type) {
    case LIST_PLAYLISTS:
      return Object.assign({}, state, {
        playlist: action.playlist
      })
    case LIST_SONGS:
      return Object.assign({}, state, {
        playlistId: action.playlistId,
        songs: action.songs
      });
    case PLAY:
      return Object.assign({}, state, {
        playStatus: action.playStatus
      });
    case CHANGE_SONG:
      return Object.assign({}, state, {
        currentSong: action.newSong
      });
    default:
      return state;
  }
}

module.exports = reducer;
