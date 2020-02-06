import React from 'react'

function Interests() {
    return (
        <div className="ui segment" style={{height:"270px"}}>
            <div>
                <img className="ui top aligned tiny image" src="game.png" alt="/" style={{float:"left", marginRight:"20px"}}/>
                <h2 style={{float:"left"}}>Hobbies and interests</h2>
            </div>
            
            <br/> <br/> <br/> <br/>
            <div class="ui celled list">
                    <div class="item">
                        <img class="ui avatar image" src="dribble.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Basketball
                        </div>
                    </div>
                    <div class="item">
                        <img class="ui avatar image" src="gym.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Gym
                        </div>
                    </div>
                    <div class="item">
                        <img class="ui avatar image" src="running.png" alt="pic"/>
                        <div class="content">
                            <div class="header"></div>
                            Runnying
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Interests
