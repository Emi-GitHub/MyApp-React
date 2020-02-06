import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

export class SecondForm extends Component {
    renderInput = props => {
        return(
            <div>
                <label>{props.label}</label>
                <input {...props.input} autoComplete="off" placeholder={props.placeholder}/>
                {this.renderError(props.meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        console.log(formValues.first)
        
    }
    renderError = meta => {
        if(meta.touched && meta.error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
        <div>
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="field">
                    <Field name="first" component={this.renderInput} label="First Name" placeholder="First name"/>
                </div>
                <div className="field">
                    <Field name="last" component={this.renderInput} label="Last Name" placeholder="Last name"/>
                </div>
                <button className="ui button primary">Submit</button>
            </form> 
        </div>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.first) errors.first = 'You must enter a first name'
    else if(formValues.first.length <= 1) errors.first = ' You must have more than one letter'
    if(!formValues.last) errors.last = "You must enter a last name"
    
    return errors;
}

export default reduxForm({form:'second', validate})(SecondForm);
