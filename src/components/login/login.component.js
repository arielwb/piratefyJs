

import React from 'react';

class LoginComponent extends React.Component {

  openLoginWindow() {

    let width = 450,
      height = 730,
      left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

    window.open('http://localhost:8888/login',
      'Spotify',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
    );
  }

  render() {

    return (
      <button type="button" onClick={this.openLoginWindow} className="btn btn-outline-success float-right">Spotify login</button>
    );
  }
}

export default LoginComponent;
