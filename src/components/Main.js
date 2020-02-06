import React from 'react';
import Home from './Home';
import Resume from './Resume';
import history from '../history';
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './Contact';

class Main extends React.Component {
    state = {
        up : "ui segment" 

    }
    changeThemeInWhite = () => {
        this.setState({
            up:"ui segment"
        })
    }
    changeThemeInBlack = () => {
        this.setState({
            up:"ui inverted segment"
        })
    }
    render(){
        return (
            <div style={{height:"600px"}} >
                <Router history={history}>
                    <BrowserRouter>
                        <div>
                            <Header>
                            <div>
                                <button className="ui inverted button"  onClick={this.changeThemeInWhite}>White theme</button>
                                <button className="ui inverted button"  onClick={this.changeThemeInBlack}>Black theme</button>
                            </div>
                            </Header>

                            
                            <Switch>
                                <Route path="/" exact component={() => <Home up={this.state.up} />} />
                                <Route path="/resume" component={() => <Resume up={this.state.up} />}/>
                                <Route path="/projects" component={() => <Projects up={this.state.up} />}/>
                                <Route path="/contact" component={() => <Contact up={this.state.up} />} />
                            </Switch>
                            <Footer />
                        </div>
                    </BrowserRouter>
                </Router>
            </div>
        )
    }
   
}

export default Main;