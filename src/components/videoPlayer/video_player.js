/**
 * Created by y.troniak on 8/11/17.
 */
import React from 'react';

const VideoPlayer = ({video}) => {
    if(!video){
        return <div>Loading video file....</div>
    }
    const videoId = video.id.videoId;
    const embedVideo = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-player">
            <div className="video-wrapper">
                <iframe className="video-iframe" src={embedVideo} ></iframe>
            </div>
            <div className="video-description">
                <h3>{video.s}</h3>
            </div>
        </div>
    )
}
export default VideoPlayer;