import QuestList from "../components/Quest/QuestList";

import {withRouter} from "react-router";
import {takeQuests} from "../redux/actions/getQuests";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";


const QuestListContainer = withRouter(connect(
  (state) => ({quests: state.quests}),
  dispatch => {
    return bindActionCreators({ takeQuests }, dispatch);
  }
)(QuestList));
export default QuestListContainer;
