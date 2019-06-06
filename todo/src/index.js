import React from 'react';
import ReactDOM from 'react-dom';

import  AppHeader from './components/app-header/app-header';
import  SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import './index.css';

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


ReactDOM.render(<App />,
    document.getElementById('root'));