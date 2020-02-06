import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectResume } from '../actions';



class ProjectList extends Component{
    state = {
        dugme : "ui secondary button"
    }
    vrati(title){
        if(title === 'Education') return "Play music"
        else if(title === 'Intership') return "Search for pictures"
        else if(title === 'Volounteer experience') return "Simple application"
        else if(title === 'Tehnical skills') return "Youtube"
        else if(title === 'Social skills') return "Flags"
        else if(title === 'Interests') return "Translate"
    }
    renderList(){
        return this.props.resumes.map(resume => {
            return(
                <div className="item" key={resume.title}> 
                    <div className="right floated content">
                        <button className={this.state.dugme} onClick={() => this.props.selectResume(resume)}>Select</button>
                    </div>
                <div className="content"><h4>{this.vrati(resume.title)}</h4></div>
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

export default connect (mapStateToProps, {selectResume})(ProjectList);