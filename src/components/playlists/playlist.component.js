import React, { Component } from 'react';
import ListComponent from '../list/list.component';


class PlaylistComponent extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.listPlaylists();
    }

    componentWillReceiveProps() {
        console.log(this.props)
        // this.props.listPlaylists();
    }

    render() {
        console.log(this.props)

        return (
            <div className="list-group list-group-flush">
                {
                    this.props.playlist.map((pl, key) => {
                        return (
                            <a key={key} className="list-group-item list-group-item-action" onClick={() => this.props.viewPlaylist(key)}>
                                {pl.name}
                            </a>
                        )
                    })
                }
            </div>
        )
    };
}

export default PlaylistComponent;