import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './Reducers/AuthReducer'
const rootReducer = combineReducers({
    authReducer
})

const middleware = [thunk]

const Store = createStore(rootReducer, (composeWithDevTools(applyMiddleware(...middleware))))

export default Store