import React from "react";
import './Home.css';
import Typewriter from 'typewriter-effect';
import smart from './../../assets/smart.png';

class Home extends React.Component{
    render()
    {
        return(
            <div id= "home" className="home-container">
                <div data-aos="fade-down" className="home-left">
                    <div className="home-header">Irrigate smartly based on ...</div>
                    <div className="typewriter-container">
                        <Typewriter
                        options={{
                            strings: ['Water requirements', 'Weather condition', 'Weather forecast data'],
                            autoStart: true,
                            loop: true
                        }}
                        />
                    </div>
                </div>
                <div className="home-right">
                    <div data-aos="fade-right" className="sub-header">
                        <p> Managing water use by controlling irrigation in response to soil moisture,temperature and humidity changes to meet crop water demands.</p>

                        <p>
                        Machine learning-based smart system to predict by forecasting the weather and automating the irrigation requirements of a field.
                        </p>
                    </div>
                    <img
                        data-aos="fade-right"
                        className="smart-img" src={smart} alt=""
                        />
                </div>
            </div>
        );
    };
};

export default Home;
