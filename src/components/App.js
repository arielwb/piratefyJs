import React from 'react';

import { HeaderComponent } from './';
import ListPlaylistsContainer from '../containers/ListPlaylists.container';

import './app.css';

class AppComponent extends React.Component {

  render() {

    console.log(ListPlaylistsContainer)
    return (
      <div className="container-fluid">
        <HeaderComponent />
        <ListPlaylistsContainer />
      </div>
    );
  }
}

export default AppComponent;
