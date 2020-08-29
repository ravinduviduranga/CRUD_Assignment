import React, { Component } from 'react';
import './App.css';
import ProductCollection from './components/ProductCollection';

class App extends Component{
    render(){
      return(
          <div className="App">
            <ProductCollection/>
          </div>
      );
    }
}

export default App
