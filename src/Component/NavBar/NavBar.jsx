import React from "react";
import './NavBar.css';
import logo from './../../assets/logo.png';
import {Navbar, Container, Nav,} from 'react-bootstrap'
class NavBar extends React.Component{
    render()
    {
        return(
            <div className="navbar-container">
                <div className="nav-left">
                    <img
                        className="logo"
                        src={logo}
                        alt=""
                        />
                </div>
                <div >
                <Navbar className="justify-content-center" className="nav-right" bg="light" variant="light" expand="lg" fixed="top">
                    <Container className="navs">
                        <Navbar.Brand href="#home"><div className="nav-text"> Smart Irrigation</div></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center"  className="me-auto">
                            <Nav.Link href="/forecast_data"><div className="nav-text">Forecast Data </div> </Nav.Link>
                            <Nav.Link href="/mode_irrigation"><div className="nav-text">Irrigate Crops</div> </Nav.Link>
                        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
            </div>
        );
    };
};

export default NavBar;
