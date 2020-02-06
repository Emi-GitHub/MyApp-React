import React from 'react';

const Home = props => {
    return (
        <div  className={props.up} style={{height:"620px"}}>
            <div className="ui grid">
                <div className="ten wide column" style={{display:"block", marginLeft:"auto"}}>
                <img className="ui medium rounded image" src="pic.png" alt="pic"/>
                </div>
                <div className="fifteen wide column">
                    <h3>Hy!</h3>
                    My name's Emina. I'm 22 years old. I'm  on intership in Walter Code. <br />
                    This is site about me, my schooling, projects, interests etc. <br />
                    Enjoy!
                    <br/> <br/>
                    <div className="ui segment">
                        <b>Select language:</b>  <br/>
                        <div className="ui bulleted list">
                            <div className="item">
                                Bosnian
                                <i className="ba flag" style={{marginLeft:"10px"}}></i>
                            </div>
                            <div className="item">
                                English
                                <i className="gb us flag" style={{marginLeft:"10px"}}></i>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Home;