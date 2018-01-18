import {TAKE_QUESTS} from "../actions/getQuests";

const initialState = null;

const quests = (state = initialState, action) => {

  switch (action.type) {

    case TAKE_QUESTS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default quests;