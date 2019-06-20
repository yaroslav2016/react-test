import React from 'react';

import  AppHeader from '../app-header';
import  SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import './app.css';

const App = () => {
    const todoDate = [
        {label: 'Learn React', important: true, id: 1 },
        {label: 'Build App', important: false, id: 2},
        {label: 'Verification App', important: false, id: 3},
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ItemStatusFilter />
            <TodoList todos = {todoDate } />
        </div>
    );
};

export default App;
