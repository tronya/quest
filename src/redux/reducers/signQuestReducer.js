const initialState = {
  jskajfasjdf:"asfdasfd"
};


export default function quests(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    default:
      return state;
  }
}