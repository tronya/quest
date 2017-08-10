import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import PhotoContainer from "./components/photosblock/photo_container";
import Userstable from "./components/userstable/users_table";

const App = () => {
    return (
        <div className="container">
            <Userstable/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
