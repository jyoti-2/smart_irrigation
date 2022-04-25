import React from "react";
import './App.css';
import NavBar from './../NavBar/NavBar.jsx';
import Home from "./../Home/Home.jsx";
import ModeIrrig from "../ModeIrrig/ModeIrrig";
import ForecastData from "../ForecastData/ForecastData";


class App extends React.Component{
    render()
    {
        return(
            <div className="app-container">
                <NavBar/>
                <Home/>
                <ModeIrrig/>
                <ForecastData/>
            </div>
        );
    };
};

export default App;