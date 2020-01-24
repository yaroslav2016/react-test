import React, { Component } from 'react';
import "./AddTodo.css";
export class AddTodo extends Component {
  state = {
    title: "",
    date: ""
  };

onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value});
};

onSubmit = (e) => {
  e.preventDefault();
  alert(this.state.title + " " + this.state.date);
};

    render() {
        return (
          <form id="add-todo" onSubmit={this.onSubmit}>  
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
            <input type="text" name="date" value={this.state.dateyy} onChange={this.onChange} />

            <button type="submit">Add User</button>
          </form>
        );
    }
}

export default AddTodo;