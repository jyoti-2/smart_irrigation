import React from "react";
import './App.css';
import NavBar from './../NavBar/NavBar.jsx'

import Home from "./../Home/Home.jsx";



class App extends React.Component{
    render()
    {
        return(
            <div className="app-container">
                <NavBar/>
                <Home/>
            </div>
        );
    };
};

export default App;