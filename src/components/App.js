import React from 'react';

import { HeaderComponent } from './';
import ListPlaylistsContainer from '../containers/ListPlaylists.container';
import PlayerContainer from '../containers/Player.container';

import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <HeaderComponent />
        <ListPlaylistsContainer />
        <PlayerContainer />
      </div>
    );
  }
}

export default AppComponent;
