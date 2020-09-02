import React from 'react';
import { todos } from './data';

import TodoList from './components/TodoList';

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
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
