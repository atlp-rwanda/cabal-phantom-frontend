import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer'

const allReducers = combineReducers({
    login: loginReducer,
    logout: logoutReducer
});

export default allReducers;
