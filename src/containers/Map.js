import Map from "../components/Map/Map";
import {connect} from "react-redux";
import {getRoutes, removeRoutes} from "../redux/actions/getRoutes";
import {bindActionCreators} from "redux";


const MapContainer = connect((state) => ({markers: state.questsDetail.markers}), dispatch => {
    return bindActionCreators({getRoutes,removeRoutes}, dispatch)
  }
)(Map);
export default MapContainer;