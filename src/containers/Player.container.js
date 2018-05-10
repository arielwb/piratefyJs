import React, { Component } from 'react';
import { connect } from 'react-redux'
import { play, changeSong } from '../actions'
import { } from '../components';


const mapStateToProps = state => {
    console.log('mapStateToProps:player', state)
    return ({
        playStatus: state.rootReducer.playStatus,
        currentSong: state.rootReducer.currentSong,
    })
}


const mapDispatchToProps = dispatch => ({
    play: song => dispatch(play(song)),
    next: song => dispatch(changeSong(song)),
    prev: song => dispatch(changeSong(song)),
})

class PlayerContainer extends React.Component {
    render() {
        return (
            <div className="row">
                <button className="btn btn-primary" onClick={() => this.props.play(!this.props.playStatus)}>
                    play
                </button>  
                <button className="btn btn-primary" onClick={() => this.props.next(33)}>
                    next
                </button>  

                <div> playstatus: <span>{this.props.playStatus}</span></div>
                <div> currentSong: <span>{this.props.currentSong}</span></div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerContainer)
