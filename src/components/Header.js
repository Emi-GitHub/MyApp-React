import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    state = {
        classItemHome:"item",
        classItemResume:"item",
        classItemProjects:"item",
        classItemContact:"item",
        up : "ui inverted segment",
        down : "ui inverted segment"   

    }
   

    componentDidMount(){
        this.onLinkClickHome()
    }

    onLinkClickHome = () => {
        this.setState({
            classItemHome:"active item",
            classItemResume:"item",
            classItemProjects:"item",
            classItemContact:"item"
        })
    }
    onLinkClickResume = () => {
        this.setState({
            classItemHome:"item",
            classItemResume:"active item",
            classItemProjects:"item",
            classItemContact:"item"
        })
    }
    onLinkClickProjects = () => {
        this.setState({
            classItemHome:"item",
            classItemResume:"item",
            classItemProjects:"active item",
            classItemContact:"item"
        })
    }
    onLinkClickContact = () => {
        this.setState({
            classItemHome:"item",
            classItemResume:"item",
            classItemProjects:"item",
            classItemContact:"active item"
        })
    }
    render(){
    return (
        <div className={this.state.up} >
            <div className="ui inverted secondary pointing menu">
                <Link to="/" className={this.state.classItemHome} onClick={this.onLinkClickHome}>Home</Link>
                <Link to="/resume" className={this.state.classItemResume} onClick={this.onLinkClickResume} >Resume</Link>
                <Link to="/projects" className={this.state.classItemProjects} onClick={this.onLinkClickProjects}>Projects</Link>
                <Link to="/contact" className={this.state.classItemContact} onClick={this.onLinkClickContact} up="ui inverted segment">Contact</Link>
                <div className="right menu">
                    {/*<div className="two fields">
                        <div className="ui compact selection">
                            <select className="ui compact selection dropdown" style={{borderRadius:"7px", backgroundColor:"#F0F8FF"}}>
                                <option value="" disabled selected style={{color:"white"}}>Select theme</option>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                            </select>
                        </div>
                    </div> */}
                    {this.props.children}
                </div>
            </div>
        </div>
        )
    }
}

export default Header;