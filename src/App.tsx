import React, { Component } from 'react';

export default class App extends React.Component<{}, {}> {

  render() {

    const [todos, setTodos] = useState([]);
   
    return (
      <div>
       <h1>Todo list</h1>
       <input type="text" placeholder="add a todo..."/>
       <button>Add</button>
      </div>
    );
  }
}



