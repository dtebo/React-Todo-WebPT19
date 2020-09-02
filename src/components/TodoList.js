import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;

    return (
        <>
            {todos.map(todo => {
               return <Todo
                        todo={todo}
                      />
            })}
        </>
    );
};

export default TodoList;
