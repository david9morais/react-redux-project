import React, { Component } from 'react'
import './App.css';
import List from './components/List';
import User from './components/User';
import photo from './img/user.png'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "David",
      email: "david@gmail.com"
    }

    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
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

  changeInput(event) {
    let target = event.target
    let index = target.name
    this.setState({
      [index]: target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome
              <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
            </label>
            <label>Email
              <input type="text" name="email" value={this.state.email} onChange={this.changeInput}></input>
            </label>
          </form>
          <User name={this.state.name} email={this.state.email} photo={photo} />
        </div>
        <button onClick={this.changeState}>Change Name</button>
        <button onClick={this.resetState}>Reset Name</button>
        <List />
      </div>
    );
  }
}

export default App;
