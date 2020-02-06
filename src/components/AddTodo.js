import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        content: ''
    }
    onInputChange = event => {
        this.setState({
            content: event.target.value
        })
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}> 
                    <div className="ui right labeled left icon input">
                        <i className="tags icon"></i>
                        <input type="text" placeholder="Add todo's" onChange={this.onInputChange} value={this.state.content}/>
                        <a className="ui tag label" href="/">todo's</a>
                        <button className="ui button" style={{marginLeft:"20px"}}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo
