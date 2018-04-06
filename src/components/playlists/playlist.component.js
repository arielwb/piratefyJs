

import React from 'react';
// import { SpotifyService } from '../../services/spotify.service';
import  ListComponent  from '../list/list.component';

class PlaylistComponent extends React.Component {

    componentDidMount() {
        console.log('componentDidMount'); 
       
    }

    getPlaylists() {
        // SpotifyService.getPlaylists()
        //     .then((playlists) => {
        //         console.log(playlists);
        //         this.setState({ data: playlists.body.items });
        //     });
    }

    render() {
        console.log('props', this.props)
        let data = this.props.playlists || [];
        // let names = data.map(playlist => playlist.name);
        let names = data;
        let hasPlaylist = data.length > 0;
        return (
            <div>
                <button  onClick={this.props.onGetPlaylists}>GetPlaylists</button>
                <h5 hidden={!hasPlaylist}>User playlists:</h5>
                <ListComponent data={names} />
            </div>
        );
    }
}

export default PlaylistComponent;
