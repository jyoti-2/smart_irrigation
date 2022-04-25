import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './Component/App/App';
import ModeIrrig from "./Component/ModeIrrig/ModeIrrig";
import ForecastData from "./Component/ForecastData/ForecastData";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Routes>
                        <Route path='/' element ={<App />} />                  
                        <Route path='/mode_irrigation' element={<ModeIrrig />} />
                        <Route path='/forecast_data' element={<ForecastData />}/>
      </Routes>
  </BrowserRouter>
);

reportWebVitals();