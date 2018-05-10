import React, { Component } from 'react';


class SonglistComponent extends React.Component {
    

    render() {
        let songs = this.props.songs.songs || [];
        return (
            <div className="list-group list-group-flush">
                {
                    songs.map((song, key) => {
                        return (
                            <a key={key} className="list-group-item list-group-item-action">
                                {song}
                            </a>
                        )
                    })
                }
            </div>
        )
    };
}

export default SonglistComponent;