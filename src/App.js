import React from 'react';
import { todos } from './data';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './index.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: todos
  };

  componentDidMount(){
    //Grab todos from localStorage if possible
    if(localStorage.getItem('todos')){
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos'))
      });
    }
    else{
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  toggleItem = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(id === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, {id: Date.now(), task: todo, completed: false}]
    });
  }

  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
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
          clearTodo={this.clearTodo}
        />
        <TodoForm
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
