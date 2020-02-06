import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SongsList from './SongsList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }
    /*componentDidMount(){
        this.onInputSearch('Shallow')
    }*/
    onInputSearch = async term => {
        const BASE_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search?';
        const FETCH_URL = BASE_URL + 'q=' + term;
        //console.log('FETCH_URL: ', FETCH_URL);    
        const response = await axios.get(FETCH_URL,{
            q: term,
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "517871db22msh425ef79f83d19e2p1cbfa6jsnc2e769166eb0"
            }
        });
        this.setState({
            songs: response.data.data
        })
        console.log(response.data.data)
    }
    render() {
        return (
            <div>
                <SearchBar onInputSearch={this.onInputSearch}/>
                <div className="mojMain">
                    <SongsList songs={this.state.songs}/>
                </div>
            </div>
        )
    }
}

export default App

