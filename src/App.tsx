import React, { Component, CSSProperties } from 'react';
import Input from './components/Input'

interface Props{}
interface State{
  searchValue: string;

}

export default class App extends React.Component<Props, State>{

  state: State = {
    searchValue: ''
  }

  handleNewSearchValue = (value: string) => {
    this.setState({ searchValue: value})
  }

  render() {
    
    return (
      <React.Fragment>
        <Input
        value={this.state.searchValue} 
        onChange={this.handleNewSearchValue}
        />
      </React.Fragment>
    );
  }

}







