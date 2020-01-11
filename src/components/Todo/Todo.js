import React from "react";
import "./Todo.css"

class Todo extends React.Component {
    delete = (e, title) => {
        console.log("Delete", title);
    }
    render() {
        return(
            <div className="todo">
                <p>{this.props.title}</p>
                <button onClick={(e) => this.delete(e, this.props.title)}>Delete</button>
            </div>
        )
    }
}


export default Todo;