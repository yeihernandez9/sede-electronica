import React from 'react'
import logoGovCom from '../../assets/img/logoGovCom.png'
import '../topBar/TopBar.css'

const TopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark colorTopBar navbar-fixed-top">
                <div className="container-fluid">
                <a class="navbar-brand" href="https://www.gov.co/home/">
                        <img src={logoGovCom} alt="" width="110" height="23" class="logoTopBar" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default TopBar
