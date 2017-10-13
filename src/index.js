import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import {facebook} from "./components/Utils/facebook"
import {appToken} from "./components/Utils/appToken"
import Main from "./components/Main/Main";
import LoadingView from "./components/LoadingView/loadingView";
import {Provider} from 'react-redux'
import configureStore from "./redux/store"

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
      return <LoadingView/>
    } else {
      return (
        <Main/>
      )
    }
  }
};
// const store = createStore(
//   () => {
//   },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
