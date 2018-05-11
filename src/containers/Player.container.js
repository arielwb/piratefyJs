import React, { Component } from 'react';
import { connect } from 'react-redux'
import { play, changeSong, next, prev } from '../actions'
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
    next: song => dispatch(next()),
    prev: song => dispatch(prev()),
})

class PlayerContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="row">
                <button className="btn btn-primary" onClick={() => this.props.play(!this.props.playStatus)}>
                    play
                </button>
                <button className="btn btn-primary" onClick={() => this.props.next()}>
                    next
                </button>
                <button className="btn btn-primary" onClick={() => this.props.prev()}>
                    prev
                </button>

                <div> playstatus: <span>{this.props.playStatus.toString()}</span><br /><br /></div>
                <div> currentSong:
                    <span>
                        {
                            this.props.currentSong.track ? this.props.currentSong.track.name : ''
                        }
                    </span>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerContainer)
