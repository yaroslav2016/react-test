import React from "react";
import Todo from "./Todo/Todo";

const user1 = "Pol";
const user2 =  "Grgzeszyk";
const user3 = "Mark";


class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Users:</h1>
            <Todo name={user1} />
            <Todo name={user2} />
            <Todo name={user3} />
        </div>
        );
    }
}

export default App;