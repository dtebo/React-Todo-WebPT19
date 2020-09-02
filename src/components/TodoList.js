import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;

    return (
        <div>
            {todos.map(todo => {
               return <Todo
                        key={todo.id}
                        todo={todo}
                        toggleItem={props.toggleItem}
                      />
            })}
        </div>
    );
};

export default TodoList;
