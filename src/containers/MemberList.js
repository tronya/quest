import MemberList from "../components/MemberList/MemberList";
import {connect} from "react-redux";

const MemberListContainer = connect(
  (state) => ({members: state.questsDetail.members}))(MemberList);
export default MemberListContainer;