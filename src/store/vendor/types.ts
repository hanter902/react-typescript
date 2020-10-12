
export const GET_LIST_VENDOR = 'GET_LIST_VENDOR';
export const GET_LIST_VENDOR_SUCCESS = 'GET_LIST_VENDOR_SUCCESS';
export const GET_LIST_VENDOR_ERROR = 'GET_LIST_VENDOR_ERROR';

export const NEW_VENDOR = 'NEW_VENDOR';
export const NEW_VENDOR_SUCCESS = 'NEW_VENDOR';
export const NEW_VENDOR_ERROR = 'NEW_VENDOR';

export const UPDATE_VENDOR = 'UPDATE_VENDOR';
export const UPDATE_VENDOR_SUCCESS = 'UPDATE_VENDOR_SUCCESS';
export const UPDATE_VENDOR_ERROR = 'UPDATE_VENDOR_ERROR';

export const DELETE_VENDOR = 'DELETE_VENDOR';
export const DELETE_VENDOR_SUCCESS = 'DELETE_VENDOR_SUCCESS';
export const DELETE_VENDOR_ERROR = 'DELETE_VENDOR_ERROR';

export const SELECTED_VENDOR = 'SELECTED_VENDOR';


export interface IVendor {
    id: string,
    name: string,
    address: string,
    status: string,
    createdAt?: string,
    updatedAt?: string
}

export type VendorActionTypes = { type: typeof GET_LIST_VENDOR } 
                              | { type: typeof NEW_VENDOR, payload: IVendor } 
                              | { type: typeof UPDATE_VENDOR, payload: IVendor } 
                              | { type: typeof DELETE_VENDOR, payload: string }
                              | { type: typeof SELECTED_VENDOR, payload: IVendor };


