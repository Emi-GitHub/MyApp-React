import React, { Component } from 'react';
import LanguageContext from './contexts/LanguageContext';

export class Button extends Component {
    //that is how we hookup a context object to a class component
    static contextType = LanguageContext; //mora se zvati contextType
    //steps: 1. create the context object (component), 2. define context type (above)
    render() {
        console.log(this.context) //english
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        const story = this.context === 'english' ? 'The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.' : 'Het geluk van je leven hangt af van de kwaliteit van je gedachten: bewaak daarom dienovereenkomstig en zorg ervoor dat je geen noties onderhoudt die niet geschikt zijn voor deugdzaamheid en een redelijke aard.'
        return (
            <div>
                <button className="ui button primary">{text}</button>
                <div style={{marginTop:"10px"}}>
                    {story}
                </div>
            </div>
        )
    }
}

export default Button

