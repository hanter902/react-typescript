import {all, put, takeLatest} from 'redux-saga/effects';

function* testParam(value: any){
    console.log('testParam in saga');
    console.log(value);
    yield put({type: 'TEST_PARAM', payload: value});
}

export default function* rootSaga(){
    console.log('rootSaga');

    yield all([
        takeLatest('TEST_PARAM', testParam)
    ])
};
