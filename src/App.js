import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
        <Counter count='0'/>
      </div>
    );
  }
}
 
export default App;
