import React, { Component } from 'react';

class App extends Component {
    state = {
        text: "This is my first text!",
        color: "skyblue"
    }
    changeText = () => {
        if(this.state.text === "This is my first text!") {
            this.setState({
                text: "olalala",
                color: "pink"
            })
        }
        else {
            this.setState({
                text: "This is my first text!",
                color: "skyblue"
            })
        }
    }
    render() {
        return (
            <div className="ui inverted segment container" style={{marginTop:"40px"}}>
                <form className="ui form">
                <div>Click on text bellow to change it!</div>
                    <div className="ui segment">
                        <h2 onClick={this.changeText} style={{color:this.state.color}}>{this.state.text} </h2>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
