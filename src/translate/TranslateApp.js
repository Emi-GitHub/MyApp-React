import React, { Component } from 'react'
import UserCreate from './UserCreate';
import LanguageContext from './contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export class TranslateApp extends Component {
    constructor(props){
        super(props);
        this.state={
            language: 'english'
        }
    }
    onLanguageChange = language => {
        this.setState({
            language: language
        })
    }
    render() {
        return (
            <div>
                <div className="ui segment" style={{height:"270px"}}>
                    <i className="comment icon"></i>
                    This is simple application, you can select language of this site! <br/> <br/>
                    <b>STEP 1:</b> Click on flag which language you want <br/>
                    <b>STEP 3:</b> Site will be on language you selected <br/> <br/>
                    This application will show bellow, so check bellow!
                </div>
                <div  className="ui segment" style={{height:"220px", marginTop:"150px"}}>
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <LanguageContext.Provider value={this.state.language}> {/* anytime that i change the state language property i want to take that new value and push it into the provider*/}
                    <UserCreate />
                </LanguageContext.Provider>        
                </div>
            </div>


        )
    }
}

export default TranslateApp

