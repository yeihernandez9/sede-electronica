import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import {getMenuItem, updateMenu} from '../../Redux/menuDucks'
import Cookies from 'universal-cookie';
import {
    BrowserRouter as Router,
    useHistory,
    Link,
    useParams
} from "react-router-dom";

const UpdateMenu = props => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const cookies = new Cookies();
    const token  = cookies.get('token')
    const history = useHistory();
    const menuPrincipal = useSelector(store => store.menuPrincipal.menuItemArray)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [path, setPath] = useState("")
    const [position, setPosition] = useState(0)
    const [initApp, setInitApp] = useState(false)

    console.log("menu itemss", menuPrincipal)

    useEffect(() => {
        if(initApp){
            validateMenu()
        }
    }, [initApp])

    useEffect(() => {
        setName(menuPrincipal.name)
        setPath(menuPrincipal.path)
        setPosition(menuPrincipal.position)
        setDescription(menuPrincipal.description)
    }, [menuPrincipal])

    useEffect(() => {
                dispatch(getMenuItem(id, token))
                    
    },[])

    const validateMenu = () => {
        setInitApp(false)
            history.push(`/menu`)
    }

    const saveMenu = (e) =>{
        e.preventDefault()
        const body ={
            "id": id,
            "name": name,
            "path": path,
            "position": position,
            "description": description
            
        }
        console.log("Token", token)
        dispatch(updateMenu(body, token))
        setInitApp(true)
        console.log(body)
    }


    return(
        <div className="contentForm">
            <div className="card">
            <div className="card-header">
                Acutalizar Menu
            </div>
            <form onSubmit={saveMenu}>
            <div className="card-body">
                <div className="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Titulo del Menu"
                    onChange={(e) => setName(e.target.value)}
                                    value={name}/>
                </div>
                <div class="mb-3">
                    <label for="path" class="form-label">Path</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="path" 
                    placeholder="/ejemplo/"
                    onChange={(e) => setPath(e.target.value)}
                                    value={path}/>
                </div>
                <div class="mb-3">
                    <label for="position" class="form-label">Posicion</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="position"
                    onChange={(e) => setPosition(e.target.value)}
                                    value={position}/>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Descripción</label>
                    <textarea className="form-control" 
                    id="description" 
                    rows="3s"
                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}></textarea>
                </div>
               
                <div className="contentGroupBtn">
                    <button type="submit" className="btn btn-primary">Editar</button>
                    <Link to="/menu" class="btn btn-danger">Cancelar</Link>
                </div>
                
            </div>
            </form>
               
        </div>
    </div>
    )
}

UpdateMenu.propTypes = {

}

export default UpdateMenu
