import * as types from './types';


export const getList = () => ({
    type: types.GET_LIST_VENDOR
});

export const newVendor = (payload: types.IVendor) => ({
    type: types.NEW_VENDOR,
    payload: payload
})

export const updateVendor = (payload: types.IVendor) => ({
    type: types.UPDATE_VENDOR,
    payload: payload
})

export const deleteVendor = (payload: string) => ({
    type: types.DELETE_VENDOR,
    payload: payload
})

export const selectedVendor = (payload: types.IVendor) => ({
    type: types.SELECTED_VENDOR,
    payload: payload
})

