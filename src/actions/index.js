import axios from "axios"
import { API } from "../api"
import { AUTH_ERR, AUTH_LOAD, AUTH_USER } from "./types"

export const signup = (fields,callback) => async dispatch => {
    try{
        const response = await axios.post(`${API}/signup`, fields);
        console.log(response)
    dispatch({
        type: AUTH_USER,
        payload: response.data
    })
    localStorage.setItem("tocken", response.data);
    callback()
    } catch (e) {
        console.log(e);
        dispatch({
          type: AUTH_ERR,
          payload: JSON.parse(e.request.response).error,
        });
    }
}
export const signin = (fields, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/sigin`, fields);
    console.log(response);
    dispatch({
      type: AUTH_USER,
      payload: response.data,
    });
    localStorage.setItem("tocken", response.data);
    callback();
  } catch (e) {
    console.log(e);
    dispatch({
      type: AUTH_ERR,
      payload: JSON.parse(e.request.response).error,
    });
  }
};
export const signout = () => {
    localStorage.removeItem("tocken");
    return {
        type: AUTH_USER,
        payload:''
    }
}
export const loaduser = () => {
    console.log("hiu")
    if (localStorage.getItem("tocken")){
      return {
        type: AUTH_LOAD,
        payload: localStorage.getItem("tocken"),
        };
    }
    return null;
}