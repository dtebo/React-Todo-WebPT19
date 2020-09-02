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

  toggleItem = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(id === item.id){
          return {
            ...item,
            completed: !item.completed
          }
        }

        return item;
      })
    });
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, {id: Date.now(), task: todo, completed: false}]
    });

    console.log('from App addTodo: ', todo);
  }

  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
        <TodoForm
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
