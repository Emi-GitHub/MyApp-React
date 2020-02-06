import React, { Component } from 'react'

export class App extends Component {
    state={
        theme : "ui inverted segment"
    }
    changeThemeInWhite = () => {
        this.setState({
            theme:"ui segment"
        })
    }
    changeThemeInBlack = () => {
        this.setState({
            theme:"ui inverted segment"
        })
    }
    render() {
        return (
            <div className={this.state.theme} style={{height:"1000px"}}>
                <div className={this.state.theme}>
                    <i className="paw icon" style={{float:"left", fontSize:"30px", marginRight:"50px", marginTop:"8px"}}></i>
                    <b style={{fontSize:"30px", textAlign:"center", float:"left",marginRight:"50px", marginTop:"8px", color:"pink"}}>Pets</b>
                    <div >
                        <button className="ui pink basic button" onClick={this.changeThemeInWhite}>White</button>
                        <button className="ui pink basic button" onClick={this.changeThemeInBlack}>Black</button>
                    </div>
    
                </div>
                <div className={this.state.theme} style={{height:"900px"}}>
                    <img src="pets1.jpg" style={{width:"300px", marginRight:"20px"}}></img>
                    <img src="pets2.jpg" style={{width:"300px"}}></img>
                    <div class="ui bulled list">
                        <div className="item">Cats have 32 muscles in each ear.</div>
                        <div className="item">Cats have 4 rows of whiskers.</div>
                        <div className="item">Cats have no collarbone, which is one reason they are so flexible.</div>
                        <div className="item">Cats spend approximately 30% of their waking hours grooming themselves.</div>
                        <div className="item">“American Shorthair” is the designation reserved for pedigreed cats, while similar-looking cats of mixed or unknown origin are called “domestic shorthairs.”</div>   
                        <div className="item">Fedivne’s jaws cannot move sideways.</div>
                        <div className="item">Cats have over one hundred vocal sounds, while dogs have about ten!</div>
                        <div className="item">Cat whiskers are so sensitive they can detect the sdivghtest change in air current.</div>
                        <div className="item">Cats have 26 baby teeth and 30 permanent teeth.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
