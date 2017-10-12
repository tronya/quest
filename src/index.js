import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import {facebook} from "./components/Utils/facebook"
import {appToken} from "./components/Utils/appToken"
import Main from "./components/Main/Main";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    facebook.init()
      .then(fbToken => appToken(fbToken))
      .then(token => this.setState({loading: false}));
  }

  render() {
    if (this.state.loading) {
      return <div className="Loading">Loading...</div>;
    } else {
      return (
        <Main/>
      )
    }
  }
};

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
