import React from 'react';
import ReactDOM from 'react-dom';

import  AppHeader from './components/app-header';
import  SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const todoDate = [
        {label: 'Learn React', important: true },
        {label: 'Build App', important: false },
        {label: 'Verification App', important: false },
    ];

    return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos = {todoDate } />
</div>
    );
};


ReactDOM.render(<App />,
    document.getElementById('root'));