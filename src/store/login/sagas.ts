import {takeLatest, put, all, fork, takeEvery} from 'redux-saga/effects';
import {showLoading, hideLoading} from '../actions/common';
// import {} from '../actions/login';
import { LOGIN } from '../types/login'
import {ILoginState} from '../types/login';
// import Query from '../../utils/helper-data';

function* login(payload?: ILoginState){
    // yield put(showLoading());
    yield true;
    // const res = yield Query()
    //if login success
    // error login
    console.log('login ok', payload);

    // yield put(hideLoading());

};


export default function* rootLogin(){
    console.log('rootSaga');

    yield all([
        takeLatest(LOGIN, login)
    ])
};


