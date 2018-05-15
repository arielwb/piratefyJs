import React, { Component } from 'react';

class PlayerComponent extends React.Component {
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.downloadStack.length > 0 && Object.keys(nextProps.currentDownload).length === 0) {
            console.log(nextProps.downloadStack[0])
            this.props.download(nextProps.downloadStack[0])
        }
    }

    render() {
        console.log('player props ', this.props)
        let nowPlaying = null;
        if (Object.keys(this.props.currentSong).length > 0)
            nowPlaying = (
                <div className="media ml-2 mt-2 mb-2" >
                    <img className="mr-2 img-thumbnail" style={{ width: '70px' }} src={this.props.currentSong.track.album.images[0].url} />
                    <div className="media-body">
                        <h5 className="m-0 playlist-header-name">{this.props.currentSong.track.name}</h5>
                        <p className="m-0">
                            <small>{this.props.currentSong.track.artists[0].name}</small>
                            <br />
                            <small>{this.props.currentSong.track.album.name}</small>
                        </p>
                    </div>
                </div>
            )
        return (
            <div id="player-bar" >
                <div className="row no-gutters border-top bg-light" style={{ boxShadow: '0 -.125rem .25rem rgba(0,0,0,.075)' }}>
                    <div className="col col-md-4" style={{ minHeight: '88px' }}>
                        {nowPlaying}
                    </div>
                    <div className="col col-md-8 border-left">
                        <div className="btn-group flex-row d-flex justify-content-center align-items-center m-4" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-primary" onClick={() => this.props.prev()}>
                                <i className="fa fa-step-backward"></i>
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={() => this.props.play(!this.props.playStatus)}>
                                <i className={this.props.playStatus ? 'fa fa-pause' : 'fa fa-play'}></i>
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={() => this.props.next()}>
                                <i className="fa fa-step-forward"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div >
        );
    }
}

export default PlayerComponent;