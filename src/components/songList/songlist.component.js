import React, { Component } from 'react';


class SonglistComponent extends React.Component {

    render() {
        
        return (
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action active">
                    Cras justo odio
                </a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </a>
            </div>
        )
    };
}

export default SonglistComponent;