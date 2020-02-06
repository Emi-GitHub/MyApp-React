import React from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';

const Projects = props => {
    return (
        <div className={props.up} style={{height:"620px"}}>
            <div className="ui row">
                <div className="column eight wide">
                    <ProjectList boja={props.up}/>
                </div>
                <div className="ui divider"></div>
                <div className="column eight wide">
                    <ProjectDetail />
            </div>
        </div>
    </div> 
    )
}

export default Projects;