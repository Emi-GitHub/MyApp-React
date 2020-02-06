import React from 'react'

function Education() {
    return (
        <div className="ui segment" style={{height:"270px"}}>
            <div>
                <img className="ui top aligned tiny image" src="graduated.png" alt="/" style={{float:"left", marginRight:"20px"}}/>
                <h2 style={{float:"left"}}>Previous education</h2>
            </div>
            
            <br/> <br/> <br/> <br/>
            <div className="ui divider"></div>
            <img className="ui top aligned tiny image" src="etfsa.png" alt="/" style={{float:"left", marginRight:"20px", width:"50px"}}/>
            <b><u>Faculty of Electrical Energeineering, University of Sarajevo </u></b><br/>
            - Computer Science and Informatics <br/>
            B.E. OF COMPUTING AND INFORMATICS, 2019 <br/> <br/>
            <img className="ui top aligned tiny image" src="pbgs.png" alt="/" style={{float:"left", marginRight:"20px", width:"50px"}}/>
            <b><u>First bosniak gymnasium, Sarajevo</u></b> <br/>
            - Mathematics and Informatics <br/>
            HIGH SCHOOL DIPLOMA, 2015
        </div>
    )
}

export default Education
