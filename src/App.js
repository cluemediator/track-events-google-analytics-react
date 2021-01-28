import React, { Component } from 'react';
import ReactGA from 'react-ga';

class App extends Component {

  // handle GitHub button click
  handleGitHub = () => {
    ReactGA.event({
      category: 'Links',
      action: 'GitHub',
      label: 'GitHub button clicked!',
      value: 1
    });
  }

  // handle StackBlitz button click
  handleStackBlitz = () => {
    ReactGA.event({
      category: 'Links',
      action: 'StackBlitz',
      label: 'StackBlitz button clicked!',
      value: 1
    });
  }

  render() {
    return <div>
      <h4>Home</h4>
      <p>This is the Home page.</p>

      <input type="button" value="Download GitHub Source" onClick={this.handleGitHub}></input>
      <input type="button" value="StackBlitz Project" onClick={this.handleStackBlitz} style={{ marginLeft: 15 }}></input>
    </div>
  }
}

export default App;
