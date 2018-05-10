import React from 'react';

import { HeaderComponent } from '../exports';
import { SonglistComponent } from '../exports';
import { PlaylistComponent } from '../exports';
import { ListPlaylists } from '../exports';
import { ViewPlaylistComponent } from '../exports';
import LIST_PLAYLISTS from '../actions/const';
import './app.css';

class AppComponent extends React.Component {


  render() {
    return (
      <div className="container-fluid">
        <HeaderComponent />
        <ListPlaylists />
      </div>
    );
  }
}

export default AppComponent;
