import React from 'react';

const Contact = props => {
    return (
        <div className={props.up} style={{height:"620px"}}>
            <div>
                <h3>Hello!</h3>
                If you are interested in details you can send me e-mail,
                or you can call me on the number bellow. 
                I'd be happy to reply!
            </div>
            <div className="ui segment">
                <h3>Contact me:</h3>
                <i className="phone icon"></i>
                (+387)603114029
                <br/>
                <i className="mail icon"></i>
                mehicemina05@gmail.com
                <br/>
                <i className="address card icon"></i>
                Kenana Brkanića 44
                <br/>
            </div>
           <div className="ui segment"> 
                <h3>Visit me on:</h3>
                <div className="ui celled list">
                    <div className="item">
                        <img className="ui avatar image" src="in.png" alt="pic"/>
                        <div className="content">
                            <div className="header">Linkedin</div>
                            <a href="https://www.linkedin.com/in/emina-mehic-366729183/">Open my linkedin profile</a>
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" src="git.png" alt="pic"/>
                        <div className="content">
                            <div className="header">GitHub</div>
                            <a href="https://www.github.com/Emi-GitHub">Open my GitHub profile</a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Contact;