import React from "react";
import Todo from "./Todo/Todo";

const users = [
    {id:1, number:"1", name: "Pol Redex"}, 
    {id:2, number:"2", name: "Grgzeszyk Kulemski"}, 
    {id:3, number:"3",name: "Mark Stavicz"}
]

class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Users:</h1>
        
            {users.map((elem) =>{
                return <Todo key={elem.id} name={elem.name}/>
            })
            }
        </div>
        );
    }
}

export default App;