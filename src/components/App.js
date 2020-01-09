import React from "react";
import Todo from "./Todo/Todo";


class App extends React.Component {
    render() {
        return (
        <div>
            <h1>My list</h1>
            <Todo />
        </div>
        );
    }
}

export default App;