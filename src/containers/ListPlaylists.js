import { connect } from 'react-redux'
import { viewPlaylist, listPlaylists } from '../actions'
import PlaylistComponent from '../components/playlists/playlist.component'

const mapStateToProps = state => {
    console.log('mapStateToProps:playlist', state)
    return ({
        playlists: state.rootReducer.playlists
    })
}

const mapDispatchToProps = dispatch => ({
    viewPlaylist: id => dispatch(viewPlaylist({ id })),
    listPlaylists: playlists => dispatch(listPlaylists({ playlists })),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent)
