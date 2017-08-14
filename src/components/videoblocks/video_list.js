/**
 * Created by y.troniak on 8/10/17.
 */


import React, {Component} from 'react';

import VideoElement from "./video_item";

class VideoList extends Component {

    render() {
        const videoItems = this.props.videos.map((video) => {
            return <VideoElement video={video} key={video.etag}/>
        });
        return (
            <section>
                <div className="section-heading">
                    <h2>Videos</h2>
                </div>
                <div className="video-block block-offset">
                    {videoItems}
                </div>
            </section>
        )
    }
}

export default VideoList;