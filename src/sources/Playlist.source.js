import listPlaylists from '../actions/listPlaylists';
import viewPlaylist from '../actions/viewPlaylist';

export default class PlaylistSource {

    static getPlaylists() {
        return dispatch => {
            return fetch('http://localhost:8888/getPlaylists')
                .then(response => response.json())
                .then(playlists => {
                    dispatch(listPlaylists(playlists))
                    return playlists;
                })
                .catch(err => console.log(err))
        }
    }

    static getSongs(playlistId) {
        console.log(playlistId)
        return dispatch => {
            return fetch(`http://localhost:8888/getSongs?playlist=${playlistId}`)
                .then(response => response.json())
                .then(songs => {
                    console.log(songs)
                    dispatch(viewPlaylist(songs))
                    return songs;
                })
                .catch(err => console.log(err))
        }
    }
}