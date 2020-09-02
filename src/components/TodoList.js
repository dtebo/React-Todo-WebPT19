import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    const { todos, clearTodo } = props;

    return (
        <div>
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
