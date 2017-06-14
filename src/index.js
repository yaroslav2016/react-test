import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render(){
        return(
            <h1>App works!</h1>
    );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);