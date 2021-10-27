import React from 'react'
import '../sideBar/SideBar.css'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import {HOME, LOGOUT}  from '../../Routes/Path'
import useAuthContext from '../../Hooks/UserAuthContext';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

const SideBar = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const {logout} = useAuthContext();

  const logoutApp = () =>{
    console.log("logout")
    sessionStorage.removeItem('isRedirected', true);
    cookies.remove('data',{ path: '/' });
    cookies.remove('token', { path: '/' });
    logout()
    history.push(LOGOUT)
}

    return (
      <div>
<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark withsidebar">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">Sede electronica</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
          </li>
          <li>
            <Link to="/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/enterprice" className="nav-link text-white">
              Configuracion empresa
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-link text-white">
              Configuracion menu
            </Link>
          </li>
          
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item" onClick={()=> logoutApp()}>Sign out</button></li>
          </ul>
        </div>
      </div>

      <div className="container-fluid">
                    </div>
      </div>
        
    )
}

export default SideBar
