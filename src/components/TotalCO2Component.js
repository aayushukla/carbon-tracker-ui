import React, { useEffect, useState } from 'react';
import MotorService from '../services/MotorService';
import BatteryService from '../services/BatteryService';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function TotalCO2Component() {
    const [batteryData, setBatteryData] = useState([]);
    const [motorData, setMotorData] = useState([]);

    useEffect(() => {
        async function calculateTotalCO2() {
            console.log("Method call for calculateTotalCO2");

            const batteryRes = await BatteryService.getBatteryData()
            setBatteryData([...batteryRes])

            const motorRes = await MotorService.getMotorData()
            setMotorData([...motorRes])

            console.log("Fetched data ", batteryData)
        }
        calculateTotalCO2()
        // BatteryService.addBattery() working
    }
        , []);


    const totalBatteryCo2 = batteryData.reduce(function (res, item) {
        return res + item.co2;
    }, 0);
    const totalMotorCo2 = motorData.reduce(function (res, item) {
        return res + item.co2;
    }, 0);
    const totalCO2 = (totalBatteryCo2 + totalMotorCo2);
    console.log("totalBatteryCo2", totalBatteryCo2);
    console.log("totalMotorCo2", totalMotorCo2);
    return (

        <div>
            <h1>Total CO2</h1>
            {
                totalCO2
            }
            <Link to="/home">Click here to see CO2 breakdown</Link>
        </div>
    )
}

export default TotalCO2Component;