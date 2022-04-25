import React from "react";
import './App.css';
import NavBar from './../NavBar/NavBar.jsx'
import Home from "./../Home/Home.jsx";
import ModeIrrig from "../ModeIrrig/ModeIrrig";
import ForecastData from "../ForecastData/ForecastData";
import {BrowserRouter, Route, Routes } from 'react-router-dom';


class App extends React.Component{
    render()
    {
        return(
            <div className="app-container">
                <NavBar/>
                <Home/>
                {/* <ModeIrrig/>
                <ForecastData/> */}
                <BrowserRouter>
                    <Routes>                        
                        <Route path='/mode_irrigation' element={ModeIrrig} />
                        <Route path='/forecast_data' element={ForecastData}/>
        
                    </Routes>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;