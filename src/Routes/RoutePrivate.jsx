import React,{useState, useEffect} from 'react'
import { Route, Redirect} from 'react-router-dom'
import {HOME}  from './Path'
import Cookies from 'universal-cookie';
import useAuthContext from '../Hooks/UserAuthContext';
import SideBar from '../Components/sideBar/SideBar';
import NavBar from '../Components/navBar/NavBar';

const RoutePrivate = (props) => {
    const {isAuthenticated} = useAuthContext();

    if(!isAuthenticated){
        return <Redirect to={HOME}/>
    }

    return <div id="page-top">
                <div id="wrapper">
                    <SideBar />
                    <NavBar props={props} />
                    
                </div>
            </div>
}

export default RoutePrivate
