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
        <div className="row">
          <HeaderComponent />
        </div>
        <div className="row">
          <div className="col-md-4">
            <PlaylistComponent />
          </div>
          <div className="col-md-8">
            <SonglistComponent />
          </div>
        </div>

      </div>
    );
  }
}

export default AppComponent;
