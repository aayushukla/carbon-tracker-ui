import React, { useEffect, useState } from 'react';
import MotorService from '../services/MotorService';
import BatteryService from '../services/BatteryService';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import HPTService from '../services/HPTService';
import GroundTransportService from '../services/GroundTransportService';
import SeaTransportService from '../services/SeaTransportService';
import CO2NavBar from './CO2NavBar';


function TotalCO2Component() {

  const [batteryData, setBatteryData] = useState([]);
  const [motorData, setMotorData] = useState([]);
  const [hptData, sethptData] = useState([]);
  const [groundTransportData, setgroundTransportData] = useState([]);
  const [seaTransportData, setseaTransportData] = useState([]);
  const [serialNum, setSerialNum] = useState('');
  const [visible, setVisible] = useState(false);


  const handleSubmit = event => {

    setVisible(true)
    event.preventDefault();
    setSerialNum('');

    async function getCO2Val() {

      //filters items according to entered serialNumber

      const motortotal = await MotorService.getMotorDataByID(serialNum)
      console.log("Input Value", serialNum)
      setMotorData([...motortotal])

      const batteryTotal = await BatteryService.getBatteryDataByID(serialNum)
      setBatteryData([...batteryTotal])

      const hptTotal = await HPTService.getHPTDataByID(serialNum)
      sethptData([...hptTotal])

      const groundTransportTotal = await GroundTransportService.getGroundTransportDataByID(serialNum)
      setgroundTransportData([...groundTransportTotal])

      const seaTransportTotal = await SeaTransportService.getSeaTransportDataByID(serialNum)
      setseaTransportData([...seaTransportTotal])

    }

    getCO2Val()

  };

  const totalBatteryCo2 = batteryData.reduce(function (res, item) {
    return res + item.co2;
  }, 0);
  const totalMotorCo2 = motorData.reduce(function (res, item) {
    return res + item.co2;
  }, 0);
  const totalHPTCo2 = hptData.reduce(function (res, item) {
    return res + item.co2;
  }, 0);
  const totalGroundTransportCo2 = groundTransportData.reduce(function (res, item) {
    return res + item.co2;
  }, 0);

  const totalSeaTransportCo2 = seaTransportData.reduce(function (res, item) {
    return res + item.co2;
  }, 0);


  const totalCO2 = (totalBatteryCo2 + totalMotorCo2 + totalHPTCo2);

  console.log("totalBatteryCo2", totalBatteryCo2);
  console.log("totalMotorCo2", totalMotorCo2);
  console.log("totalHPTCo2", totalHPTCo2);

  return (
    <>
      <CO2NavBar />
      <div className='hpt-container' >
        <Card style={{ width: '40rem', height: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src="https://us.123rf.com/450wm/bakhtiarzein/bakhtiarzein2108/bakhtiarzein210800018/172511672-carbon-neutral-balancing-co2-gas-emission-offset-with-clean-tech-power-eco-wind-solar-versus-pollute.jpg?ver=6" />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}> Enter HPT Serial Number </Form.Label>
                <Form.Control style={{ blockSize: "50px" }} type="text" placeholder="Enter HPT Serial Number" onChange={event => setSerialNum(event.target.value)}
                  value={serialNum} />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ fontSize: "20px" }}>
                Calculate Total CO2
              </Button>
            </Form>
          </Card.Body>
          {visible ? <Card.Footer className='text-center'>

            <div>
              <text style={{fontSize:'20px'}}> The Total CO2 Calculated for the above HPT is: </text>
              <h3>
                {
                  totalCO2
                }
              </h3>  <img style={{ height: '50%', width: '50%' }} src="https://aurora.a.bigcontent.io/v1/static/drill_bosch_lifestyle" />

            </div>
            <Link style={{fontSize:'20px', paddingTop:'10em'}}to="/home">Click here to see CO2 breakdown</Link>

            </Card.Footer> : null}
        </Card>
      </div>
    </>
  )
}

export default TotalCO2Component;