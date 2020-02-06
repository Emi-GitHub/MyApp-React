import React from 'react'

function TehnicalSkills() {
    return (
        <div>
            <div className="ui segment" style={{height:"270px"}}>
                <div>
                    <img className="ui top aligned tiny image" src="ability.png" alt="/" style={{float:"left", marginRight:"20px"}}/>
                    <h2 style={{float:"left"}}>Tehnical skills</h2>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="ui divider"></div>
                <div className="ui labeled icon menu">
                    <a className="item" href="">
                        <i className="cuttlefish icon"></i>
                        C
                    </a>
                    <a className="item" href="">
                        <i className="cuttlefish icon"></i>
                        C++
                    </a>
                    <a className="item" href="">
                        <i className="hashtag icon"></i>
                        C#
                    </a>
                    <a className="item" href="">
                        <i className="laptop icon"></i>
                        MySQL
                    </a>
                    <a className="item" href="">
                        <i className="html5 icon"></i>
                        HTML5
                    </a>
                    <a className="item" href="">
                        <i className="css3 alternative icon"></i>
                        CSS3
                    </a>
                    <a className="item" href="">
                        <i className="js square icon"></i>
                        JavaScript
                    </a>
                    <a className="item" href="">
                        <i className="node js icon"></i>
                        Node.js
                    </a>
                    <a className="item" href="">
                        <i className="react icon"></i>
                        React.js
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TehnicalSkills
