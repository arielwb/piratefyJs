import React from 'react';
import { LoginComponent } from '../exports';
import { PlaylistComponent } from '../exports';
import LIST_PLAYLISTS from '../actions/const';
import './app.css';

class AppComponent extends React.Component {

  test(){
    this.props.actions.listPlaylists({
      payload: [
        'first',
        'second'
      ]
    })
    console.log('ghis is a test')
  }

  render() {
    return (
      <div className="index">
          <LoginComponent />
          <PlaylistComponent playlists={this.props.rootReducer.playlists} onGetPlaylists={this.test.bind(this)} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
