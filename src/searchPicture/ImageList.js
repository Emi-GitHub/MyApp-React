import React from 'react';

const ImageList = props => {
    const images = props.images.map( image => {
        return <div className="ui medium bordered rounded image">
            <img src={image.urls.small} alt={image.alt_description} key={image.id}/>
        </div>
    })
    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;