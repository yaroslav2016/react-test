import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios"

import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";

class App extends React.Component {
    state = {
        todos: null
     };
 
     deleteTodo = (e, id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id) });
     };

    componentDidMount(){
        axios("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            this.setState({todos: res.data})
        })
    }


    render() {
        return (
        <div>
            <h1>Users:</h1>

            <Switch>
            <Route exact path="/add" component={AddTodo} />
            <Route
            exach
            path="/"
            render={() => {
                return <Todos todos={this.state.todos} />;
            }}
            />
            </Switch>
        </div>
        );
    }
}

export default App;