import React,{useState, useEffect} from 'react'
import {DASHBOARD, HOME}  from './Path'
import { Route, Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';
import useAuthContext from '../Hooks/UserAuthContext';
import MenuPrincipal from '../Components/menuPrincipal/MenuPrincipal';
import TopBar from '../Components/topBar/TopBar';

const RoutePublic = (props) => {
    const {isAuthenticated} = useAuthContext();

    if(isAuthenticated){
        return <Redirect to={DASHBOARD}/>
    }

    return <div>
            {/* <BannerHome /> */}
            <TopBar />
            <MenuPrincipal />
            <Route {...props} />
        </div>
}

export default RoutePublic
