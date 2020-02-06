import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';

class Text extends Component {
    static contextType = LanguageContext;
    TextRender = () => {
        if(this.context === 'english'){
            return (
                <div style={{fontSize:"20px", marginTop:"30px", color:"pink"}}>
                    "Change your thoughts and you will change your world!"
                </div>
            )
        }
        else {
            return (
                <div style={{fontSize:"20px", marginTop:"30px", color:"skyblue"}}>
                    "Promijeni svoje misli i promjenićeš život!"
                </div>
            )
        }
    }
    render() {
        return (
            <div className="ui segmet">
                {this.TextRender()}
            </div>
        )
    }
}

export default Text;
