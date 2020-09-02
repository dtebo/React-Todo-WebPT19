import React from 'react';

import Todo from './Todo';

import './Todo.css';

const TodoList = (props) => {
    const { todos, clearTodo } = props;

    return (
        <div className='todo-list'>
            {todos.map(todo => {
               return <Todo
                        key={todo.id}
                        todo={todo}
                        toggleItem={props.toggleItem}
                      />
            })}
            <button
                onClick={clearTodo}
            >
                Clear Todo
            </button>
        </div>
    );
};

export default TodoList;
