import React from 'react';
import { todos } from './data';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: todos
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList
          todos={this.state.todos}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;
