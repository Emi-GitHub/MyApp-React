import React from 'react'

export default function SocialSkills() {
    return (
        <div>
            <div className="ui segment" style={{height:"270px"}}>
                <div>
                    <img className="ui top aligned tiny image" src="skill.png" alt="/" style={{float:"left", marginRight:"20px"}}/>
                    <h2 style={{float:"left"}}>Social skills</h2>
                </div>
                <br/> <br/> <br/> <br/>
                <div class="ui celled list">
                    <div class="item">
                        <img class="ui avatar image" src="user.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Team player
                        </div>
                    </div>
                    <div class="item">
                        <img class="ui avatar image" src="user.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Highly creative and innovative
                        </div>
                    </div>
                    <div class="item">
                        <img class="ui avatar image" src="user.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Fast learner
                        </div>
                    </div>
                    <div class="item">
                        <img class="ui avatar image" src="user.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Hard working
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
