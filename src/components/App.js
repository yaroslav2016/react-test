import React from "react";
import Todo from "./Todo/Todo";

const users = [
    {id:1, number:"1", title: "Pol Redex"}, 
    {id:2, number:"2", title: "Grgzeszyk Kulemski"}, 
    {id:3, number:"3", title: "Mark Stavicz"}
]

class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Users:</h1>
        
            {users.map((users) =>{
                return <Todo key={users.id} title={users.title}/>
            })
            }
        </div>
        );
    }
}

export default App;