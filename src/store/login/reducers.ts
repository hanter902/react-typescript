import {LoginActionTypes, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from './types';
import {ILoginState} from './ILogin';

const initialState : ILoginState = {
    username: '',
    password: '',
}

const reducer = (state = initialState, action: LoginActionTypes) =>{
    switch(action.type) {
        case LOGIN:
            return {...state, payload: action.payload}
        case LOGIN_SUCCESS:
            return {...state}
        case LOGIN_ERROR:
            return {...state}
        default:
            return state;
    }
}

export default reducer;