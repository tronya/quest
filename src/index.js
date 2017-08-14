import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import VideoList from "./components/videoblocks/video_list";
import SearchComponent from "./components/userstable/users_search";
import VideoPlayer from "./components/videoPlayer/video_player";

const API_KEY = "AIzaSyAKFiroVFCt2vrPGMcM7JxkUj0sR8Z2s48";
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';


var axios = require('axios');


class App extends Component {
    constructor(props) {
        super(props)
        let self = this;
        this.state = {
            videos: []
        }
        var params = {
            part: 'snippet',
            key: API_KEY,
            q: "boobs",
            maxResults: 25,
            type: 'video'
        };

        axios.get(ROOT_URL, {params: params})
            .then(function (response) {
                let videos =  response.data.items;

                self.setState({videos});
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="container">
                <SearchComponent api_key={API_KEY}/>
                <VideoPlayer video={this.state.videos[1]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}
;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
