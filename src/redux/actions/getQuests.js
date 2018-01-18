import {tokenFromStorage} from "../../components/Utils/appToken";

export const TAKE_QUESTS = "TAKE_QUESTS";


export const takeQuests = () => dispatch => {
  let serverUrl = "http://188.166.18.216/api/v1/";
  let token = tokenFromStorage();
  if (token) {
    return fetch(`${serverUrl}quests/`, {
      method: "GET",
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then((R) => R.json())
      .then((a) => {
        dispatch({
          type: TAKE_QUESTS,
          payload: a
        })
      });
  }
};

