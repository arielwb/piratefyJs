import { connect } from 'react-redux'
import { viewPlaylist } from '../actions'
import ListComponent from '../components/list/list.component'

const getPlaylist = (id) => {
    let songs = [
        'A song',
        'Another song'
    ]
    return id ? songs[id - 1] : []
}

const mapStateToProps = state => {
    console.log('mapStateToProps:list', state)
    return ({
        data: getPlaylist(state.rootReducer.playlistId)
    })
}

const mapDispatchToProps = dispatch => ({
    // downloadSong: id => dispatch(downloadSong({ id }))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent)
