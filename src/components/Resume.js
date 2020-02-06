import React from 'react';
import ResumeList from './ResumeList';
import ResumeDetail from './ResumeDetail';
//ovo napraviti kao songs
const Resume = props => {
    return (
        <div className={props.up} style={{height:"620px"}}>
            <div className="ui row">
                <div className="column eight wide">
                    <ResumeList boja={props.up}/>
                </div>
                <div className="ui divider"></div>
                <div className="column eight wide">
                    <ResumeDetail />
            </div>
        </div>
    </div> 
    
    )
}

export default Resume;