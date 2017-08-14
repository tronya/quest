import React from "react";

import _ from "lodash";

import VideoList from "../videoblocks/video_list";
import SearchComponent from "../userstable/users_search";
import VideoPlayer from "../videoPlayer/video_player";

const API_KEY = "AIzaSyAKFiroVFCt2vrPGMcM7JxkUj0sR8Z2s48";
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';


var axios = require('axios');

class VideoWrapper extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('eminen')
    }

    videoSearch(verd) {
        let self = this;
        var params = {
            part: 'snippet',
            key: API_KEY,
            q: verd,
            maxResults: 30,
            type: 'video'
        };


        axios.get('https://www.instagram.com/oauth/authorize/?client_id=e1746dbf2f4e4dbdaa8a1a22f6ad8ed8&redirect_uri=https://tronya.github.io/quest/&response_type=code')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
        axios.get(ROOT_URL, {params: params})
            .then(function (response) {
                let videos = response.data.items;
                self.setState({videos, selectedVideo: videos[0]});
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        const onSearchHendler = _.debounce(verd => {
            this.videoSearch(verd)
        }, 500);
        return (
            <div className="container">
                <SearchComponent api_key={API_KEY} onSearchHendler={onSearchHendler}/>
                <VideoPlayer video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        )
    }
}

export default VideoWrapper;