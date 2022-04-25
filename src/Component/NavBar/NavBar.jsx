import React from "react";
import './NavBar.css';
import logo from './../../assets/logo.png';
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component{
    render()
    {
        return(
            <div className="navbar-container">
        
                    <img
                        className="logo"
                        src={logo}
                        alt=""
                    />

                <div className="nav-right">
                <Navbar variant="light" >
                     <Nav className="me-auto">
                        <Navbar.Brand href="/" ><div className="nav-text"> Smart Irrigation</div></Navbar.Brand>
                        <Nav.Link href="/forecast_data"><div className="nav-text">Forecast Data </div> </Nav.Link>
                        <Nav.Link href="/mode_irrigation"><div className="nav-text">Irrigate Crops</div> </Nav.Link>
                        </Nav>
</Navbar>
</div>
            </div>
        );
    };
};

export default NavBar;
