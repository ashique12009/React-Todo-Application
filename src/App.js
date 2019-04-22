import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks/Tasks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      todoText: "",
      isEditable: false
    }
  }

  onInputChange = (e) => {
    this.setState({ todoText: e.target.value });
  }

  addTodo = () => {
    let todoCopy = this.state.todo.slice();
    todoCopy.push(
      { 
        title: this.state.todoText,
        status: false,
        id: this.state.todo.length + 1
      }
    );
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
      todoCopy.push(
        { 
          title: this.state.todoText,
          status: false,
          id: this.state.todo.length + 1
        }
      );
      if ( this.state.todoText !== '' ) {
        this.setState({
          todo: todoCopy,
          todoText: ""
        });
      }
    }
  }

  updateHandler = (title, id) => {
    let todoCopy = this.state.todo.map(task => {
      if ( id === task.id ) {
        return {
          id: id,
          title: title,
          status: false
        }
      }
      return task;
    });

    this.setState({
      todo: todoCopy
    });
  }

  deleteTodo = (id) => {
    let todoCopy = this.state.todo.filter(todo => todo.id !== id)
    this.setState({
      todo: todoCopy
    });
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <h1>Welcome to Todo Application</h1>
            <div className="form-group">
              <label>Todo Title</label>
              <input type="text" onKeyPress={ this.enterKeyPressHandler } onChange={ this.onInputChange } value={ this.state.todoText } className="form-control" placeholder="Enter Todo" />
            </div>
            <button className="btn btn-primary" onClick={ this.addTodo }>Add Todo</button>

            <Tasks 
            tasks={this.state.todo} 
            updateHandler={this.updateHandler.bind(this)}
            deleteHandler={this.deleteTodo.bind(this)} />

        </div>
      </div>
    );
  }
}

export default App;