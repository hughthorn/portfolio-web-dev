import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
