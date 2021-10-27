import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../menuPrincipal/MenuPrincipal.css'
import {
    BrowserRouter as Router,
    Link,
    NavLink
  } from "react-router-dom";
  import {getMenu} from '../../Redux/menuDucks'

const MenuPrincipal = () => {
    const dispatch = useDispatch()
    const menuPrincipal = useSelector(store => store.menuPrincipal.array)
    console.log("menu", menuPrincipal)

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-fixed-top colorMenuPrincipal">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse content-menu" id="navbarNavAltMarkup">
                    <ul className="nav justify-content-center ">
                        {
                            
                            menuPrincipal.data && menuPrincipal.data.length > 0 ?(
                                menuPrincipal.data.map((item) => (
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link active" to={item.path} activeClassName='is-active'>{item.name}</Link>
                                        <div className="dropdown-content">
                                            {
                                                item.itemMenuPages.map((items)=>(
                                                    <Link to={items.path}>{items.name}</Link>
                                                ))
                                            }
                                        </div>
                                    </li>
                                ))
                            ):(console.log("cargando"))
                        }
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MenuPrincipal
