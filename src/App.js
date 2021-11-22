import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { value:0 }
    this.clickHandler = this.clickHandler.bind(this)
}
clickHandler( event ){
    const characters = event.target.value;
    this.setState({ value: characters.length })
}

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.clickHandler}></textarea>
        <div className="counter">{this.state.value}</div>
      </div>
    );
  }
}

export default App;
