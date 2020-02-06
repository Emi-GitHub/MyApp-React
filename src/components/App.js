import React, { Component } from 'react'
import Text from './Text';
import Form from './Form';
import LanguageContext from '../contexts/LanguageContext';

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
                <LanguageContext.Provider value={this.state.lang}>
                    <Text/>
                    <Form/>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App
