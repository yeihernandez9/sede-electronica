import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import Cookies from 'universal-cookie';
import {newMenuItem} from '../../Redux/menuDucks'
import {
    BrowserRouter as Router,
    useHistory,
    Link,
    useParams
} from "react-router-dom";

const CreateMenuItem = props => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const cookies = new Cookies();
    const token  = cookies.get('token')
    const history = useHistory();

    const Menu = useSelector(store => store.menuPrincipal.array)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [path, setPath] = useState("")
    const [position, setPosition] = useState(0)
    const [targe, setTarge] = useState("")
    const [url, setUrl] = useState("")
    const [initApp, setInitApp] = useState(false)

    useEffect(() => {
        if(initApp){
            validateMenu()
        }
    }, [initApp])

    const validateMenu = () => {
        setInitApp(false)
            history.push(`/ShowItem/${id}`)
    }

    const saveMenu = (e) =>{
        e.preventDefault()
        const body ={ 
            "id": id,
            "name": name,
            "path": path,
            "position": position,
            "description": description,
            "targe": targe,
            "url": url
            
        }
        console.log("Token", token)
        dispatch(newMenuItem(body, token))
        setInitApp(true)
        console.log(body)
    }


    return(
        <div className="contentForm">
            <div class="card">
            <div class="card-header">
                Nuevo menu item
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
                    <label for="targe" class="form-label">Targe</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="targe"
                    placeholder="#"
                    onChange={(e) => setTarge(e.target.value)}
                                    value={targe}/>
                </div>
                <div class="mb-3">
                    <label for="url" class="form-label">Url</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="url"
                    placeholder="http://ejemplo.com"
                    onChange={(e) => setUrl(e.target.value)}
                                    value={url}/>
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
                    <Link to={`/ShowItem/${id}`} class="btn btn-danger">Cancelar</Link>
                </div>
                
            </div>
            </form>
               
        </div>
    </div>
    )
}

CreateMenuItem.propTypes = {

}

export default CreateMenuItem
