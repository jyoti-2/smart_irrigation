import React from "react";
import './NavBar.css';
import logo from './../../assets/logo.png';
class NavBar extends React.Component{
    render()
    {
        return(
            <div className="navbar-container">
                <div className="nav-right">
                    
                </div>
                <div className="nav-left">
                    <img
                        className="logo"
                        src={logo}
                        alt=""
                        />
                </div>
            </div>
        );
    };
};

export default NavBar;
