import { all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './types';
import {STATUS_CODE, URL_API} from '../../utils/config-app';
import query from '../../utils/helper-data';

const queryVendors = `  query vendors {
    vendors {
        ID
        name
        address
        status
        createdAt
        updatedAt
    }
}`

function* getList(){
    // const data = yield axios({url: URL_API, method: 'post', data: {query: queryVendors}}).then(response => response);
    const data = yield query(queryVendors);

    console.log(data)

    if(data.status === STATUS_CODE.SUCCESS){
        yield put({type: types.GET_LIST_VENDOR_SUCCESS, payload: data.data.data.vendors})
    }else{
        yield put({type: types.GET_LIST_VENDOR_ERROR, payload: data.data.errors[0].message})
    } 
}

export default function* vendorSaga(){
    console.log('den vendorSaga')
    yield all([
        takeLatest(types.GET_LIST_VENDOR, getList)
    ])
}