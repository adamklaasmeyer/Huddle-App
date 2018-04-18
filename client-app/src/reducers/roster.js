export default (state = {}, action) => {
  switch (action.type) {
    case "ROSTER_LOADED":
      return {
        ...state,
        team: action.payload.team
      };
    case "ADD_PLAYER":
      return {
        ...state,
        playerErrors: action.error ? action.payload.errors : null,
        players: action.error ? null : [...state.players, action.payload.player]
      };
    default:
      return state;
  }
};
