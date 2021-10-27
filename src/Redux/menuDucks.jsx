import axios from 'axios'
import {DEV, PRO} from './configEnv'

// constantes
const dataInicial = {
    array:[],
    menuItemArray:{
        name: "",
        descrition: "",
        path: "",
        position: 0
    },
    menuItemArray3:{
        name: "",
        descrition: "",
        path: "",
        position: 0,
        url: "",
        targe: ""
    }
}

// types
const MENUPRINCIPAL = 'MENUPRINCIPAL'
const ITEMMENU = 'ITEMMENU'
const NEW_MENU = 'NEW_MENU'
const NEW_MENU_ITEM = 'NEW_MENU_ITEM'
const GET_MENU_ITEM = 'GET_MENU_ITEM'
const GET_MENU_ITEM3 = 'GET_MENU_ITEM3'
const GET_ITEM = 'GET_ITEM'
const GET_ITEM_MENU = "GET_ITEM_MENU"

// reducer
export default function menuReducer(state = dataInicial, action){
    switch(action.type){
        case MENUPRINCIPAL:
            return {...state, array: action.payload}
        case ITEMMENU:
            return {...state, array: action.payload}
        case NEW_MENU:
            return {...state, array: action.payload}
        case NEW_MENU_ITEM:
            return {...state, array: action.payload}
        case GET_MENU_ITEM:
            return {...state, menuItemArray: action.payload}
        case GET_MENU_ITEM3:
            return {...state, menuItemArray3: action.payload}
        case GET_ITEM:
            return {...state, array: action.payload}
        case GET_ITEM_MENU:
                return {...state, array: action.payload}
        default:
            return state
    }
}

export const getMenu = () => async (dispatch) => {
    try{
        const res = await axios.get(`${PRO}/api/v1/menuPrincipal/getMenu`)
        .then(
            res =>{
                dispatch({
                    type: MENUPRINCIPAL,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: MENUPRINCIPAL,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const newMenu = (body, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.post(`${PRO}/api/v1/menuPrincipal/createMenu`,body, config)
        .then(
            res =>{
                dispatch({
                    type: NEW_MENU,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: NEW_MENU,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const newMenuItem = (body, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.post(`${PRO}/api/v1/ItemMenuPrincipal/ItemCreateMenu`,body, config)
        .then(
            res =>{
                dispatch({
                    type: NEW_MENU_ITEM,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: NEW_MENU_ITEM,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}


export const getMenuItem = (id, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.get(`${PRO}/api/v1/menuPrincipal/getMenuItem/${id}`, config)
        .then(
            res => {
                dispatch({
                    type: GET_MENU_ITEM,
                    payload: res.data.data
                })
            }
        ).catch(err => {
            dispatch({
                type: GET_MENU_ITEM,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const getMenuItem3 = (id, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.get(`${PRO}/api/v1/ItemMenuPrincipal/getItem/${id}`, config)
        .then(
            res => {
                dispatch({
                    type: GET_MENU_ITEM3,
                    payload: res.data.data
                })
            }
        ).catch(err => {
            dispatch({
                type: GET_MENU_ITEM3,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const getMenuItem2 = (id, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.get(`${PRO}/api/v1/menuPrincipal/getMenuItem/${id}`, config)
        .then(
            res => {
                dispatch({
                    type: GET_ITEM_MENU,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: GET_MENU_ITEM,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const getItem = (id, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.get(`${PRO}/api/v1/ItemMenuPrincipal/getItem/${id}`, config)
        .then(
            res =>{
                dispatch({
                    type: GET_ITEM,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: GET_ITEM,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}

export const updateMenu = (body, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.put(`${PRO}/api/v1/menuPrincipal/updateMenu`,body, config)
        .then(
            res =>{
                dispatch({
                    type: GET_ITEM,
                    payload: res.data
                })
            }
        ).catch(err => {
            dispatch({
                type: GET_ITEM,
                payload: err.response.data
            })
        })
        
    }catch(error){
    }
}