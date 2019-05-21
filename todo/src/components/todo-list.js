import React from 'react';

const TodoList = () => {
    const item = ['Learn React', 'Build App', 'Verification App'];
    return (
        <ul>
            <li>{ item[0] }</li>
            <li>{ item[1] }</li>
            <li>{ item[2] }</li>
        </ul>
    );
};

export default TodoList;



