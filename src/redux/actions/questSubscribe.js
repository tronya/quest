import {tokenFromStorage} from "../../components/Utils/appToken";

let serverUrl = "http://188.166.18.216/api/v1/";

export const QUEST_SUBSCRIBE = "QUEST_SUBSCRIBE";

export const questSubscription = (id, is_assigned) => dispatch => {
  let token = tokenFromStorage();
  let decision = is_assigned ? "leave" : "join";
  let method = is_assigned ? "DELETE" : "POST";
  if (token) {
    fetch(`${serverUrl}quests/${id}/${decision}/`, {
      method,
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then(resp => {
        if (resp.status === 200) {
          dispatch({
            type: QUEST_SUBSCRIBE,
            payload: !is_assigned
          })
        }
      });
  }

};
