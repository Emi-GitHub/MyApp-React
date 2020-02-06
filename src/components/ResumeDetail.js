import React, { Component } from 'react';
import { connect } from 'react-redux';
import Education from './Resumes/Education';
import Intership from './Resumes/Intership';
import Volounteer from './Resumes/Volounteer';
import TehnicalSkills from './Resumes/TehnicalSkills';
import SocialSkills from './Resumes/SocialSkills';
import Interests from './Resumes/Interests';

export class ResumeDetail extends Component {
    selectComponent = title => {
        if(title === 'Education') return <Education />
        else if(title === 'Intership') return <Intership />
        else if(title === 'Volounteer experience') return <Volounteer />
        else if(title === 'Tehnical skills') return <TehnicalSkills />
        else if(title === 'Social skills') return <SocialSkills />
        else if(title === 'Interests') return <Interests />
    }
    render() {
        if(!this.props.resume) return (
            <div className="ui segment" style={{height:"310px"}}>
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Please, select a field!</div>
            </div>
            <p></p>
            </div>
        )
        return (
            <div>
                <div>
                    <h2>{this.props.resume.title}</h2>
                    {this.selectComponent(this.props.resume.title)}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        resume: state.activeResume
    }
}

export default connect(mapStateToProps)(ResumeDetail);