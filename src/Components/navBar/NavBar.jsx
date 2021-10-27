import React from 'react'
import {
    Route
  } from "react-router-dom";
import '../navBar/NavBar.css'

const NavBar = (props) => {
    return (
            <div className="container">
                <Route {...props.props} />
            </div>
    )
}

export default NavBar
