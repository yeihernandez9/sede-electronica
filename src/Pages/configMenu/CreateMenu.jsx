import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {newMenu} from '../../Redux/menuDucks'
import Cookies from 'universal-cookie';
import {
    BrowserRouter as Router,
    useHistory,
    Link,
    useParams
} from "react-router-dom";

const CreateMenu = () => {

    const dispatch = useDispatch()
    const cookies = new Cookies();
    const token  = cookies.get('token')
    const history = useHistory();

    const Menu = useSelector(store => store.menuPrincipal.array)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [path, setPath] = useState("")
    const [position, setPosition] = useState(0)
    const [initApp, setInitApp] = useState(false)

    useEffect(() => {
        if(initApp){
            validateMenu()
        }
    }, [initApp])

    const validateMenu = () => {
        setInitApp(false)
            history.push(`/menu`)
    }

    const saveMenu = (e) =>{
        e.preventDefault()
        const body ={
            "name": name,
            "path": path,
            "position": position,
            "description": description
            
        }
        console.log("Token", token)
        dispatch(newMenu(body, token))
        setInitApp(true)
        console.log(body)
    }


    return(
        <div className="contentForm">
            <div class="card">
            <div class="card-header">
                Nuevo Menu
            </div>
            <form onSubmit={saveMenu} novalidate>
            <div class="card-body">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    placeholder="Titulo del Menu"
                    onChange={(e) => setName(e.target.value)}
                                    value={name}/>
                </div>
                <div class="mb-3">
                    <label for="path" class="form-label">Path</label>
                    <input 
                    type="text" 
                    class="form-control" 
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
                    <button type="submit" className="btn btn-primary">Agregar</button>
                    <Link to="/menu" class="btn btn-danger">Cancelar</Link>
                </div>
                
            </div>
            </form>
               
        </div>
    </div>
    )
}

export default CreateMenu
