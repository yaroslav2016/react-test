import React, { Component } from 'react';
import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: ""
  };

onChange = (e) => {
  this.setState({title: e.target.value});
};

onSubmit = (e) => {
  e.preventDefault();
  alert(this.state.title);
};

    render() {
        return (
          <form id="add-todo" onSubmit={this.onSubmit}>  
            <input type="text" value={this.state.title} onChange={this.onChange} />
            <button type="submit">Add User</button>
          </form>
        );
    }
}

export default AddTodo;