import { play, next, prev, changeSong, download, downloadStackAdd, downloadBegin } from '../actions';
import YoutubeSearch from 'youtube-api-v3-search';

export default class PlayerSource {

    static play(song) {
        return dispatch => dispatch(play(song));
    }

    static next() {
        return dispatch => dispatch(next());
    }

    static prev() {
        return dispatch => dispatch(prev());
    }

    static changeSong(song) {
        return dispatch => dispatch(changeSong(song));
    }

    static downloadStackAdd(track) {
        return dispatch => {
            let query = `${track.name} ${track.album.name} ${track.artists[0].name}`
            YoutubeSearch('AIzaSyCI4yhoPXO2fDprwIO6vp_HCcZdvXy2W-c', {
                q: query,
                part: 'snippet',
                type: 'video'
            }).then(response => {
                dispatch(downloadStackAdd({
                    id: track.id,
                    youtubeId: response.items[0].id.videoId
                }))
            })
        }
    }

    static download(track) {
        return dispatch => {
            //TODO: send track for electron download
            dispatch(downloadBegin(track));
            let newtrack = Object.assign({}, track, {
                localPath: 'C:/testPath'
            })
            setTimeout(() => dispatch(download(newtrack)), 1000);
        };
    }

}