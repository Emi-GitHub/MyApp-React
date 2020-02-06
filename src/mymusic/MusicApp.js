import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SongsList from './SongsList';

class MusicApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }
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
            <div className="ui segment" style={{height:"270px"}}>
                    <i className="music icon"></i>
                    Search for song and enjoy in music! <br/> <br/>
                    <b>STEP 1:</b> Write name of song in search input and click enter<br/>
                    <b>STEP 2:</b> Click on play button <br/> 
                    <b>STEP 3:</b> Music you sellected will play <br/> <br/>
                    This application will show bellow, so check bellow!
                </div>
            <div className="ui segment" style={{height:"7350px", marginTop:"150px"}}>
                <SearchBar onInputSearch={this.onInputSearch}/>
                <div className="mojMain">
                    <SongsList songs={this.state.songs}/>
                </div>
            </div>
            </div>
        )
    }
}

export default MusicApp

