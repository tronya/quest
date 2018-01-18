export const GET_ROUTES = "GET_ROUTES";
export const REMOVE_ROUTES = "REMOVE_ROUTES";

export const getRoutes = (routes) => dispatch => {
  dispatch({
    type: GET_ROUTES,
    payload: routes
  })
};

export const removeRoutes = () => dispatch => {
  dispatch({
    type: REMOVE_ROUTES,
    payload: {}
  })
};