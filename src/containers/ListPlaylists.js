import React, { Component } from 'react';
import { connect } from 'react-redux'
import { viewPlaylist, listPlaylists } from '../actions'
import PlaylistComponent from '../components/playlists/playlist.component'
import SonglistComponent from '../components/songList/songlist.component'
import PlaylistSource from '../sources/Playlist.source';

const mapStateToProps = state => {
    console.log('mapStateToProps:playlist', state)
    return ({
        playlist: state.rootReducer.playlist,
        songs: state.rootReducer.songs,
    })
}

const mapDispatchToProps = dispatch => ({
    viewPlaylist: id => dispatch(PlaylistSource.getSongs(id)),
    listPlaylists: () => dispatch(PlaylistSource.getPlaylists()),

})

class ListPlaylistsContainer extends React.Component {
    render() {
        console.log('ListPlaylistsContainer', this.props)
        return (
            <div className="row">
                <div className="col-md-4">
                    <PlaylistComponent {...this.props}/>
                </div>
                <div className="col-md-8">
                    <SonglistComponent {...this.props}/>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPlaylistsContainer)
