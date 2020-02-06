import React, { Component } from 'react'

class App extends Component {
    state = {
        counter: 0
    }

    increment = () => {
        let pomocni=this.state.counter+1
        this.setState({
            counter: pomocni
        })
    }

    decrement = () => {
        let pomocni=this.state.counter-1
        this.setState({
            counter: pomocni
        })
    }

    increment_5 = () => {
        let pomocni=this.state.counter+5
        this.setState({
            counter: pomocni
        })
    }

    decrement_5 = () => {
        let pomocni=this.state.counter-5
        this.setState({
            counter: pomocni
        })
    }
    
    render() {
        return (
            <div className="ui container segment" style={{marginTop:'40px'}}>
            <div className="ui inverted segment">
                <i className="calculator icon" style={{float:"left", fontSize:"30px", marginRight:"50px", marginTop:"2px"}}></i>
                <b style={{fontSize:"30px", textAlign:"center"}}>REACT Counter: <b style={{color:"red"}}>{this.state.counter}</b> </b>
            </div>
            <div className="ui inverted segment">
                <div className="two ui buttons">
                    <button className=" positive ui button" onClick={this.increment}>Up</button>
                    <button className="negative ui button" onClick={this.decrement}>Down</button>
                </div> 
                <br/> <br/>
                <div className="two ui buttons">
                    <button className="positive ui button" onClick={this.increment_5}>Up 5</button>
                    <button className="negative ui button" onClick={this.decrement_5}>Down 5</button>
                </div>
            </div>
        </div>
        )
    }
}

export default App
