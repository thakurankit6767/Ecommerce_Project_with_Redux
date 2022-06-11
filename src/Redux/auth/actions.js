import { Axios } from "axios";
export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signInRequest = () => {
  return {
    type: SIGNIN_REQUEST,
  };
};
const signInSuccess = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};

const signInFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

const signIn = (payload) => (dispatch) => {
  dispatch(signInRequest());
  Axios.post("/api/login", payload, { baseURL: "https://reqres.in" })
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
};

export { signIn };
