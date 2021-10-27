import axios from 'axios'

// constantes
const dataInicial = {
    array:[],
    menuItemArray:{
        name: "",
        descrition: "",
        path: "",
        position: 0
    }
}

// types
const MENUPRINCIPAL = 'MENUPRINCIPAL'
const ITEMMENU = 'ITEMMENU'
const NEW_MENU = 'NEW_MENU'
const GET_MENU_ITEM = 'GET_MENU_ITEM'
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
        case GET_MENU_ITEM:
            return {...state, menuItemArray: action.payload}
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
        const res = await axios.get('http://localhost:8080/api/v1/menuPrincipal/getMenu')
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
        const res = await axios.post(`http://localhost:8080/api/v1/menuPrincipal/createMenu`,body, config)
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


export const getMenuItem = (id, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/menuPrincipal/getMenuItem/${id}`, config)
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

export const getMenuItem2 = (id, token) => async (dispatch) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/menuPrincipal/getMenuItem/${id}`, config)
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
        const res = await axios.get(`http://localhost:8080/api/v1/ItemMenuPrincipal/getItem/${id}`, config)
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
        const res = await axios.put(`http://localhost:8080/api/v1/menuPrincipal/updateMenu`,body, config)
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