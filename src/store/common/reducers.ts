import { SHOW_LOADING, HIDE_LOADING, ICommonState, CommonActionTypes } from "./types";

const initialState: ICommonState = {
  loading: false,
};

const reducer = (state = initialState, action: CommonActionTypes) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
