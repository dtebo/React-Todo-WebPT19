import React, { Component } from 'react';

class TodoForm extends Component{
    state = {
        todo: ""
    };

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todo'>
                        Todo
                        <input
                            type='text'
                            id='todo'
                            name='todo'
                            value={this.state.todo}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <button>Add</button>
                </form>
            </>
        );
    }
}

export default TodoForm;