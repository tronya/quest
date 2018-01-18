export const SOCKET_SET = "SOCKET_SET";

export const socketSet = (socket) => dispatch => {
  dispatch({
    type: SOCKET_SET,
    payload: socket
  })
};
