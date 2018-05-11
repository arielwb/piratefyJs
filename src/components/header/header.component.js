

import React from 'react';


class HeaderComponent extends React.Component {

  constructor() {
    super();
  }

  login() {
    console.log('login')
  }

  render() {

    return (
      <div id="header">
        <div className="jumbotron w-100" >
          <h1 className="display-4">Piratefy </h1>
          <button type="button" onClick={this.login} className="btn btn-primary float-right">Spotify login</button>
          <p className="lead">A new way to listen.</p>
          <hr className="my-4" />

          <form>

            <div className="input-group">
              <input type="email" className="form-control form-control-lg" ref={(input) => this.searchText = input} placeholder="Ex. Anitta" />
              <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                <i className="fa fa-search"></i>
              </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
