import React, { Component } from 'react';
import "./AddTodo.css";
export class AddTodo extends Component {
  state = {
    title: ""
  };

onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value});
};

onSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo({id: Date.now(), title: this.state.title})
  this.setState({title:""})
};

    render() {
        return (
          <form id="add-todo" onSubmit={this.onSubmit}> 
          <h1>Add user</h1>
            <div className="form-group">
              <label htmlFor="title">Name</label>
             <input 
             className="form-control" 
             type="text" 
                name="title" 
                value={this.state.title} 
                onChange={this.onChange}
              />
            </div> 
            <button className="btn btn-success" type="submit">Add User</button>
          </form>
        );
    }
}

export default AddTodo;