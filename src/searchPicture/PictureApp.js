import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class PictureApp extends React.Component{
    state = {
        images: []
    }
    
    onSearchSubmit = async term => {
        const BASE_URL = 'https://api.unsplash.com/';
        const FETCH_URL = BASE_URL + 'search/photos';
        const response = await axios.get(FETCH_URL, {
            params: { query: term },
            headers: {Authorization: 'Client-ID a27998d41190b30ac7cad4c9b39044520e46acb9f5867632be23d3167c90a085'}
        }) 
        this.setState({ images: response.data.results });
    }
    render(){
        return (
            <div>
            <div className="ui segment" style={{height:"270px"}}>
                    <i className="image icon"></i>
                    In this app you can search for picture whichever you want! <br/> <br/>
                    <b>STEP 1:</b> Write name of image in search input and click enter <br/>
                    <b>STEP 2:</b> List of image will appear on the screen <br/> <br/>
                    This application will show bellow, so check bellow!
                </div>
                <div className="ui segment" style={{height:"2080px", marginTop:"150px"}}>
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images}/>
                 </div>
            </div>

        );
    }
}

export default PictureApp;
