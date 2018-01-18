import RoutesInfo from "../components/RoutesInfo/RoutesInfo";
import {connect} from "react-redux";

const RoutesInfoContainer = connect(
  (state) => ({
    routeInfo: state.routeInfo,
    markers: state.questsDetail.markers
  })
)(RoutesInfo);

export default RoutesInfoContainer;