import axios from 'axios'
import {DEV, PRO} from './configEnv'

// constantes
const dataInicial = {
    array:[]
}

// types
const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'

// reducer
export default function usuarioReducer(state = dataInicial, action){
    switch(action.type){
        case SIGN_IN:
            return {...state, array: action.payload}
        case SIGN_UP:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// acciones

export const signIn = (body) => async (dispatch) => {
    try{
        const res = await axios.post(`${PRO}/auth/login`,body)
        .then(
            res =>{
                dispatch({
                    type: SIGN_IN,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: SIGN_IN,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const signUp = (body) => async (dispatch) => {
    try{
        const res = await axios.post(`${PRO}/auth/register`,body)
        .then(
            res =>{
                dispatch({
                    type: SIGN_UP,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: SIGN_UP,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}