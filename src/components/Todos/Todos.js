import React, { Component } from 'react';
import Todo from "../Todo/Todo";

export class Todos extends Component {
    render() {
        return (
            <div>
             {this.props.todos ? this.props.todos.map(todo =>{
                return (
                <Todo 
                key={todo.id} 
                id={todo.id}
                title={todo.title} 
                deleteTodo={this.deleteTodo} 
                />
                );
                }) : (
                    <h1>Download</h1>
            )}
            </div>
        )
    }
}

export default Todos;