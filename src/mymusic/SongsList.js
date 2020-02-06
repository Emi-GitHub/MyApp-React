import React from 'react';

function SongsList (props){
    const songs = props.songs.map((song) => {
        return <div key={song.id} className="ui segment" className="main">
            <img src={song.album.cover_medium} alt={song.album.title} className="ui medium rounded image" className="album"/>
            <h2>{song.artist.name}</h2>
            <p>{song.album.title}</p>
            
            <br/>
                <a href={song.preview} className="ui button">PLAY</a>
            <br/>
       </div>
    });
    return (
        <div>
            {songs}
        </div>
    )
}

export default SongsList

