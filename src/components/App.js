import React, { Component } from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';

export class App extends Component {
    state = {
        todos: []
    }
    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos:todos
        })
    }
    addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos
        })
    }
    render(){
        return (
            <div className="ui container">
                <h1 style={{textAlign:"center", color:"skyblue", marginTop:"40px"}}>Todo's</h1>
                <h3 style={{color:"grey"}}>Add new Todo's:</h3>
                <AddTodo addTodo={this.addTodo}/>
                <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default App;
