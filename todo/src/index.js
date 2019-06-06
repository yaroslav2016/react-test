import React from 'react';
import ReactDOM from 'react-dom';

import  AppHeader from './components/app-header';
import  SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import Itemstatusfilter from "./components/item-status-filter";
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
    <Itemstatusfilter />
    <TodoList todos = {todoDate } />
</div>
    );
};


ReactDOM.render(<App />,
    document.getElementById('root'));