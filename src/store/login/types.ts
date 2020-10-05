import {ILoginState} from './ILogin';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

interface LoginAction {
    type: typeof LOGIN,
    payload: ILoginState
}

export type LoginActionTypes = LoginAction | {type: typeof LOGIN_SUCCESS}| {type: typeof LOGIN_ERROR};