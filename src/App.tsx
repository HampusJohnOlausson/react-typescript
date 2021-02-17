import React, { Component, CSSProperties } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'


interface Props {}
interface State {
  isSidebarOpen: boolean;
}

export default class App extends React.Component<Props, State> {
  
  state: State = {
    isSidebarOpen: false
  }

  toggleMenuClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    
    return (
      <React.Fragment>
       <Header onMenuClick={this.toggleMenuClick}/>
       <Sidebar
        isOpen={this.state.isSidebarOpen} 
        onSidebarClose={this.toggleMenuClick}/>
      </React.Fragment>
    );
  }

}




