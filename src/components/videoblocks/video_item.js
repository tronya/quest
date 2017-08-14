/**
 * Created by y.troniak on 8/10/17.
 */


import React from 'react';

const VideoElement = ({video}) => {
    const imageUrl = video.snippet.thumbnails.high.url;
    return (
        <div className="video-element">
            <div className="video-body">
                <img alt={video.snippet.title} src={imageUrl}/>
            </div>
            <div className="video-information">
                <p>{video.snippet.title}</p>
                <small>{video.snippet.description}</small>
            </div>
        </div>
    )
}

export default VideoElement;