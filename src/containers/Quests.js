import QuestList from "../components/Quest/QuestList";

import {withRouter} from "react-router";
import {connect} from "react-redux";


const QuestListContainer = withRouter(connect(() => ({}), () => ({}))(QuestList));
export default QuestListContainer;
