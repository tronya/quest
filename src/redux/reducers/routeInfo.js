import {GET_ROUTES, REMOVE_ROUTES} from "../actions/getRoutes";

const initialState = null;

const routeInfo = (state = initialState, action) => {

  switch (action.type) {

    case GET_ROUTES:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_ROUTES:
      return {};//setUp empty Object
    default:
      return state;
  }
};
export default routeInfo;