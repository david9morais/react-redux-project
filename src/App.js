import React, { Component } from 'react'
import './App.css';
import User from './components/User';
import photo from './img/user.png'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "David"
    }

    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState() {
    this.setState({
      name: "David Morais"
    })
  }

  resetState() {
    this.setState({
      name: "David"
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <User name={this.state.name} photo={photo} />
        </div>
        <button onClick={this.changeState}>Change Name</button>
        <button onClick={this.resetState}>Reset Name</button>
      </div>
    );
  }
}

export default App;
