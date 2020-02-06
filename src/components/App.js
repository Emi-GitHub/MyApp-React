import React, { Component } from 'react'
import Text from './Text';

class App extends Component {
    state = {
        lang: 'english'
    }
    clickEnglish = () => {
        this.setState({
            lang: 'english'
        })
    }
    clickBosnian = () => {
        this.setState({
            lang: 'bosnian'
        })
    }
    render() {
        return (
            <div className="ui container segment" style={{marginTop:"20px"}}>
                <div style={{marginBottom:"10px"}}>Select language:</div>
                <li onClick={this.clickEnglish} style={{fontSize:"20px", color:"pink"}}>English</li>
                <li onClick={this.clickBosnian} style={{fontSize:"20px", color:"skyblue"}}>Bosnian</li>
                <Text lang={this.state.lang}/>
            </div>
        )
    }
}

export default App
