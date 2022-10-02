import React, { useEffect, useState } from 'react';
import MotorService from '../services/MotorService';
import BatteryService from '../services/BatteryService';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function TotalCO2Component() {
    const [batteryData, setBatteryData] = useState([]);
    const [motorData, setMotorData] = useState([]);
    const [co2Val, setCo2] = useState('');


    const handleSubmit = event => {
        event.preventDefault(); 
        setCo2('');  

        async function getCO2Val () {
            const motortotal = await MotorService.getMotorDataByID(co2Val)
            console.log("Input Value",co2Val)
            setMotorData([...motortotal])
    
            const batteryTotal = await BatteryService.getBatteryDataByID(co2Val)
            setMotorData([...batteryTotal])
    
        }
        getCO2Val()
      };

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

        <div className='hpt-container'>

        <Card  style={{ width: '40rem', height: '40rem' }}>
    
          <Card.Body>
          <Card.Img variant="top" src="https://us.123rf.com/450wm/bakhtiarzein/bakhtiarzein2108/bakhtiarzein210800018/172511672-carbon-neutral-balancing-co2-gas-emission-offset-with-clean-tech-power-eco-wind-solar-versus-pollute.jpg?ver=6" />
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{fontSize: "20px"}}>Enter Hornet Power Tools Number: </Form.Label>
            <Form.Control  style={{blockSize: "50px"}} type="text" placeholder="Enter HPT Number" onChange={event => setCo2(event.target.value)}
              value={co2Val}s />
          </Form.Group>
          <Button variant="primary" type="submit" style={{fontSize: "20px"}}>
            Calculate Total CO2
          </Button>
           
        </Form>
        <Link to="/home">Click here to see CO2 breakdown</Link>
    
          </Card.Body>
    
          <Card.Footer className='text-center'>
          <text> The Total CO2 Calculated for the above HPT is: </text> 
          
        <h3>
         
        {
                totalCO2
        }
        </h3>
          </Card.Footer>
         
        </Card>
     
            </div>
    )
}

export default TotalCO2Component;