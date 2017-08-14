import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import VideoWrapper from "./components/videoPlayer/video_wrapper";

class App extends Component {
    render() {
        return (
            <VideoWrapper/>
        )
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
