import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);

  this.state={
    counter: 0,
    error:"You can't go lower than zero!",
    showError: false,
  }
}

  render() {
    return (
      <div data-test="component-app">
       { this.state.showError ? <h2 data-test="error-display" style={{color:'red'}}>{this.state.error}</h2> : ''}
       <h1 data-test="counter-display"> The counter is currently:{this.state.counter >0 ? this.state.counter : '0'}</h1>
        <button data-test="increment-button" 
        onClick={() => this.setState({counter: this.state.counter + 1, showError: false})}
        >Increment counter</button>
        <button data-test="decrement-button" 
        onClick={() => 
          {this.state.counter >= 0 
          ? 
          this.setState({counter: this.state.counter - 1})
          :
          this.setState({showError: true})
        }}
        >Decrement counter</button>
      </div>
    );
  }
}

export default App;
