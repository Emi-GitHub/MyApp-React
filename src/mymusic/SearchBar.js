import React, { Component } from 'react';
import './App.css'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''}
    }
    onInputChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    onSubmit = event => {
        event.preventDefault();
        this.props.onInputSearch(this.state.term)
    }
    render() {
        return ( 
            <div className="ui segment">
                <form onSubmit={this.onSubmit}>
                    <img src="music.png" className="logo" alt="logo"/>
                    <div className="ui icon input">
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search for song"
                            className="inputText"
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

