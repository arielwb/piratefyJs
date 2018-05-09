import React from 'react';
import { LoginComponent } from '../exports';
import { PlaylistComponent } from '../exports';
import { ListPlaylists } from '../exports';
import { ViewPlaylistComponent } from '../exports';
import LIST_PLAYLISTS from '../actions/const';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
          <LoginComponent />
          <ListPlaylists />
          <ViewPlaylistComponent />
      </div>
    );
  }
}

export default AppComponent;
