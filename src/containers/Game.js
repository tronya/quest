import Game from "../components/Game/Game";
import {connect} from "react-redux";
import {socketSet} from "../redux/actions/sockets";
import {bindActionCreators} from "redux";

const GameContainer = connect(
  (state) => ({sockets: state.sockets}),
  dispatch => {
    return bindActionCreators({socketSet}, dispatch)
  }
)(Game);
export default GameContainer;