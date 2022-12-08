import React, { useState, useEffect } from 'react';
// import BatteryService from '../services/BatteryService';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BatteryService from '../services/BatteryService';
import { Carousel } from 'bootstrap';

import {
    MDBCol,
    MDBRow,
    MDBCardText,

} from 'mdb-react-ui-kit';

import {
    CircularProgressbar,
  } from "react-circular-progressbar";import 'react-circular-progressbar/dist/styles.css';

function BatteryComponent(props) {


    const [totalCo2, setTotalCo2] = useState(0);
    const [batteryCost, setbatteryCost] = useState(0);
    const [batteryLength, setLength] = useState(0);
    const [salescost, setSalesCost] = useState(0);
    useEffect(() => {

        async function getBatteryData() {
            const co2 = await BatteryService.getTotalCo2();
            setTotalCo2(co2);
            const cost = await BatteryService.getCostData();
            setbatteryCost(cost);
            const salescost = await BatteryService.getSalesCostData();
            setSalesCost(salescost);
            const batteryLen = await BatteryService.getLength();
            setLength(batteryLen);


        }


        console.log("Battery Page", totalCo2)
        getBatteryData();

    });



    return (
        <>
            <CO2NavBar />
            <div className="co2container" >
                <SidebarComponent value="Battery" />

                <main style={{ margin: '2%' }}>
                    {/* <h4 style={{ margin: '0.5%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px', textAlign:'center' }}>
                        Battery Supplier</h4> */}

                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card style={{ alignItems: 'center', display: 'flex', justifyItems: 'center' }}>
                                <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Total CO2 Emission - Battery
                                </Card.Header>
                                <CircularProgressbar
                                styles={{
                                   root : {width:'20%', marginTop:'2%'},
                                   path: {stroke: totalCo2 < 500 ? 'green' : 'red'}
                                  }}  value={totalCo2} text={`${totalCo2}`} maxValue={1000} />
                                {/* <Card.Img variant="top" style={{ width: '50%', height: '50%' }} src="https://i.pinimg.com/originals/8a/97/93/8a979307cfdf16f80b8b869280b5f37e.jpg" /> */}
                                <Card.Body>
                                    <Card.Text style={{ fontSize: '20px' }} className='text-center'>
                                         kgCO2
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ marginTop: '15px' }} className='text-center'>
                                <Card.Body >
                                    Are you looking for Historical Data of Battery Component?
                                    <br></br>
                                    <a href="/co2History"  >Click Here!</a>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>
                            <Card>
                                <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Trends in Battery Component
                                </Card.Header>
                                <Card.Body>

                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Manufacturing Cost </MDBCardText>
                                        </MDBCol>
                                        <MDBCol >
                                            <MDBCardText >
                                                {batteryCost}$
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Sales Price </MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                {salescost}$
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Batteries in Use</MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                {batteryLength}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Highest CO2 for SN </MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                60000
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                </Card.Body>
                            </Card>

                            <Card style={{ marginTop: '15px', alignItems: 'center', display: 'flex', justifyItems: 'center' }} className='text-center'>
                                <Card.Img style={{ width: '50%' }} src="https://www.totalbattery.com/wp-content/uploads/2019/03/solar-group-768x459.jpg">

                                </Card.Img>
                                <Card.Text style={{ marginTop: '1px', marginBottom: '2%' }}>
                                <a href ="">Find more about Battery Suppliers!</a>
                                </Card.Text>
                            </Card>

                        </Col>




                    </Row>

                </main>
            </div>

        </>
    );
}

export default BatteryComponent;