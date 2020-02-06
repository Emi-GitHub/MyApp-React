import React, { Component } from 'react';
import { connect } from 'react-redux';
import MusicApp from '../mymusic/MusicApp';
import PictureApp from '../searchPicture/PictureApp';
import SimpleApp from '../simple/SimpleApp';
import VideoApp from '../youtube/VideoApp';
import FlagsApp from '../flags/components/FlagsApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../flags/reducers';
import TranslateApp from '../translate/TranslateApp';

export class ProjectDetail extends Component {
    selectComponent = title => {
        if(title === 'Education') return <MusicApp />
        else if(title === 'Intership') return <PictureApp />
        else if(title === 'Volounteer experience') return <SimpleApp />
        else if(title === 'Tehnical skills') return <VideoApp />
        else if(title === 'Social skills') return (
            <Provider store={createStore(reducers)}>
                <FlagsApp />
            </Provider>
        )
        else if(title === 'Interests') return <TranslateApp />
    }
    render() {
        if(!this.props.resume) return (
            <div className="ui segment" style={{height:"310px"}}>
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Please, select a field!</div>
            </div>
            <p></p>
            </div>
        )
        return (
            <div>
                <div>
                    <h2>Details:</h2>
                    {this.selectComponent(this.props.resume.title)}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        resume: state.activeResume
    }
}

export default connect(mapStateToProps)(ProjectDetail);