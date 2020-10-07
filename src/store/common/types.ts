export const SHOW_LOADING = 'GLOBAL_SHOW_LOADING';
export const HIDE_LOADING = 'GLOBAL_HIDE_LOADING';


// interface ShowLoadingAction {
//     type: typeof SHOW_LOADING
// }

// interface HideLoadingAction {
//     type: typeof HIDE_LOADING
// }

export interface ICommonState {
    loading: boolean
};

export type CommonActionTypes = {type: typeof SHOW_LOADING} | {type: typeof HIDE_LOADING};

