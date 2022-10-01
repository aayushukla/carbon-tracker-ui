import React, { Component } from 'react';
import BatteryService from '../services/BatteryService';

class BatterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            battery: []
        }
    }

    componentDidMount() {
        BatteryService.getBatteryData().then((response) => {
            this.setState({ battery: response })
            console.log(this.state.battery);
        });
    }

    render() {
        return (
            <div>
                <h1>Battery Information</h1>
                {this.state.battery.map(item => item.co2)}
            </div>
        );
    }
}



export default BatterComponent;