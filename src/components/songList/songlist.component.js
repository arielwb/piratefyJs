import React, { Component } from 'react';


class SonglistComponent extends React.Component {

    constructor(props) {
        super(props);
        this.songs = [];

        this.loadSongs(this.props);
        console.log('SonglistComponent', this.props)
    }

    loadSongs(payload) {
        if (payload.currentPlaylist.tracks && payload.currentPlaylist.tracks.items) {
            this.songs = payload.currentPlaylist.tracks.items;
        }
    }

    componentWillReceiveProps(nextProps) {
        this.loadSongs(nextProps)
    }

    render() {
        console.log('SonglistComponent', this.props)
        return (
            <div className="list-container">
                <div className="list-group list-group-flush">
                    {
                        this.songs.map((song, key) => {
                            return (
                                <a key={key} className="list-group-item list-group-item-action" onClick={() => this.props.changeSong(song)}>
                                    {song.track.name}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    };
}

export default SonglistComponent;