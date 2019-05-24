import React from 'react';

import TodoListItem from './todo-list-item'

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Learn React" important /></li>
            <li><TodoListItem label="Build App" /></li>
            <li><TodoListItem label="Verification App" /></li>
        </ul>
    );
};

export default TodoList;



