

import React from 'react';


class HeaderComponent extends React.Component {

  constructor() {
    super();
  }

  login(){
    console.log('login')
  }

  render() {

    return (
      <div className="jumbotron w-100" >
        <h1 className="display-4">Piratefy </h1>
        <button type="button" onClick={this.login} className="btn btn-primary float-right">Spotify login</button>
        <p className="lead">A new way to listen.</p>
        <hr className="my-4" />

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Search</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex. Anitta" />
            <small id="emailHelp" className="form-text text-muted">Type wath you want.</small>
          </div>

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}
export default HeaderComponent;
