import QuestDetail from "../components/Quest/QuestDetail";
import {takeOneQuest} from "../redux/actions/getSingleQuest"

import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {questSubscription} from "../redux/actions/questSubscribe";

const QuestDetailContainer = withRouter(connect(
  (state) => ({questDetail: state.questsDetail}),
  dispatch => {
    return bindActionCreators({takeOneQuest, questSubscription}, dispatch);
  }
)(QuestDetail));

export default QuestDetailContainer;