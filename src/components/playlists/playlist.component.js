

import React from 'react';
// import { SpotifyService } from '../../services/spotify.service';
import ListComponent from '../list/list.component';

// class PlaylistComponent extends React.Component {

//     getPlaylists() {
//         // SpotifyService.getPlaylists()
//         //     .then((playlists) => {
//         //         console.log(playlists);
//         //         this.setState({ data: playlists.body.items });
//         //     });
//     }

//     render() {
//         console.log('props', this.props)
//         let data = this.props.playlists || [];
//         let names = data.map(playlist => playlist.name);
//         // let names = data;
//         let hasPlaylist = data.length > 0;
//         return (
//             <div>
//                 <button  onClick={listPlaylists()}>GetPlaylists</button>
//                 <h5 hidden={!hasPlaylist}>User playlists:</h5>
//                 <ListComponent data={names} />
//             </div>
//         );
//     }
// }


const PlaylistComponent = ({ playlists, viewPlaylist, listPlaylists }) => {
    console.log(playlists)
    console.log(viewPlaylist)
    console.log(listPlaylists)
    playlists = playlists || [];
    let test = [
        {
          id: 1,
          name: 'A playlist'
        },
        {
          id: 2,
          name: 'Another playlist'
        },
        {
          id: 3,
          name: 'Another playlist test'
        }

      ]
    return (
        <div>
            <button onClick={() => listPlaylists(test)}>GetPlaylists</button>
            <ul>
                {playlists.map(playlist =>
                    <div
                        key={playlist.id}
                        onClick={() => viewPlaylist(playlist.id)}
                    >{playlist.name}</div>
                )}
            </ul>
        </div>
    )
}


export default PlaylistComponent;
