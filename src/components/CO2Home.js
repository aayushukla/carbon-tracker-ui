import React, { Component } from 'react';
import CO2NavBar from './CO2NavBar';

class CO2Home extends Component {
    render() {
        return (
            <div>
                <CO2NavBar/>
                <h4 style = {{textAlign: "center"}}>Welcome To CO2 Emission</h4>
                <img
              src="images/co2home.png"
              className="img"
            />
                
            </div>
        );
    }
}

export default CO2Home;