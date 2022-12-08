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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from '@mui/material/Alert';
import { HPTImages } from './HPTImages';

var serial = 0;
var motorInfo = 0;
var batteryInfo = 0;
var GTInfo = 0;
var STInfo = 0;


function TotalCO2Component() {

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [batteryData, setBatteryData] = useState([]);
  const [motorData, setMotorData] = useState([]);
  const [hptData, sethptData] = useState([]);
  const [groundTransportData, setgroundTransportData] = useState([]);
  const [seaTransportData, setseaTransportData] = useState([]);

  const [serialNum, setSerialNum] = useState('');
  const [visible, setVisible] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);
  const [displayAlert, setDisplay] = useState(false);



  const handleChange = event => {
    if (event.target.checked) {
      setVisibleContent(true)

    } else {
      console.log("Checkbox")
      setVisibleContent(false)
    }
  };

  const handleSubmit = event => {


    setVisible(true)
    event.preventDefault();
    setSerialNum('');
    serial = serialNum;

    async function getCO2Val() {

      //filters items according to entered serialNumber

      const hptTotal = await HPTService.getHornetPowerToolDataByID(serialNum)
      sethptData([...hptTotal])
      setSerialNum(serialNum);
      if (Object.keys(hptTotal).length == 0) {
        setDisplay(true)

      }

      const motortotal = await MotorService.getMotorDataByID(hptTotal[0].motorUsed)
      setMotorData([...motortotal])

      const batteryTotal = await BatteryService.getBatteryDataByID(hptTotal[0].batteryUsed)
      setBatteryData([...batteryTotal])

      const groundTransportTotal = await GroundTransportService.getGroundTransportDataByID(hptTotal[0].groundTrackingNumber)
      setgroundTransportData([...groundTransportTotal])

      const seaTransportTotal = await SeaTransportService.getSeaTransportDataByID(hptTotal[0].shipTrackingNumber)
      setseaTransportData([...seaTransportTotal])

      motorInfo = hptTotal[0].motorUsed;
      batteryInfo = hptTotal[0].batteryUsed;
      GTInfo = hptTotal[0].groundTrackingNumber;
      STInfo = hptTotal[0].shipTrackingNumber;

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

  const totalCO2 = (totalBatteryCo2 + totalMotorCo2 + totalHPTCo2 + totalGroundTransportCo2 + totalSeaTransportCo2);

  console.log("totalBatteryCo2", totalBatteryCo2);
  console.log("totalMotorCo2", totalMotorCo2);
  console.log("totalHPTCo2", totalHPTCo2);
  console.log("totalGroundCo2", totalGroundTransportCo2);
  console.log("totalSeaCo2", totalSeaTransportCo2);

  return (

    <>


      <CO2NavBar />

      <div class="row no-gutters" style={{ marginTop: '2%' }} >

        <div class="col-6 col-md-4">
          <div className='card-container' style={{marginLeft: '3%' }}>
            <Card style={{ border: 'white' }}>
              <Card.Body>
                <Card.Img variant="top" src="https://us.123rf.com/450wm/bakhtiarzein/bakhtiarzein2108/bakhtiarzein210800018/172511672-carbon-neutral-balancing-co2-gas-emission-offset-with-clean-tech-power-eco-wind-solar-versus-pollute.jpg?ver=6" />
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter HPT Serial Number"
                      className="mb-3"
                    >
                      <Form.Control style={{ blockSize: "50px" }} type="text" placeholder="Enter HPT Serial Number" onChange={event => setSerialNum(event.target.value)}
                        value={serialNum} />
                    </FloatingLabel>

                  </Form.Group>
                  <Button variant="primary" type="submit" style={{ fontSize: "20px", justifyItems: 'center', backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                    Calculate Total CO2
                  </Button>

                  <Form.Check
                    style={{ marginTop: '3%' }}
                    type="switch"
                    id="custom-switch"
                    label="Show CO2 Breakdown"
                    onChange={handleChange}
                  />
                </Form>
              </Card.Body>
              {displayAlert ? <Alert severity="error" style={{}}> HPT Serial Number not found </Alert>

                : null}

            </Card>
          </div>
        </div>

        {visible ? <div class="col-12 col-sm-6 col-md-8">

          <div className='card-container' style={{marginLeft: '4%'}}>

            <Card style={{ border: 'white', width: '100%', height: '150%' }}>
              <Card.Header style={{ backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                <h style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}> Serial Number: {serial} </h>
              </Card.Header>

              <Card style={{
                width: '100%', padding: '10px', borderColor: 'white', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>

                <Card.Title>Total CO2 Consumed</Card.Title>
                <Card.Text style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
                  {
                    totalCO2
                  }

                </Card.Text>



              </Card>


              <div className='row justify-content-sm-center' style={{display: 'flex', justifyContent: 'center'}}>
                <div className="col-sm">
                  <Card className='comp-card-container'>
                    Battery Used: {batteryInfo}

                  </Card>
                </div>
                <div className="col-sm">
                  <Card className='comp-card-container'>
                    Motor Used: {motorInfo}
                  </Card>
                </div>

              </div>
              <div className='row justify-content-sm-center'>
                <div className="col-sm">
                  <Card className='comp-card-container'>
                    Sea Transportation: {STInfo}
                  </Card>
                </div>
                <div className="col-sm">
                  <Card className='comp-card-container'>
                    Ground Transportation: {GTInfo}
                  </Card></div>
              </div>

              <div className="col-sm">
                <Card className='comp-card-container'>
                  Drill Image: 
                  {
                    HPTImages.map((hpt) => {
                      // console.log("hpt.sn : ",hpt.sn,serialNum, hpt.sn === serialNum, hpt.image)
                      hpt.sn === serialNum ? 
                        <img style={{ width: "150px", height: "100px" }} src={hpt.image} />
                        :
                        <img style={{ width: "150px", height: "100px" }} src="https://aurora.a.bigcontent.io/v1/static/drill_bosch_lifestyle" />
                        
                    })
                  }
                  <img style={{ width: "150px", height: "100px" }} src="https://aurora.a.bigcontent.io/v1/static/drill_bosch_lifestyle" />
                </Card></div>


              {visibleContent ?
                <Link style={{ fontSize: '15px', paddingBottom: '10px', paddingLeft: '5px' }}
                  to="/breakdown" state={{
                    HPTCo2: totalHPTCo2, batteryCo2: totalBatteryCo2,
                    motorCo2: totalMotorCo2, groundCo2: totalGroundTransportCo2, seaCo2: totalSeaTransportCo2
                  }}>Go to CO2 breakdown</Link> : null}


            </Card>

          </div>
        </div> : null}


      </div>

    </>

  )
}

export default TotalCO2Component;