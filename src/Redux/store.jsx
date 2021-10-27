import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import authReducer from './authDocks'
import menuReducer from './menuDucks'

const rootReducer = combineReducers({
    auths: authReducer,
    menuPrincipal: menuReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ))
    return store;
}