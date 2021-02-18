import React, { Component, CSSProperties } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default class App extends React.Component{
  

  render() {
    
    return (
      <React.Fragment>
 
      <Header name="John Doe" numberOfPokemons={12} />
      </React.Fragment>
    );
  }

}




