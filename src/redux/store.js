import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import allReducers from './reducers/index'

const middleware = applyMiddleware(thunk, promise)
const store = createStore(allReducers, {}, composeWithDevTools(middleware)) 

export default store
