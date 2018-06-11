import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Summary from './components/Summary';
import Projects from './components/Projects';
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
        <Summary />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
