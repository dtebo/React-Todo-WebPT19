import React from 'react';

import './Todo.css';

const Todo = (props) => {
    const { todo } = props;

    const handleClick = e => {
        e.preventDefault();

        props.toggleItem(todo.id);
    }

    return (
        <div
            onClick={handleClick}
        >
            <p className={`todo${todo.completed ? ' completed' : ''}`}>{todo.task}</p>
        </div>
    );
};

export default Todo;