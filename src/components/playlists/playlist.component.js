import React, { Component } from 'react';
import ListComponent from '../list/list.component';


class PlaylistComponent extends React.Component {

    render() {
        /*return (
            <div>
                <button onClick={() => listPlaylists({test: 'test'})}>GetPlaylists</button>
                <ul>
                    {this.props.playlists.map(playlist =>
                        <div
                            key={playlist.id}
                            onClick={() => viewPlaylist(playlist.id)}
                        >{playlist.name}</div>
                    )}
                </ul>
                <ListComponent/>
            </div>
        )*/

        return (
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action active">
                    Cras justo odio
                </a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in <span className="badge badge-primary badge-pill">14</span></a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
            </div>
        )
    };
}

export default PlaylistComponent;