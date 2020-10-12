import { combineReducers } from 'redux';
import vendorReducer from './vendor/reducers';

const rootReducer = combineReducers({
    vendors: vendorReducer
});

export default rootReducer;