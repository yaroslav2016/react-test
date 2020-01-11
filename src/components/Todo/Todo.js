import React from "react";
import "./Todo.css"

class Todo extends React.Component {
    render() {
        return(
            <div className="todo">
                <p>Name: {this.props.name}</p>
                <button>Delete</button>
            </div>
        )
    }
}


export default Todo;