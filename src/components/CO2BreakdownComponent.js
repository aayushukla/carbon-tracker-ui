import './TotalCO2Component.js';
import CO2NavBar from './CO2NavBar.js';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import {
    CircularProgressbar,
  } from "react-circular-progressbar";import 'react-circular-progressbar/dist/styles.css';


//I have no idea what I'm doing, or how to pass values from component to component .-.
function CO2Breakdown(props) {
    const location = useLocation();

    console.log("location: ",location)
    const totalHPTCo2 = location.state?.HPTCo2;
    const totalBatteryCo2 = location.state?.batteryCo2;
    const totalMotorCo2 = location.state?.motorCo2;
    const totalGroundCo2 = location.state?.groundCo2;
    const totalSeaCo2 = location.state?.seaCo2;

    const percentage = 66;


    const sourceStyle = {
        textAlign: 'center',
        backgroundColor: 'lightgray',
        fontSize: '20px'
    }

    const co2Style = {
        textAlign: 'center',
        backgroundColor: "lightgray",
        fontSize: '20px',
        width: '150px'
    }

    return (
        <>
            <CO2NavBar />
            <div style={{ textAlign: 'center', marginLeft: '5%', marginTop: '0%', marginRight: '1%'}}>
                <h4 style={{ textAlign: "center", marginTop: '20px', paddingRight: '0px' }}>You can see total CO2 breakdown here..</h4>
                <br></br>
                <Row style={{marginLeft: '6%', marginTop: '-1%', padding: '-12%'}} >
                        <Col style={{padding:'-10px', paddingRight:'0px'}}>
                            <Card style={{  marginTop: '15px', alignItems: 'center', display: 'flex', justifyItems: 'center',  width: "65%" }}>
                                <Card.Header style={{ fontSize: '15px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                  Battery Component
                                </Card.Header>
                                <Card.Body>
                                <CircularProgressbar
                                styles={{
                                   root : {width:'50%'},
                                  }}  value={totalBatteryCo2} text={`${totalBatteryCo2}`} />
                                </Card.Body>
                            </Card>

                            <Card  style={{ marginTop: '15px',alignItems: 'center', display: 'flex', justifyItems: 'center',  width: "65%" }}  className='text-center'>
                               
                            <Card.Header style={{ fontSize: '15px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                            Ground Transportation       
                            </Card.Header>
                            <Card.Body >
                            <CircularProgressbar
                                styles={{
                                   root : {width:'50%'},
                                  }}  value={totalGroundCo2} text={`${totalGroundCo2}`} />
                                   </Card.Body>
                            </Card>


                        </Col>

                        <Col style={{padding:'-10px'}}>
                            <Card  style={{ marginLeft: '-6%', marginTop: '15px',alignItems: 'center', display: 'flex', justifyItems: 'center',  width: "65%" }} >
                                <Card.Header style={{ fontSize: '15px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                Motor Component                                
                                </Card.Header>
                                <Card.Body>
                                <CircularProgressbar
                                styles={{
                                   root : {width:'50%'},
                                  }}  value={totalMotorCo2} text={`${totalMotorCo2}`} />
                                      

                                </Card.Body>
                            </Card>

                            <Card  style={{ marginLeft: '-6%',marginTop: '15px',alignItems: 'center', display: 'flex', justifyItems: 'center',  width: "65%" }}  className='text-center'>
                               
                            <Card.Header style={{ fontSize: '15px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                            Sea Transportation       
                            </Card.Header>
                            <Card.Body >
                            <CircularProgressbar
                                styles={{
                                   root : {width:'50%'},
                                  }}  value={totalSeaCo2} text={`${totalSeaCo2}`} />

                                   </Card.Body>
                            </Card>
                

                        </Col>
                        <Col style={{padding:'-10px'}}>
                            <Card  style={{ marginLeft: '-15%',marginTop: '15px',alignItems: 'center', display: 'flex', justifyItems: 'center',  width: "70%" }} >
                                <Card.Header style={{ fontSize: '15px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                  Hornet Power Tool
                                </Card.Header>
                                <Card.Body>

                                <CircularProgressbar
                                styles={{
                                   root : {width:'50%'},
                                  }}  value={totalHPTCo2} text={`${totalHPTCo2}`} />

                                </Card.Body>
                            </Card>


                        </Col>




                    </Row>


                {/* <div>
                    <input type="text" value="Hornet Power Tools" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalHPTCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Battery Supplier" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalBatteryCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Motor Supplier" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalMotorCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Sea Transportation" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalSeaCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Ground Transportation" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalGroundCo2} style={co2Style} disabled />
                </div> */}
                {/* <text style={{fontSize:'20px'}}> The Total CO2 for the HPT is: </text>
            {
                totalHPTCo2
            }
            </div>
            
            <div>
            <text style={{fontSize:'20px'}}> The Total CO2 for the Battery is: </text>
            {
                totalBatteryCo2
            }
            </div>

            <div>
            <text style={{fontSize:'20px'}}> The Total CO2 for the Motor is: </text>
            {
                totalMotorCo2
            }
            </div> */}
                <br></br>
                <Link to={{ pathname: "/totalco2", query: { msg: 'hi' } }}>
                    <Button variant="primary" style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}>Back</Button>
                </Link>
            </div>
        </>
    );
}

export default CO2Breakdown;