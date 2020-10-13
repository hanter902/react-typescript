import * as types from './types';

const vendors: types.IVendor[] = [];

const initialState = {
    vendors,
    selectedVendor: null,
    error: null
}

const reducer = (state = initialState, action: types.VendorActionTypes) => {
    switch(action.type){
        case types.GET_LIST_VENDOR:
            return {...state}
        case types.GET_LIST_VENDOR_SUCCESS:
            return {...state, vendors: action.payload }
        case types.GET_LIST_VENDOR_ERROR:
            return {...state, error: action.payload }
        case types.NEW_VENDOR:
            return {...state, vendors: [...state.vendors, action.payload]}
        case types.UPDATE_VENDOR:
            return {...state, vendors: state.vendors.map(vendor => vendor.ID === action.payload.ID? action.payload : vendor), selectedVendor: null}
        case types.DELETE_VENDOR:
            return {...state}
        case types.SELECTED_VENDOR:
            return {...state, selectedVendor: action.payload}
        default:
            return state;
    }
}

export default reducer;