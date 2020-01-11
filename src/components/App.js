import React from "react";
import Todo from "./Todo/Todo";

class App extends React.Component {
    state = {
        todos: [
            {id:1, number:"1", title: "Pol Redex"}, 
            {id:2, number:"2", title: "Grgzeszyk Kulemski"}, 
            {id:3, number:"3", title: "Mark Stavicz"}
        ]
     };
 
     deleteTodo = (e, id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
     };

    render() {
        return (
        <div>
            <h1>Users:</h1>
        
            {this.state.todos.map(todo =>{
                return (
                <Todo 
                key={todo.id} 
                id={todo.id}
                title={todo.title} 
                deleteTodo={this.deleteTodo} 
                />
                );
            })
            }
        </div>
        );
    }
}

export default App;