import {all, fork, put, takeLatest} from 'redux-saga/effects';

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

    yield true;
    // yield all([
    //     fork(login)
    // ])
};
