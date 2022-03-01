import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store'

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
        <Counter store={store}/>
      </div>
    );
  }
}
 
export default App;
