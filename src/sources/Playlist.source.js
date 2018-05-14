import listPlaylists from '../actions/listPlaylists';
import listSongs from '../actions/listSongs';

export default class PlaylistSource {

    static getPlaylists() {
        return dispatch => {
            return fetch('http://localhost:8888/getPlaylists')
                .then(response => response.json())
                .then(playlists => {
                    dispatch(listPlaylists(playlists.body.items))
                    return playlists;
                })
                .catch(err => console.log(err))
        }
    }

    static getSongs(playlistId) {
        return dispatch => {
            return fetch(`http://localhost:8888/getSongs?playlist=${playlistId}`)
                .then(response => response.json())
                .then(songs => {
                    dispatch(listSongs(songs.body))
                    return songs;
                })
                .catch(err => console.log(err))
        }
    }
}