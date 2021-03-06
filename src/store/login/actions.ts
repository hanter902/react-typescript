import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from "./types";
import {ILoginState} from './ILogin';

export const login = (payload: ILoginState) => ({
  type: LOGIN,
  payload: payload,
});

export const loginError = (error: string) => ({
    type: LOGIN_ERROR,
    payload: error
});

export const loginSuccess = (data: object) => ({
    type: LOGIN_SUCCESS,
    payload: data
})
