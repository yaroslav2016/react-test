import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    render() {
        return(
            <div className="todo">
                <p>{this.props.title}</p>
                <button onClick={e => this.props.deleteTodo(e, this.props.id)}>Delete</button>
            </div>
        );
    }

}

export default Todo;