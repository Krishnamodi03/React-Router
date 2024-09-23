export const registerUser = (user) => {
  return {
    type: "REGISTER_USER",
    payload: user,
  };
};

export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};
