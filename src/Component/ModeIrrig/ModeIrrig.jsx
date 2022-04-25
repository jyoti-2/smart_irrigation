import React from "react";
import './ModeIrrig.css';
import {Button} from 'react-bootstrap';


class ModeIrrig extends React.Component{
    constructor(props) {
        super(props);
           
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
   
      handleChange(event) {
      this.setState({value: event.target.value});
      }
   
      handleSubmit(event) {
        event.preventDefault();
    }

   
    render(){
    
    return(
        <div id='mode_irrigation'className="mode-irrigation-container">
            <h1 className="header">Irrigation planning using smart system</h1>

            <div className="plan-box">
            
            <form onSubmit={this.handleSubmit} className="box-one" >
            <p className="heading"> Mode</p>
            
                <select onChange={this.handleChange}>
                    <option default>Auto</option>
                    <option value="Manual">Manual</option>
                </select>
            </form>
            

            <form onSubmit={this.handleSubmit} className="box-one">
            <p className="heading">Device Id</p>
            <input
                    type='text'
                    autoComplete='off'                    
            />
            </form>

            <form onSubmit={this.handleSubmit} className="box-one">
            <p className="heading"> Schedule Irrigation Date</p>
            <input
                    type='date'
                    autoComplete='off'                    
            />
            </form>

            <form onSubmit={this.handleSubmit}className="box-one" >
            <p className="heading"> Set Threshold Level to Start the Water Pump</p>
            <select onChange={this.handleChange}>
                    <option default>20</option>
                    <option value="2">40</option>
                    <option value="3">60</option>
                    <option value="4">80</option>
                    
            </select>
            </form>

            <form onSubmit={this.handleSubmit} className="box-one">
            <p className="heading">Set Threshold Level to Stop the Water Pump</p>
            <select onChange={this.handleChange}>
                    <option default>20</option>
                    <option value="2">40</option>
                    <option value="3">60</option>
                    <option value="4">80</option>
            </select>
            </form>
            </div>  
            
            <div className="button-group">                   
                <Button variant="success" size="lg" className='btns'>Save & Schedule Irrigation</Button>{'   '}
                <Button variant="success" size="lg" active className='btns1' onClick="showMessage()">Start Irrigation</Button>{'   '}
                <Button variant="success" size="lg" active onClick="showMessage()">Stop Irrigation</Button>
            </div>
        </div>
        );
    };
};


export default ModeIrrig;
