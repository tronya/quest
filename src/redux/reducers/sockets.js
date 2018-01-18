import {SOCKET_SET} from "../actions/sockets"

const initialState = null;

const sockets = (state = initialState, action) => {

  switch (action.type) {
    case SOCKET_SET:
      if (state) {
        if (state.points.some(elements => elements.username === action.payload.username)) {
          return Object.assign({}, state, {
            points: state.points.map((userSocket) => {
              if (userSocket.username === action.payload.username) {
                return Object.assign({}, userSocket, {
                  ...action.payload
                })
              }
              return userSocket
            })
          });
        } else {
          return Object.assign({}, state, {
            points: [
              ...state.points,
              action.payload
            ]
          })
        }


      } else {
        return Object.assign({}, state, {
          points: [
            action.payload
          ]
        });
      }

    default:
      return state;
  }
};
export default sockets;