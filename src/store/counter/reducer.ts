const initialState = {
    count: 0,
    data: null,
    loading: false,
    value: 0
}

const countReducer = function(state = initialState, action: any ) {
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count +1};
        case 'DECREMENT':
            return {...state, count: state.count -1};
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'GET_DATA':
            return {...state, data: action.payload, loading: false}
        case 'TEST_PARAM':
            return {...state, value: action.value }
        default:
            return state;
    }
}

export default countReducer;