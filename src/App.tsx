import React, { Component, CSSProperties } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default class App extends React.Component {

  render() {
   
    return (
      <div style={rootStyle}>
       <Header/>
       <Sidebar/>
      </div>
    );
  }

}

const rootStyle: CSSProperties = {
  
};



