import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Form extends Component {
    static contextType = LanguageContext;
    FormRender = () => {
        if(this.context === 'english'){
            return (
                <div className="ui form">
                <div className="field">
                    <label>First name:</label>
                    <input type="text" placeholder="First name" />
                </div>
                <div className="field">
                    <label>Middle name:</label>
                    <input type="text" placeholder="Middle name"/>
                </div>
                <div className="field">
                    <label>Last name:</label>
                    <input type="text" placeholder="Last name" />
                </div>

                <div className="inline fields">
                    <label>What's your favorite fruit?</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden" />
                            <label>Apples</label>
                        </div>  
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" class="hidden"/>
                            <label>Oranges</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" class="hidden"/>
                            <label>Pears</label>
                        </div>
                    </div>
                        <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" class="hidden"/>
                            <label>Grapefruit</label>
                        </div>
                    </div>
                </div>

            </div>
            )
        }
        else {
            return (
                <div className="ui form">
                <div className="field">
                    <label>Ime:</label>
                    <input type="text" placeholder="Ime" />
                </div>
                <div className="field">
                    <label>Srednje ime:</label>
                    <input type="text" placeholder="Srednje ime"/>
                </div>
                <div className="field">
                    <label>Prezime:</label>
                    <input type="text" placeholder="Prezime" />
                </div>

                <div className="inline fields">
                    <label>Koje je tvoje najdraže voće?</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden" />
                            <label>Jabuka</label>
                        </div>  
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden"/>
                            <label>Naradža</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden"/>
                            <label>Breskva</label>
                        </div>
                    </div>
                        <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden"/>
                            <label>Grejp</label>
                        </div>
                    </div>
                </div>

            </div>
            )
        }
    }
    render() {
        return (
            <div className="ui segmet">
                {this.FormRender()}
            </div>
        )
    }
}

export default Form
