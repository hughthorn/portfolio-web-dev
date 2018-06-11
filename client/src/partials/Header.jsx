import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

  class Header extends Component {
    render() {
  return (
    <nav>
    <h1 className="is-size-1">Hugh Thornhill</h1>
      <p>Photographer and chef turned full-stack developer</p>
      <ul>

      </ul>
    </nav>
  );
}
}

export default Header;
        // <Link to="/create">
        // <button className="button is-large">
        // +
        // </button>
        // </Link>
