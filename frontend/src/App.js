import React, { Component } from 'react';
import './App.css';

import Agenda from './Agenda';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: [{ "name" : "Esteban Dalel", "website" : "estebandalelr.co" }]
    };
  }

  componentDidMount() {
    fetch('/agenda', {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      })
      .then((res) => {
        if (res.ok)
          return res.json();
      })
      .then((friends) => {
        this.setState({
          friends: friends || [{
            "name": "Esteban Dalel",
            "website": "estebandalelr.co"
          }]
        });
      })
  }

  render() {
      return (
        <div className="App">
        <h3>Agenda mern</h3>
        <Agenda friends={this.state.friends} />
      </div>
    );
  }

}

export default App;
