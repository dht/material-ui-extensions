import {createStore} from 'redux'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const reduxApp = combineReducers({
    routing: routerReducer,
})

export default createStore(reduxApp);