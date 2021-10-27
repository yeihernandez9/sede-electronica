import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Login from '../Pages/login/Login';
import Home from '../Pages/home/Home'
import Transparencia from '../Pages/transparencia/Transparencia';
import Registro from '../Pages/registro/Registro';
import Dashboard from '../Pages/dashboard/Dashboard'
import Logout from '../Pages/logout/Logout';
import CreateMenu from '../Pages/configMenu/CreateMenu';
import CreateEnterprice from '../Pages/configEnterprice/CreateEnterprice';
import ShowMenu from '../Pages/configMenu/ShowMenu';
import ShowItem from '../Pages/configMenu/ShowItem';
import UpdateMenu from '../Pages/configMenu/UpdateMenu';


import {HOME, 
    LOGIN, 
    REGISTER, 
    DASHBOARD,
    LOGOUT,
    MENU,
    CREATEMENU,
    ENTERPRICE,
    SHOWITEMMENU,
    UPDATEMENU,

}  from './Path'

import RoutePrivate from './RoutePrivate';
import RoutePublic from './RoutePublic';

const Routes = () => {
    return (
        <Switch>
               <RoutePublic exact component={Home} path={HOME}/>
                <RoutePublic component={Login} path={LOGIN}/>
                <RoutePublic component={Registro} path={REGISTER}/>
                <RoutePrivate component={Dashboard} path={DASHBOARD} />
                <RoutePrivate component={Logout} path={LOGOUT}/>
                <RoutePrivate component={ShowMenu} path={MENU}/>
                <RoutePrivate component={CreateMenu} path={CREATEMENU}/>
                <RoutePrivate component={ShowItem} path={SHOWITEMMENU}/>
                <RoutePrivate component={UpdateMenu} path={UPDATEMENU}/>
                <RoutePrivate component={CreateEnterprice} path={ENTERPRICE}/>
        </Switch>
    )
}

export default Routes
