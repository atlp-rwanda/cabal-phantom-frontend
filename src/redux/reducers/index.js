import { combineReducers } from 'redux'
import testReducer from './testReducer'

const allReducers = combineReducers({
    testRedux: testReducer
})

export default allReducers
