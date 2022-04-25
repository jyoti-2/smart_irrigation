import React from "react";
import './ForecastData.css';
import humidity from './../../assets/humidity.png';
import moisture from './../../assets/moisture.png';
import temperature from './../../assets/temperature.png';


class ForecastData extends React.Component{
    render(){
    return(
        <div id = 'forecast_data' className="foreacast-data-container">
            
        <h1>Real Time Monitoring And Data Visualization</h1>

        <div className="data-img">
        <img
            className="hum"
            src={humidity}
            alt=""
        />
        <img
            className="mos"
            src={temperature}
            alt=""
        />
        <img
            className="tem"
            src={moisture}
            alt=""
        />
        </div>
        </div>
        );
    };
};


export default ForecastData;
