import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';

class VideoApp extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount(){
        this.onTermSubmit('fruits')
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    };

    onTermSubmit = async term => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: 'AIzaSyB0IF7DA2EWBLEsLDwbhmE0ED2QSVogPYs'
            }
        });
        //data.items vidimo na konzoli (ctrl+shift+i)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }; 

    render() {
        return (
            <div>
                <div className="ui segment" style={{height:"270px"}}>
                    <i className="play icon"></i>
                    This application is like part of youtube  <br/> <br/>
                    <b>STEP 1:</b> Write something in search input <br/>
                    <b>STEP 2:</b> List of videos will appear on the screen <br/>
                    <b>STEP 3:</b> Select whichever video you want and click play <br/>
                    <b>STEP 4:</b> Video you sellected will play <br/> <br/>
                    This application will show bellow, so check bellow!
                </div>
                <div className="ui container" style={{height:"7350px", marginTop:"150px"}}>
                    <SearchBar callMe={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoApp;

