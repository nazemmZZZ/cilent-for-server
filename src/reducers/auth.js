import { AUTH_ERR, AUTH_LOAD, AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
  Authenticated: "",
  errorMessage: "",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      console.log(action.payload);
      return { ...state, Authenticated: action.payload };
    case AUTH_ERR:
      return { ...state, errorMessage: action.payload };
    case AUTH_LOAD:
      return { ...state, Authenticated: action.payload };
  }

  return state;
};
