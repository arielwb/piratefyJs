import React, { Component } from 'react';
import { connect } from 'react-redux'
import { listSongs, listPlaylists, changeSong } from '../actions'
import { PlaylistComponent, SonglistComponent } from '../components';
import PlaylistSource from '../sources/Playlist.source';

const mapStateToProps = state => {
    console.log('mapStateToProps:playlist', state)
    return ({
        playlists: state.rootReducer.playlists,
        currentPlaylist: state.rootReducer.currentPlaylist,
    })
}

const mapDispatchToProps = dispatch => ({
    listSongs: id => dispatch(PlaylistSource.getSongs(id)),
    listPlaylists: () => dispatch(PlaylistSource.getPlaylists()),
    changeSong: song => dispatch(changeSong(song)),
})

class ListPlaylistsContainer extends React.Component {
    render() {
        return (
            <div className="content-wrapper ">
                <div className="row content-wrapper no-gutters bg-light" >
                    <div className="col-md-4">
                        <PlaylistComponent {...this.props} />
                    </div>
                    <div className="col-md-8">
                        <SonglistComponent {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPlaylistsContainer)
