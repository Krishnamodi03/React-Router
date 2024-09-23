const initialState = {
  user: null,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, user: action.payload };
    case "LOGIN_USER":
      if (
        state.user &&
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        return { ...state, isLoggedIn: true };
      }
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
export default Reducer;
