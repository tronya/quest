import {TAKE_DETAIL_QUEST} from "../actions/getSingleQuest"
import {QUEST_SUBSCRIBE} from "../actions/questSubscribe";

const initialState = null;

const questsDetail = (state = initialState, action) => {
  switch (action.type) {

    case TAKE_DETAIL_QUEST:
      return {
        ...state,
        ...action.payload
      };

    case QUEST_SUBSCRIBE:
      let newState = Object.assign({...state}, state,
        {is_assigned: action.payload}
      );
      return {
        ...newState
      };

    default:
      return state;
  }
};
export default questsDetail;