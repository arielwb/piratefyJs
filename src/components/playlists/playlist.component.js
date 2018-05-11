import React, { Component } from 'react';


class PlaylistComponent extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.listPlaylists();
    }

    render() {
        return (
            <div className="list-group list-group-flush">
                {
                    this.props.playlists.map((pl, key) => {
                        return (
                            <a key={key} className="list-group-item list-group-item-action" onClick={() => this.props.listSongs(pl.id)}>
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