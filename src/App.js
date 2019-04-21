import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      todoText: ""
    }
  }

  onInputChange = e => {
    this.setState({ todoText: e.target.value });
  }

  addTodo = () => {
    let todoCopy = this.state.todo.slice();
    todoCopy.push(this.state.todoText);
    if ( this.state.todoText !== '' ) {
      this.setState({
        todo: todoCopy,
        todoText: ""
      });
    }
  }

  enterKeyPressHandler = (e) => {
    if ( e.key === 'Enter' ) {
      let todoCopy = this.state.todo.slice();
      todoCopy.push(this.state.todoText);
      if ( this.state.todoText !== '' ) {
        this.setState({
          todo: todoCopy,
          todoText: ""
        });
      }
    }
  }

  render() {
    let myTodos = this.state.todo.map((e, i) => {
      return(
        <li className="list-group-item" key={i}>{e}</li>
      );
    });

    return (
      <div className="App">
        <div className="container">
          <h1>Welcome to Todo Application</h1>
            <div className="form-group">
              <label>Todo Title</label>
              <input type="text" onKeyPress={ this.enterKeyPressHandler } onChange={ this.onInputChange } value={ this.state.todoText } className="form-control" placeholder="Enter Todo" />
            </div>
            <button className="btn btn-primary" onClick={ this.addTodo }>Add Todo</button>
            { ( this.state.todo.length === 0 ) ? <h2>No Todos Found!</h2> : <ul className="clist list-group mt-10">{ myTodos }</ul> }
        </div>
      </div>
    );
  }
}

export default App;