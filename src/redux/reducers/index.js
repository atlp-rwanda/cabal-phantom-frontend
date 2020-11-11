import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import getUsersReducer from './getUserReducer'
import registerUserReducer from './registerUserReducer'
import logoutReducer from './logoutReducer'

const allReducers = combineReducers({
    login: loginReducer,
    getUsers: getUsersReducer,
    registerUser: registerUserReducer,
    logout: logoutReducer
})

export default allReducers;
