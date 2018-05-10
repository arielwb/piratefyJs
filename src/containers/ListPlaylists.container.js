import React, { Component } from 'react';
import { connect } from 'react-redux'
import { listSongs, listPlaylists } from '../actions'
import { PlaylistComponent, SonglistComponent } from '../components';
import PlaylistSource from '../sources/Playlist.source';

const mapStateToProps = state => {
    console.log('mapStateToProps:playlist', state)
    return ({
        playlist: state.rootReducer.playlist,
        songs: state.rootReducer.songs,
    })
}

const mapDispatchToProps = dispatch => ({
    listSongs: id => dispatch(PlaylistSource.getSongs(id)),
    listPlaylists: () => dispatch(PlaylistSource.getPlaylists()),

})

class ListPlaylistsContainer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <PlaylistComponent {...this.props} />
                </div>
                <div className="col-md-8">
                    <SonglistComponent {...this.props} />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPlaylistsContainer)
