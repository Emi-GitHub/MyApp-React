import React from 'react'

function TodosList(props) {
    if(props.todos.length === 0) {
        return <div>You should add some todo's</div>
    }
    const mapa = props.todos.map(todo => {
        return(
            <div className="ui segment">
                <div className="ui segment" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
                <button className="ui button" onClick={()=>{props.deleteTodo(todo.id)}} style={{marginBottom:"5px"}}>Delete</button>
            </div>
        )
    })
    return (
        <div className="ui segment" style={{backgroundColor:"skyblue"}}>
            {mapa}
        </div>
    )
}

export default TodosList;
