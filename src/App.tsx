import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/sidebar';

interface Props {}
interface State {
  isSidebarOpen: boolean;
}

export default class App extends Component<Props, State> {

  state: State = {
    isSidebarOpen: false
  }

  toggleSlider = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen})
  }

  render() {
    return (
      <>
        <Header onMenuClick={this.toggleSlider}/>
        <Sidebar isOpen={this.state.isSidebarOpen}/>
      </>
    );
  }
}



