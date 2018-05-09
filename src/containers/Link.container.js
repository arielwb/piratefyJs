import { connect } from 'react-redux'
import { viewPlaylist } from '../actions'
import Link from '../components/link/link.component'

const mapStateToProps = (state, ownProps) => ({
  playlistId: ownProps.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(viewPlaylist({playlistId: ownProps.id}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
