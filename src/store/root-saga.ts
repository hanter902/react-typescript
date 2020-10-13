import {all, fork, put, takeLatest} from 'redux-saga/effects';
import vendorSaga from './vendor/sagas';
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

    // yield true;
    // yield all([
    //     fork(login)
    // ])
    yield all([
        fork(vendorSaga)
    ])
};
