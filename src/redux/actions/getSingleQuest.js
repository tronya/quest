import {tokenFromStorage} from "../../components/Utils/appToken";

export const TAKE_DETAIL_QUEST = "TAKE_DETAIL_QUEST";


export const takeOneQuest = (id) => dispatch => {
  let serverUrl = "http://188.166.18.216/api/v1/";
  if (id) {
    let token = tokenFromStorage();
    if (token) {
      fetch(`${serverUrl}quests/${id}`, {
        method: "GET",
        headers: {
          'Authorization': `Token ${token}`
        }
      })
        .then((R) => R.json())
        .then(resp => {
          dispatch ({
            type: TAKE_DETAIL_QUEST,
            payload: resp
          })
        });
    }
  }
};

