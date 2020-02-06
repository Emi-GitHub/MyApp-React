import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectResume } from '../actions';

class ResumeList extends Component{
    state = {
        dugme : "ui secondary button"
    }
    renderList(){
        return this.props.resumes.map(resume => {
            return(
                <div className="item" key={resume.title}> 
                    <div className="right floated content">
                        <button className={this.state.dugme} onClick={() => this.props.selectResume(resume)}>Select</button>
                    </div>
                    <div className="content"><h4>{resume.title}</h4></div>
                </div>
            )
        })
    }
    render(){
        if (this.props.boja == "ui segment"){
            this.state.dugme = "ui secondary button"
        }
        else {
            this.state.dugme = "ui white button"
        }
        return (
            <div className="ui divided list" >
                {this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        resumes: state.resumes
    }
}

export default connect (mapStateToProps, {selectResume})(ResumeList);