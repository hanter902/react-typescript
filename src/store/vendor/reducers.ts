import * as types from './types';


const initialState = {
    data: [
        {
            "id": "AmbientModel",
            "name": "AmbientModel",
            "status": "ACTIVE",
            "createdAt": "Wed Jun 17 2020 02:56:52 GMT+0000 (UTC)"
        },
        {
            "id": "test.01",
            "name": "test.InfinityWar",
            "status": "INACTIVE",
            "createdAt": "Mon Sep 07 2020 08:46:16 GMT+0000 (UTC)",
        },
        {
            "id": "Welstory",
            "name": "Welstory",
            "status": "ACTIVE",
            "createdAt": "Wed Oct 03 2018 02:11:35 GMT+0000 (UTC)",
        }
    ],
    selectedVendor: null
}

const reducer = (state = initialState, action: types.VendorActionTypes) => {
    switch(action.type){
        case types.GET_LIST_VENDOR:
            return {...state}
        case types.NEW_VENDOR:
            return {...state}
        case types.UPDATE_VENDOR:
            return {...state}
        case types.DELETE_VENDOR:
            return {...state}
        case types.SELECTED_VENDOR:
            return {...state, selectedVendor: action.payload}
        default:
            return state;
    }
}

export default reducer;