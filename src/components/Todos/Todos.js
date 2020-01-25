import React, { Component } from 'react';
import Todo from "../Todo/Todo";

export class Todos extends Component {
    render() {
        return (
            <div>
                 <h1>Users:</h1>

                {this.props.todos ? this.props.todos.map(todo =>{
                return (
                <Todo 
                deleteTodo={this.props.deleteTodo}
                key={todo.id} 
                id={todo.id}
                title={todo.title} 
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