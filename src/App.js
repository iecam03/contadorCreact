import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter:"0"
  }
  change= (event)=>{
    console.log(event.target.value)
    var oldCount = this.state.counter;
    oldCount +=  event.target.value
    console.log(oldCount);
    const newCount = oldCount.length-1; 
    console.log(newCount)
    this.setState({counter:newCount});
  }
    
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.change}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
