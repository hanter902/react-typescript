import {all, fork, put, takeLatest} from 'redux-saga/effects';
import login from './sagas/login';
import { LOGIN } from './types/login'
// function* testParam(payload: any){
//     console.log('testParam in saga');
//     console.log(payload);
//     // yield put({type: 'TEST_PARAM', payload: payload});
// }

// function* login(payload: any){
//     console.log('login saga', payload)
// }

export default function* rootSaga(){
    console.log('rootSaga');

    yield all([
        fork(login)
    ])
};
